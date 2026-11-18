import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import { buildMetadata } from "@/lib/seo";
import Icon, { type IconName } from "@/components/Icon";
import { CTASection, SectionHeading } from "@/components/Section";

const stepIcons: IconName[] = [
  "discovery",
  "design",
  "build",
  "quality",
  "deploy",
  "support",
];
const principleIcons: IconName[] = ["eye", "shield", "handshake", "target"];

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/process">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return buildMetadata(lang, "process");
}

export default async function ProcessPage({
  params,
}: PageProps<"/[lang]/process">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const p = dict.process;

  return (
    <>
      <section className="relative overflow-hidden gradient-brand-dark py-20 text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold sm:text-5xl">{p.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-200">
            {p.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-lg leading-relaxed text-ink-600 dark:text-ink-300">
            {p.intro}
          </p>

          {/* Vertical timeline of delivery steps */}
          <ol className="relative mt-16 space-y-10 border-l-2 border-ink-100 pl-8 dark:border-ink-800">
            {p.steps.map((step, idx) => (
              <li key={step.title} className="relative">
                <span className="absolute -left-[41px] flex h-10 w-10 items-center justify-center rounded-full gradient-brand text-white shadow-lg ring-4 ring-white dark:ring-ink-950">
                  <Icon name={stepIcons[idx]} className="h-5 w-5" />
                </span>
                <div className="rounded-2xl border border-ink-100 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
                    <span>Step {idx + 1}</span>
                  </div>
                  <h2 className="mt-1 text-xl font-bold">{step.title}</h2>
                  <p className="mt-2 leading-relaxed text-ink-600 dark:text-ink-300">
                    {step.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {step.deliverables.map((d) => (
                      <li
                        key={d}
                        className="inline-flex items-center gap-1.5 rounded-full border border-ink-100 bg-ink-50 px-3 py-1 text-xs font-medium text-ink-700 dark:border-ink-800 dark:bg-ink-950 dark:text-ink-200"
                      >
                        <Icon
                          name="check"
                          className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400"
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-ink-50 py-20 dark:bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={p.principles.title} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {p.principles.items.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-2xl border border-ink-100 bg-white p-6 dark:border-ink-800 dark:bg-ink-950"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                  <Icon name={principleIcons[idx]} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        lang={lang}
        title={p.cta.title}
        subtitle={p.cta.subtitle}
        button={p.cta.button}
      />
    </>
  );
}
