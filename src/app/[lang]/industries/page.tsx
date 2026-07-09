import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import { buildMetadata } from "@/lib/seo";
import Icon, { type IconName } from "@/components/Icon";
import { CTASection, Eyebrow } from "@/components/Section";

const industryIcons: IconName[] = [
  "factory",
  "logistics",
  "retail",
  "healthcare",
  "construction",
  "food",
];

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/industries">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return buildMetadata(lang, "industries");
}

export default async function IndustriesPage({
  params,
}: PageProps<"/[lang]/industries">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const ind = dict.industries;

  return (
    <>
      <section className="relative overflow-hidden gradient-brand-dark py-20 text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Eyebrow>{dict.nav.industries}</Eyebrow>
          </div>
          <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
            {ind.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-200">
            {ind.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-ink-600 dark:text-ink-300">
            {ind.intro}
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ind.items.map((item, idx) => (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-ink-100 bg-white p-7 transition-all hover:border-brand-300 hover:shadow-lg dark:border-ink-800 dark:bg-ink-900 dark:hover:border-brand-500/40"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                  <Icon name={industryIcons[idx]} className="h-7 w-7" />
                </div>
                <h2 className="mt-5 text-xl font-bold">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {item.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-ink-100 pt-5 dark:border-ink-800">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-ink-700 dark:text-ink-200"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600 dark:text-brand-400"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        lang={lang}
        title={ind.cta.title}
        subtitle={ind.cta.subtitle}
        button={ind.cta.button}
      />
    </>
  );
}
