import { Sparkles } from "lucide-react";

export function Urgency() {
  return (
    <section className="px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-brand-ink p-6 text-center shadow-soft sm:p-10">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-primary">
          <Sparkles aria-hidden="true" className="h-6 w-6" />
        </div>
        <h2 className="text-3xl font-black text-white sm:text-4xl">
          One-to-One Consultation
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-200">
          Customized strategy for your business. Fill out the form below to book
          your free consultation.
        </p>
      </div>
    </section>
  );
}
