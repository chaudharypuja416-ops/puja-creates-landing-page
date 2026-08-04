const steps = [
  "Book your free consultation by filling out the form.",
  "Meet one-to-one to discuss your business, goals, and current marketing challenges.",
  "Receive a customized AI-powered marketing strategy designed for your business."
];

export function Process() {
  return (
    <section className="px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black text-brand-ink sm:text-4xl">
            Consultation Process
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step}
              className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-lg font-black text-white">
                {index + 1}
              </div>
              <h3 className="text-xl font-extrabold text-brand-ink">
                Step {index + 1}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{step}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
