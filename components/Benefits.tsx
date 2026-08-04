import { Bot, CheckCircle2, Clock, Lightbulb, Target } from "lucide-react";

const benefits = [
  {
    icon: Target,
    text: "Discover what's preventing your marketing from bringing consistent results."
  },
  {
    icon: Bot,
    text: "Receive a customized AI-powered marketing plan for your business."
  },
  {
    icon: Lightbulb,
    text: "Learn practical ways to improve your lead generation."
  },
  {
    icon: Clock,
    text: "Understand where AI can help save time and improve your marketing."
  },
  {
    icon: CheckCircle2,
    text: "Leave with clear next steps you can use for your business."
  }
];

export function Benefits() {
  return (
    <section className="px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black text-brand-ink sm:text-4xl">
            How You Benefit From This Consultation
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map(({ icon: Icon, text }) => (
            <article
              key={text}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand-primary">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </div>
              <p className="text-base font-semibold leading-7 text-brand-ink">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
