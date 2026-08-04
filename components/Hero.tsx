import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative px-5 pb-16 pt-8 text-center sm:px-6 sm:pb-20 lg:px-8 lg:pt-14">
      <div className="premium-grid absolute inset-x-0 top-0 h-[34rem] opacity-80" />
      <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <p className="mx-auto mb-5 w-fit rounded-full border border-brand-primary/20 bg-white/80 px-4 py-2 text-sm font-bold text-brand-primary shadow-sm backdrop-blur">
          Free one-to-one consultation
        </p>
        <h1 className="mx-auto max-w-5xl text-balance text-4xl font-black leading-[1.04] tracking-normal text-brand-ink sm:text-5xl md:text-6xl lg:text-7xl">
          Get a Free AI Marketing Consultation and Receive a{" "}
          <span className="text-brand-primary">Customized Marketing Plan</span>{" "}
          for Your Business
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-balance text-lg leading-8 text-slate-600 sm:text-xl">
          Find the marketing gaps that may be holding your business back and
          learn how AI-powered marketing can help you generate more qualified
          leads.
        </p>
        <a
          href="#book-call"
          className="mt-9 inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-brand-primary px-7 text-base font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#0b897a] focus:outline-none focus:ring-4 focus:ring-brand-primary/25"
        >
          Book Free Consultation
          <ArrowDown aria-hidden="true" className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
