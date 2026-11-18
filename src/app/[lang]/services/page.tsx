import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import { buildMetadata } from "@/lib/seo";
import Icon, { type IconName } from "@/components/Icon";
import { CTASection } from "@/components/Section";

const serviceIcons: IconName[] = [
  "analysis",
  "custom-software",
  "erp",
  "mobile",
  "integration",
  "support",
];

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/services">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return buildMetadata(lang, "services");
}

export default async function ServicesPage({
  params,
}: PageProps<"/[lang]/services">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const s = dict.services;

  return (
    <>
      <section className="relative overflow-hidden gradient-brand-dark py-20 text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold sm:text-5xl">{s.title}</h1>
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

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {s.items.map((service, idx) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-ink-100 bg-white p-8 transition-all hover:border-brand-300 hover:shadow-xl dark:border-ink-800 dark:bg-ink-900 dark:hover:border-brand-500/50"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl gradient-brand text-white shadow-lg transition-transform group-hover:scale-110">
                  <Icon name={serviceIcons[idx]} className="h-8 w-8" />
                </div>
                <h2 className="mt-6 text-2xl font-bold">{service.title}</h2>
                <p className="mt-3 leading-relaxed text-ink-600 dark:text-ink-300">
                  {service.description}
                </p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-ink-700 dark:text-ink-200"
                    >
                      <Icon
                        name="check"
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600 dark:text-brand-400"
                      />
                      {feature}
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
        title={s.cta.title}
        subtitle={s.cta.subtitle}
        button={s.cta.button}
      />
    </>
  );
}
