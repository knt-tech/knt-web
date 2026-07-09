import Link from "next/link";
import Icon from "@/components/Icon";
import type { Locale } from "@/app/[lang]/dictionaries";

// Small "eyebrow" label that sits above a section title.
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <div className={isCenter ? "flex justify-center" : ""}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-lg text-ink-600 dark:text-ink-300">{subtitle}</p>
      ) : null}
    </div>
  );
}

// Reusable closing call-to-action panel shared by every page.
export function CTASection({
  lang,
  title,
  subtitle,
  button,
}: {
  lang: Locale;
  title: string;
  subtitle: string;
  button: string;
}) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl gradient-brand-dark px-6 py-16 text-center shadow-2xl sm:px-12">
        <div aria-hidden="true" className="absolute inset-0 opacity-30">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brand-500 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-brand-700 blur-3xl" />
        </div>
        <div className="relative">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-200">
            {subtitle}
          </p>
          <Link
            href={`/${lang}/contact`}
            className="mt-8 inline-flex items-center gap-2 rounded-lg gradient-brand px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-105"
          >
            {button}
            <Icon name="arrow-right" className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
