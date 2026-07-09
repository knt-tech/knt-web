"use client";

import { useState } from "react";
import Icon from "@/components/Icon";

interface ContactFormProps {
  dict: {
    name: string;
    company: string;
    email: string;
    phone: string;
    industry: string;
    industryOptions: string[];
    subject: string;
    subjectOptions: string[];
    message: string;
    submit: string;
    required: string;
    optional: string;
    successTitle: string;
    successBody: string;
    sending: string;
  };
}

const fieldClass =
  "mt-2 w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-ink-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-ink-700 dark:bg-ink-950 dark:text-white";

function RequiredMark({ label }: { label: string }) {
  return (
    <span className="ml-1 text-brand-600 dark:text-brand-400" aria-hidden="true">
      *<span className="sr-only">{label}</span>
    </span>
  );
}

export default function ContactForm({ dict }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // NOTE: front-end demo only — wire this to an email service / API route
    // (e.g. a POST handler) to actually deliver submissions.
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-center justify-center rounded-2xl border border-brand-200 bg-brand-50 p-12 text-center dark:border-brand-500/30 dark:bg-brand-500/10"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full gradient-brand text-white">
          <Icon name="check" className="h-8 w-8" />
        </div>
        <h3 className="mt-4 text-2xl font-bold text-ink-900 dark:text-white">
          {dict.successTitle}
        </h3>
        <p className="mt-2 text-ink-600 dark:text-ink-200">{dict.successBody}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm sm:p-8 dark:border-ink-800 dark:bg-ink-900"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-ink-700 dark:text-ink-200">
            {dict.name}
            <RequiredMark label={dict.required} />
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-semibold text-ink-700 dark:text-ink-200">
            {dict.company}
          </label>
          <input id="company" name="company" type="text" autoComplete="organization" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-ink-700 dark:text-ink-200">
            {dict.email}
            <RequiredMark label={dict.required} />
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-ink-700 dark:text-ink-200">
            {dict.phone}
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="industry" className="text-sm font-semibold text-ink-700 dark:text-ink-200">
            {dict.industry}
          </label>
          <select id="industry" name="industry" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              —
            </option>
            {dict.industryOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="subject" className="text-sm font-semibold text-ink-700 dark:text-ink-200">
            {dict.subject}
          </label>
          <select id="subject" name="subject" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              —
            </option>
            {dict.subjectOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-semibold text-ink-700 dark:text-ink-200">
          {dict.message}
          <RequiredMark label={dict.required} />
        </label>
        <textarea id="message" name="message" rows={6} required className={fieldClass} />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg gradient-brand px-6 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-[1.02] disabled:opacity-60"
      >
        {loading ? (
          dict.sending
        ) : (
          <>
            {dict.submit}
            <Icon name="arrow-right" className="h-5 w-5" />
          </>
        )}
      </button>
    </form>
  );
}
