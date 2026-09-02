import { CheckCircle2, LockKeyhole } from "lucide-react";
import { FlodeskEmbed } from "@/components/FlodeskEmbed";

export function CTAForm() {
  return (
    <section id="book-call" className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="pt-2 text-center lg:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">
            Book the call
          </p>
          <h2 className="mt-4 text-3xl font-black text-brand-ink sm:text-4xl">
            Get your customized AI-powered marketing plan.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Fill out the form below to book your free consultation.
          </p>
          <div className="mt-7 rounded-3xl border border-brand-primary/20 bg-brand-soft p-5 text-left">
            <p className="font-extrabold text-brand-ink">
              Customized Strategy for Your Business
            </p>
            <p className="mt-2 leading-7 text-slate-600">
              Share your business details so your consultation can focus on your
              current marketing challenges.
            </p>
          </div>
          <ul className="mt-5 grid gap-3 text-left">
            {[
              "One-to-one consultation",
              "AI-powered marketing plan",
              "Practical lead generation next steps"
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 font-semibold text-brand-ink shadow-sm"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-brand-primary"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FlodeskEmbed />
          <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm font-medium text-slate-500">
            <LockKeyhole aria-hidden="true" className="h-4 w-4" />
            We respect your privacy. No spam.
          </p>
        </div>
      </div>
    </section>
  );
}
