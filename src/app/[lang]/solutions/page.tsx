import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import { buildMetadata } from "@/lib/seo";
import Icon, { type IconName } from "@/components/Icon";
import { CTASection, Eyebrow } from "@/components/Section";

const solutionIcons: IconName[] = [
  "erp",
  "warehouse",
  "people",
  "factory",
  "automation",
  "growth",
];

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/solutions">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return buildMetadata(lang, "solutions");
}

export default async function SolutionsPage({
  params,
}: PageProps<"/[lang]/solutions">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const s = dict.solutions;

  return (
    <>
      <section className="relative overflow-hidden gradient-brand-dark py-20 text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Eyebrow>{dict.nav.solutions}</Eyebrow>
          </div>
          <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">{s.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-200">
            {s.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-ink-600 dark:text-ink-300">
            {s.intro}
          </p>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {s.items.map((item, idx) => (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-ink-100 bg-white p-8 transition-all hover:border-brand-300 hover:shadow-xl dark:border-ink-800 dark:bg-ink-900 dark:hover:border-brand-500/50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl gradient-brand text-white shadow-lg">
                    <Icon name={solutionIcons[idx]} className="h-7 w-7" />
                  </div>
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                </div>
                <p className="mt-4 leading-relaxed text-ink-600 dark:text-ink-300">
                  {item.description}
                </p>
                <div className="mt-6 border-t border-ink-100 pt-5 dark:border-ink-800">
                  <div className="text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">
                    {s.labels.outcomes}
                  </div>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {item.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2 text-sm text-ink-700 dark:text-ink-200"
                      >
                        <Icon
                          name="check"
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600 dark:text-brand-400"
                        />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        lang={lang}
        title={s.cta.title}
        subtitle={s.cta.subtitle}
        button={s.cta.button}
      />
    </>
  );
}
