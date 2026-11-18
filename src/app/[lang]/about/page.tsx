import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getDictionary, hasLocale } from "../dictionaries";
import { buildMetadata } from "@/lib/seo";
import Icon, { type IconName } from "@/components/Icon";
import { SectionHeading } from "@/components/Section";

const valueIcons: IconName[] = ["discovery", "target", "shield", "eye"];
const commitmentIcons: IconName[] = ["lock", "check-circle", "handshake", "support"];

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return buildMetadata(lang, "about");
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const a = dict.about;

  return (
    <>
      <section className="relative overflow-hidden gradient-brand-dark py-20 text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:whitespace-nowrap">{a.title}</h1>
          {a.subtitle ? (
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-200">
              {a.subtitle}
            </p>
          ) : null}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative flex justify-center">
              <div
                aria-hidden="true"
                className="absolute inset-0 gradient-brand rounded-full opacity-20 blur-3xl"
              />
              <Image
                src="/logo/full-logo.png"
                alt="KNT Technology Co., Ltd."
                width={500}
                height={500}
                className="relative object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold">{a.story.title}</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-700 sm:text-lg dark:text-ink-200">
                {a.story.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-ink-50 py-20 dark:bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-ink-100 bg-white p-8 dark:border-ink-800 dark:bg-ink-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-brand text-white shadow-md">
                <Icon name="target" className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold">{a.mission.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-600 dark:text-ink-300">
                {a.mission.content}
              </p>
            </div>
            <div className="rounded-2xl border border-ink-100 bg-white p-8 dark:border-ink-800 dark:bg-ink-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-brand text-white shadow-md">
                <Icon name="eye" className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold">{a.vision.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-600 dark:text-ink-300">
                {a.vision.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={a.values.title} />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.items.map((value, idx) => (
              <div
                key={value.title}
                className="rounded-2xl border border-ink-100 bg-white p-6 text-center transition-all hover:border-brand-300 hover:shadow-lg dark:border-ink-800 dark:bg-ink-900"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                  <Icon name={valueIcons[idx]} className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{value.title}</h3>
                <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments / trust */}
      <section className="bg-ink-50 py-20 dark:bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={a.commitments.title}
            subtitle={a.commitments.subtitle}
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {a.commitments.items.map((item, idx) => (
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
    </>
  );
}
