import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";

const serviceIcons = ["💻", "📱", "⚙️", "🔗", "☁️", "🛠️"];

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <section className="relative overflow-hidden gradient-brand-dark">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-brand-500 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-brand-600 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-300 backdrop-blur-sm">
                ⚡ {dict.home.hero.badge}
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                {dict.home.hero.title}{" "}
                <span className="gradient-text">
                  {dict.home.hero.titleHighlight}
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-ink-200">
                {dict.home.hero.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={`/${lang}/contact`}
                  className="rounded-lg gradient-brand px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-brand-500/50"
                >
                  {dict.home.hero.ctaPrimary} →
                </Link>
                <Link
                  href={`/${lang}/services`}
                  className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
                >
                  {dict.home.hero.ctaSecondary}
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 gradient-brand rounded-full blur-3xl opacity-30" />
                <Image
                  src="/logo/icon.png"
                  alt="KNT Technology"
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

      <section className="border-y border-ink-100 bg-white py-12 dark:border-ink-800 dark:bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { value: "50+", label: dict.home.stats.projects },
              { value: "30+", label: dict.home.stats.clients },
              { value: "5+", label: dict.home.stats.experience },
              { value: "24/7", label: dict.home.stats.support },
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

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {dict.home.services.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-600 dark:text-ink-300">
              {dict.home.services.subtitle}
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dict.services.items.map((service, idx) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-ink-100 bg-white p-6 transition-all hover:border-brand-300 hover:shadow-xl dark:border-ink-800 dark:bg-ink-900 dark:hover:border-brand-500/50"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl gradient-brand text-3xl shadow-md transition-transform group-hover:scale-110">
                  {serviceIcons[idx]}
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
              {dict.home.services.viewAll} →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-20 dark:bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {dict.home.why.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-600 dark:text-ink-300">
              {dict.home.why.subtitle}
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {dict.home.why.items.map((item, idx) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full gradient-brand text-2xl font-bold text-white shadow-lg">
                  {idx + 1}
                </div>
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl gradient-brand-dark px-8 py-16 text-center shadow-2xl">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-brand-500 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-brand-600 blur-3xl" />
            </div>
            <div className="relative">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {dict.home.cta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-200">
                {dict.home.cta.subtitle}
              </p>
              <Link
                href={`/${lang}/contact`}
                className="mt-8 inline-flex rounded-lg gradient-brand px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-105"
              >
                {dict.home.cta.button} →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
