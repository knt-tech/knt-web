import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import { buildMetadata } from "@/lib/seo";
import Icon, { type IconName } from "@/components/Icon";
import { SectionHeading, CTASection } from "@/components/Section";
import WorkCard from "@/components/WorkCard";

const whyIcons: IconName[] = ["discovery", "shield", "erp", "handshake"];
const serviceIcons: IconName[] = [
  "analysis",
  "custom-software",
  "erp",
  "mobile",
  "integration",
  "support",
];
const solutionIcons: IconName[] = [
  "erp",
  "warehouse",
  "people",
  "factory",
  "automation",
  "growth",
];
const industryIcons: IconName[] = [
  "factory",
  "logistics",
  "retail",
  "healthcare",
  "construction",
  "food",
];
const processIcons: IconName[] = ["discovery", "design", "build", "quality", "deploy"];
const commitmentIcons: IconName[] = ["lock", "check-circle", "eye", "handshake"];

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return buildMetadata(lang, "home");
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const h = dict.home;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-brand-dark">
        <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40" />
        <div aria-hidden="true" className="absolute inset-0 opacity-20">
          <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-brand-500 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-brand-700 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-300 backdrop-blur-sm">
                <Icon name="sparkle" className="h-3.5 w-3.5" />
                {h.hero.badge}
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                {h.hero.title}{" "}
                <span className="gradient-text">{h.hero.titleHighlight}</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-ink-200">
                {h.hero.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={`/${lang}/contact`}
                  className="inline-flex items-center gap-2 rounded-lg gradient-brand px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-brand-500/50"
                >
                  {h.hero.ctaPrimary}
                  <Icon name="arrow-right" className="h-5 w-5" />
                </Link>
                <Link
                  href={`/${lang}/solutions`}
                  className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
                >
                  {h.hero.ctaSecondary}
                </Link>
              </div>
              <p className="mt-8 flex items-center gap-2 text-sm text-ink-300">
                <Icon name="check-circle" className="h-4 w-4 flex-shrink-0 text-brand-400" />
                {h.hero.proof}
              </p>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 gradient-brand rounded-full opacity-30 blur-3xl"
                />
                <Image
                  src="/logo/icon.png"
                  alt="KNT Technology — enterprise software partner"
                  width={400}
                  height={400}
                  className="relative h-72 w-72 object-contain lg:h-96 lg:w-96"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-ink-100 bg-white py-12 dark:border-ink-800 dark:bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { value: "30+", label: h.stats.projects },
              { value: "6", label: h.stats.industries },
              { value: "10+", label: h.stats.experience },
              { value: "24/7", label: h.stats.support },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="gradient-text text-4xl font-extrabold sm:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-ink-600 dark:text-ink-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="bg-ink-50 py-20 dark:bg-ink-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={dict.nav.works}
            title={h.works.title}
            subtitle={h.works.subtitle}
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dict.works.projects
              .filter((p) => p.id !== "records")
              .map((project) => (
                <Link key={project.id} href={`/${lang}/works`} className="block">
                  <WorkCard project={project} />
                </Link>
              ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href={`/${lang}/works`}
              className="inline-flex items-center gap-2 text-base font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400"
            >
              {h.works.viewAll}
              <Icon name="arrow-right" className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={h.why.title} subtitle={h.why.subtitle} />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {h.why.items.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-2xl border border-ink-100 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-lg dark:border-ink-800 dark:bg-ink-900 dark:hover:border-brand-500/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                  <Icon name={whyIcons[idx]} className="h-6 w-6" />
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

      {/* Services teaser */}
      <section className="bg-ink-50 py-20 dark:bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={h.services.title}
            title={dict.services.title}
            subtitle={h.services.subtitle}
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dict.services.items.map((service, idx) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-ink-100 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-xl dark:border-ink-800 dark:bg-ink-950 dark:hover:border-brand-500/50"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl gradient-brand text-white shadow-md transition-transform group-hover:scale-110">
                  <Icon name={serviceIcons[idx]} className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href={`/${lang}/services`}
              className="inline-flex items-center gap-2 text-base font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400"
            >
              {h.services.viewAll}
              <Icon name="arrow-right" className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions teaser */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={dict.solutions.title}
            title={h.solutions.title}
            subtitle={h.solutions.subtitle}
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dict.solutions.items.map((item, idx) => (
              <Link
                key={item.title}
                href={`/${lang}/solutions`}
                className="group flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-lg dark:border-ink-800 dark:bg-ink-900 dark:hover:border-brand-500/40"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                  <Icon name={solutionIcons[idx]} className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href={`/${lang}/solutions`}
              className="inline-flex items-center gap-2 text-base font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400"
            >
              {h.solutions.viewAll}
              <Icon name="arrow-right" className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries teaser */}
      <section className="bg-ink-50 py-20 dark:bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={dict.industries.title}
            title={h.industries.title}
            subtitle={h.industries.subtitle}
          />
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dict.industries.items.map((item, idx) => (
              <Link
                key={item.title}
                href={`/${lang}/industries`}
                className="group flex items-center gap-4 rounded-xl border border-ink-100 bg-white p-5 transition-all hover:border-brand-300 hover:shadow-md dark:border-ink-800 dark:bg-ink-950 dark:hover:border-brand-500/40"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                  <Icon name={industryIcons[idx]} className="h-6 w-6" />
                </div>
                <span className="font-semibold">{item.title}</span>
                <Icon
                  name="arrow-right"
                  className="ml-auto h-5 w-5 text-ink-300 transition-transform group-hover:translate-x-1 group-hover:text-brand-500"
                />
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href={`/${lang}/industries`}
              className="inline-flex items-center gap-2 text-base font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400"
            >
              {h.industries.viewAll}
              <Icon name="arrow-right" className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={dict.process.title}
            title={h.process.title}
            subtitle={h.process.subtitle}
          />
          <div className="relative mt-16">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200 lg:block dark:from-brand-800 dark:via-brand-500 dark:to-brand-800"
            />
            <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
              {h.process.items.map((item, idx) => (
                <div key={item.title} className="relative text-center">
                  <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full gradient-brand text-white shadow-lg ring-4 ring-white dark:ring-ink-950">
                    <Icon name={processIcons[idx]} className="h-7 w-7" />
                    <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-brand-600 shadow ring-2 ring-white dark:bg-ink-950 dark:ring-ink-950">
                      {idx + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-14 text-center">
            <Link
              href={`/${lang}/process`}
              className="inline-flex items-center gap-2 text-base font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400"
            >
              {h.process.viewAll}
              <Icon name="arrow-right" className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Commitments / standards */}
      <section className="bg-ink-50 py-20 dark:bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={h.commitments.title}
            subtitle={h.commitments.subtitle}
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {h.commitments.items.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-2xl border border-ink-100 bg-white p-6 dark:border-ink-800 dark:bg-ink-950"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                  <Icon name={commitmentIcons[idx]} className="h-6 w-6" />
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
        title={h.cta.title}
        subtitle={h.cta.subtitle}
        button={h.cta.button}
      />
    </>
  );
}
