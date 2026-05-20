"use client";

import { useState } from "react";

interface ContactFormProps {
  dict: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    submit: string;
  };
}

export default function ContactForm({ dict }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-brand-200 bg-brand-50 p-12 text-center dark:border-brand-500/30 dark:bg-brand-500/10">
        <div className="flex h-16 w-16 items-center justify-center rounded-full gradient-brand text-3xl text-white">
          ✓
        </div>
        <h3 className="mt-4 text-2xl font-bold text-ink-900 dark:text-white">
          Thank you!
        </h3>
        <p className="mt-2 text-ink-600 dark:text-ink-200">
          We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink-100 bg-white p-8 shadow-sm dark:border-ink-800 dark:bg-ink-900"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-sm font-semibold text-ink-700 dark:text-ink-200"
          >
            {dict.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-ink-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-ink-700 dark:bg-ink-950 dark:text-white"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-sm font-semibold text-ink-700 dark:text-ink-200"
          >
            {dict.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-ink-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-ink-700 dark:bg-ink-950 dark:text-white"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="text-sm font-semibold text-ink-700 dark:text-ink-200"
          >
            {dict.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-2 w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-ink-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-ink-700 dark:bg-ink-950 dark:text-white"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="text-sm font-semibold text-ink-700 dark:text-ink-200"
          >
            {dict.subject}
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="mt-2 w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-ink-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-ink-700 dark:bg-ink-950 dark:text-white"
          />
        </div>
      </div>
      <div className="mt-6">
        <label
          htmlFor="message"
          className="text-sm font-semibold text-ink-700 dark:text-ink-200"
        >
          {dict.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="mt-2 w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-ink-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-ink-700 dark:bg-ink-950 dark:text-white"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full rounded-lg gradient-brand px-6 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-[1.02] disabled:opacity-60"
      >
        {loading ? "..." : dict.submit} →
      </button>
    </form>
  );
}
