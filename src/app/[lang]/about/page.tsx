import { notFound } from "next/navigation";
import Image from "next/image";
import { getDictionary, hasLocale } from "../dictionaries";

export const metadata = {
  title: "About Us",
};

const valueIcons = ["⭐", "🎯", "💡", "🤝"];

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <section className="gradient-brand-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            {dict.about.title}
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative flex justify-center">
              <div className="absolute inset-0 gradient-brand rounded-full blur-3xl opacity-20" />
              <Image
                src="/logo/full-logo.png"
                alt="KNT Technology"
                width={500}
                height={500}
                className="relative object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold">{dict.about.story.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-700 dark:text-ink-200">
                {dict.about.story.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-20 dark:bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-ink-100 bg-white p-8 dark:border-ink-800 dark:bg-ink-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-brand text-2xl shadow-md">
                🎯
              </div>
              <h3 className="mt-5 text-2xl font-bold">
                {dict.about.mission.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-600 dark:text-ink-300">
                {dict.about.mission.content}
              </p>
            </div>
            <div className="rounded-2xl border border-ink-100 bg-white p-8 dark:border-ink-800 dark:bg-ink-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-brand text-2xl shadow-md">
                👁️
              </div>
              <h3 className="mt-5 text-2xl font-bold">
                {dict.about.vision.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-600 dark:text-ink-300">
                {dict.about.vision.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {dict.about.values.title}
            </h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {dict.about.values.items.map((value, idx) => (
              <div
                key={value.title}
                className="rounded-2xl border border-ink-100 bg-white p-6 text-center transition-all hover:border-brand-300 hover:shadow-lg dark:border-ink-800 dark:bg-ink-900"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full gradient-brand text-3xl shadow-md">
                  {valueIcons[idx]}
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
    </>
  );
}
