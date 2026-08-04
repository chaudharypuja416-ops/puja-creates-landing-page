"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { LockKeyhole, Send } from "lucide-react";

type FormState = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  website: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  fullName: "",
  email: "",
  whatsapp: "",
  businessName: "",
  website: "",
  message: ""
};

function validate(values: FormState) {
  const nextErrors: Errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.fullName.trim()) {
    nextErrors.fullName = "Please enter your full name.";
  }

  if (!values.email.trim()) {
    nextErrors.email = "Please enter your active email.";
  } else if (!emailPattern.test(values.email)) {
    nextErrors.email = "Please enter a valid email address.";
  }

  if (!values.whatsapp.trim()) {
    nextErrors.whatsapp = "Please enter your WhatsApp number.";
  }

  if (!values.businessName.trim()) {
    nextErrors.businessName = "Please enter your business name.";
  }

  return nextErrors;
}

export function CTAForm() {
  const router = useRouter();
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      router.push("/thank-you");
    }, 450);
  }

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
        </div>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              error={errors.fullName}
              label="Full Name"
              name="fullName"
              onChange={(value) => updateField("fullName", value)}
              placeholder="Enter your full name"
              required
              value={values.fullName}
            />
            <Field
              error={errors.email}
              label="Active Email"
              name="email"
              onChange={(value) => updateField("email", value)}
              placeholder="you@example.com"
              required
              type="email"
              value={values.email}
            />
            <Field
              error={errors.whatsapp}
              label="WhatsApp Number"
              name="whatsapp"
              onChange={(value) => updateField("whatsapp", value)}
              placeholder="+1 555 000 0000"
              required
              type="tel"
              value={values.whatsapp}
            />
            <Field
              error={errors.businessName}
              label="Business Name"
              name="businessName"
              onChange={(value) => updateField("businessName", value)}
              placeholder="Your business name"
              required
              value={values.businessName}
            />
          </div>

          <div className="mt-5">
            <Field
              error={errors.website}
              label="Website or Facebook URL"
              name="website"
              onChange={(value) => updateField("website", value)}
              placeholder="https://example.com"
              type="url"
              value={values.website}
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-bold text-brand-ink"
            >
              Anything You Want to Say
            </label>
            <textarea
              id="message"
              name="message"
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="Tell me about your current marketing challenges."
              rows={5}
              value={values.message}
              className="field-focus min-h-36 w-full resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-brand-ink shadow-sm placeholder:text-slate-400"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-brand-primary px-6 text-base font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#0b897a] focus:outline-none focus:ring-4 focus:ring-brand-primary/25 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Book Free Consultation"}
            <Send aria-hidden="true" className="h-5 w-5" />
          </button>

          <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm font-medium text-slate-500">
            <LockKeyhole aria-hidden="true" className="h-4 w-4" />
            We respect your privacy. No spam.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  error,
  label,
  name,
  onChange,
  placeholder,
  required = false,
  type = "text",
  value
}: {
  error?: string;
  label: string;
  name: keyof FormState;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  type?: string;
  value: string;
}) {
  const inputId = `field-${name}`;

  return (
    <div>
      <label htmlFor={inputId} className="mb-2 block text-sm font-bold text-brand-ink">
        {label}
        {required ? <span className="text-brand-primary"> *</span> : null}
      </label>
      <input
        aria-describedby={error ? `${inputId}-error` : undefined}
        aria-invalid={Boolean(error)}
        className="field-focus min-h-14 w-full rounded-2xl border border-slate-200 bg-white px-4 text-base text-brand-ink shadow-sm placeholder:text-slate-400"
        id={inputId}
        name={name}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
      />
      {error ? (
        <p id={`${inputId}-error`} className="mt-2 text-sm font-semibold text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
