import { AlertCircle } from "lucide-react";

export function Problem() {
  return (
    <section className="px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-soft sm:p-10">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-brand-secondary">
          <AlertCircle aria-hidden="true" className="h-6 w-6" />
        </div>
        <h2 className="text-3xl font-black text-brand-ink sm:text-4xl">
          Is This for You?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          If you&apos;re a small or medium-sized business owner struggling to
          generate consistent leads or sales, this free one-to-one consultation
          is designed for you.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          You&apos;ll receive a customized marketing plan based on your business
          and your current marketing challenges.
        </p>
      </div>
    </section>
  );
}
