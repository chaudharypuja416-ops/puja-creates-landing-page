import type { Metadata } from "next";
import { CheckCircle2, MessageCircle, PlayCircle } from "lucide-react";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Your AI marketing consultation request has been received by Puja Creates."
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <section className="relative px-5 pb-20 pt-12 sm:px-6 lg:px-8">
        <div className="premium-grid absolute inset-x-0 top-0 h-96 opacity-70" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft text-brand-primary shadow-glow">
            <CheckCircle2 aria-hidden="true" className="h-8 w-8" />
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-primary">
            Request received
          </p>
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-black leading-[1.05] text-brand-ink sm:text-5xl lg:text-6xl">
            Thank You! Your Consultation Request Has Been Received.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Your request has been submitted successfully.
          </p>
        </div>

        <div className="relative mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand-primary">
              <PlayCircle aria-hidden="true" className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-brand-ink">
              Please watch the short video below before your consultation.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              It explains what we&apos;ll cover during the session and how you can
              get the most value from it.
            </p>
            <div className="mt-7 flex aspect-video items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 text-center">
              <div>
                <PlayCircle
                  aria-hidden="true"
                  className="mx-auto h-12 w-12 text-brand-primary"
                />
                <p className="mt-3 text-sm font-semibold text-slate-500">
                  Embed your welcome video here.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-brand-secondary">
              <MessageCircle aria-hidden="true" className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-brand-ink">
              After Watching the Video
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              If you have any questions or want to share a few more details
              about your business before the consultation, you can message me
              directly on WhatsApp.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              The more I understand about your business beforehand, the better I
              can tailor your consultation and customized marketing plan.
            </p>
            <a
              href="https://wa.me/YourNumber"
              className="mt-7 inline-flex min-h-14 w-full items-center justify-center rounded-2xl bg-brand-primary px-6 text-base font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#0b897a] focus:outline-none focus:ring-4 focus:ring-brand-primary/25"
            >
              Open WhatsApp
            </a>
          </section>
        </div>

        <section className="relative mx-auto mt-6 max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
          <h2 className="text-2xl font-extrabold text-brand-ink">
            What Happens Next?
          </h2>
          <ul className="mt-6 grid gap-4 text-left sm:grid-cols-2">
            {[
              "I'll review the information you submitted.",
              "I'll contact you to confirm your consultation if needed.",
              "During the call, we'll discuss your business, your current marketing challenges, and opportunities to improve your lead generation.",
              "You'll receive a customized AI-powered marketing plan based on our discussion."
            ].map((item) => (
              <li key={item} className="flex gap-3 leading-7 text-slate-600">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 shrink-0 text-brand-primary"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-7 leading-7 text-slate-600">
            I look forward to speaking with you and learning more about your
            business.
          </p>
        </section>
      </section>
    </main>
  );
}
