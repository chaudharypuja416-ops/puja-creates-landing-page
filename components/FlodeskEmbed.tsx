"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

function prepareFlodeskHtml(html: string) {
  return html.replace(/data-ff-config="([^"]+)"/, (_match, encodedConfig) => {
    const config = JSON.parse(window.atob(encodedConfig));

    return `data-ff-config="${window.btoa(
      JSON.stringify({
        ...config,
        onSuccess: {
          ...config.onSuccess,
          mode: "message",
          message: config.onSuccess?.message || "",
          redirectUrl: ""
        }
      })
    )}"`;
  });
}

export function FlodeskEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const container = containerRef.current;
    let observer: MutationObserver | undefined;
    let isMounted = true;

    async function mountFlodesk() {
      if (!container) {
        return;
      }

      const response = await fetch("/flodesk-embed.html");
      const html = prepareFlodeskHtml(await response.text());

      if (!isMounted) {
        return;
      }

      container.innerHTML = html;

      const scripts = Array.from(container.querySelectorAll("script"));
      scripts.forEach((oldScript) => {
        const script = document.createElement("script");
        Array.from(oldScript.attributes).forEach((attribute) => {
          script.setAttribute(attribute.name, attribute.value);
        });
        script.text = oldScript.textContent ?? "";
        oldScript.replaceWith(script);
      });

      const flodeskRoot = container.querySelector('[data-ff-el="root"]');
      let hasRedirected = false;

      function scheduleThankYouRedirect() {
        if (hasRedirected) {
          return;
        }

        hasRedirected = true;
        window.setTimeout(() => {
          router.push("/thanks");
        }, 1800);
      }

      observer = new MutationObserver(() => {
        const reachedSuccessStage =
          flodeskRoot?.getAttribute("data-ff-stage") === "success";
        const hasSuccessClass = Boolean(
          container.querySelector(".fd-has-success")
        );

        if (reachedSuccessStage || hasSuccessClass) {
          scheduleThankYouRedirect();
        }
      });

      if (flodeskRoot) {
        observer.observe(flodeskRoot, {
          attributes: true,
          attributeFilter: ["class", "data-ff-stage"],
          subtree: true
        });
      }
    }

    mountFlodesk();

    return () => {
      isMounted = false;
      observer?.disconnect();

      if (container) {
        container.innerHTML = "";
      }
    };
  }, [router]);

  return (
    <div
      ref={containerRef}
      className="flodesk-embed-shell overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft"
    />
  );
}
