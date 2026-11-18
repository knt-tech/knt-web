import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import { buildMetadata } from "@/lib/seo";
import Icon from "@/components/Icon";
import { CTASection, Eyebrow } from "@/components/Section";
import { WorkCover } from "@/components/WorkCard";
import { workGallery } from "@/lib/works";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/works">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return buildMetadata(lang, "works");
}

function TechChips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li
          key={t}
          className="rounded-md border border-ink-200 bg-ink-50 px-2.5 py-1 text-xs font-medium text-ink-700 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 text-sm text-ink-700 dark:text-ink-200"
        >
          <Icon
            name="check-circle"
            className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function WorksPage({
  params,
}: PageProps<"/[lang]/works">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const w = dict.works;
  const [featured, ...others] = w.projects;
  const gallery = workGallery[featured.id] ?? [];
  const [hero, ...screens] = gallery;

  return (
    <>
      <section className="relative overflow-hidden gradient-brand-dark py-20 text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold sm:text-5xl">{w.title}</h1>
        </div>
      </section>

      <section className="pt-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-ink-600 dark:text-ink-300">
            {w.intro}
          </p>
        </div>
      </section>

      {/* Featured project */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-sm dark:border-ink-800 dark:bg-ink-900">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-10">
                <Eyebrow>{w.labels.featured}</Eyebrow>
                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  {featured.title}
                </h2>
                <dl className="mt-5 grid grid-cols-1 gap-4 text-sm sm:grid-cols-3">
                  {[
                    [w.labels.client, featured.client],
                    [w.labels.industry, featured.industry],
                    [w.labels.year, featured.year],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">
                        {label}
                      </dt>
                      <dd className="mt-1 font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 leading-relaxed text-ink-600 dark:text-ink-300">
                  {featured.summary}
                </p>
                <h3 className="mt-8 text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">
                  {w.labels.highlights}
                </h3>
                <div className="mt-3">
                  <CheckList items={featured.highlights} />
                </div>
                <h3 className="mt-8 text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">
                  {w.labels.tech}
                </h3>
                <div className="mt-3">
                  <TechChips items={featured.tech} />
                </div>
              </div>
              {hero ? (
                <div className="relative bg-ink-50 p-6 sm:p-10 dark:bg-ink-950">
                  <figure className="overflow-hidden rounded-xl border border-ink-200 bg-white shadow-lg dark:border-ink-700">
                    <Image
                      src={hero.src}
                      alt={featured.gallery[0]}
                      width={hero.width}
                      height={hero.height}
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="h-auto w-full"
                      priority
                    />
                  </figure>
                  <p className="mt-3 text-center text-sm text-ink-500 dark:text-ink-400">
                    {featured.gallery[0]}
                  </p>
                </div>
              ) : null}
            </div>

            {screens.length > 0 ? (
              <div className="border-t border-ink-100 p-8 sm:p-10 dark:border-ink-800">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">
                  {w.labels.screens}
                </h3>
                <div className="mt-5 grid gap-6 md:grid-cols-3">
                  {screens.map((img, i) => (
                    <figure key={img.src}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-ink-200 bg-ink-50 dark:border-ink-700">
                        <Image
                          src={img.src}
                          alt={featured.gallery[i + 1]}
                          fill
                          sizes="(min-width: 768px) 380px, 100vw"
                          className={
                            img.width / img.height > 4 / 3
                              ? "object-contain"
                              : "object-cover object-top"
                          }
                        />
                      </div>
                      <figcaption className="mt-2 text-sm text-ink-600 dark:text-ink-300">
                        {featured.gallery[i + 1]}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {/* Other projects */}
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {others.map((p) => (
              <article
                key={p.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition-all hover:border-brand-300 hover:shadow-xl dark:border-ink-800 dark:bg-ink-900 dark:hover:border-brand-500/40"
              >
                <WorkCover id={p.id} alt={p.title} className="aspect-[16/9]" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                    <span className="rounded-full bg-brand-50 px-2.5 py-1 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                      {p.industry}
                    </span>
                    <span className="text-ink-500 dark:text-ink-400">{p.year}</span>
                  </div>
                  <h2 className="mt-3 text-xl font-bold leading-snug">{p.title}</h2>
                  <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
                    {p.client}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {p.summary}
                  </p>
                  <h3 className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink-500 dark:text-ink-400">
                    {w.labels.highlights}
                  </h3>
                  <div className="mt-3">
                    <CheckList items={p.highlights} />
                  </div>
                  <div className="mt-auto pt-6">
                    <TechChips items={p.tech} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        lang={lang}
        title={w.cta.title}
        subtitle={w.cta.subtitle}
        button={w.cta.button}
      />
    </>
  );
}
