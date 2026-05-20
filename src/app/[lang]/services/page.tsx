import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";

export const metadata = {
  title: "Services",
};

const serviceIcons = ["💻", "📱", "⚙️", "🔗", "☁️", "🛠️"];

export default async function ServicesPage({ params }: PageProps<"/[lang]/services">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <section className="gradient-brand-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            {dict.services.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-200">
            {dict.services.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {dict.services.items.map((service, idx) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-ink-100 bg-white p-8 transition-all hover:border-brand-300 hover:shadow-xl dark:border-ink-800 dark:bg-ink-900 dark:hover:border-brand-500/50"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl gradient-brand text-4xl shadow-lg transition-transform group-hover:scale-110">
                  {serviceIcons[idx]}
                </div>
                <h2 className="mt-6 text-2xl font-bold">{service.title}</h2>
                <p className="mt-3 leading-relaxed text-ink-600 dark:text-ink-300">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-ink-700 dark:text-ink-200"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-20 dark:bg-ink-900">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {dict.home.cta.title}
          </h2>
          <p className="mt-4 text-lg text-ink-600 dark:text-ink-300">
            {dict.home.cta.subtitle}
          </p>
          <Link
            href={`/${lang}/contact`}
            className="mt-8 inline-flex rounded-lg gradient-brand px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-105"
          >
            {dict.home.cta.button} →
          </Link>
        </div>
      </section>
    </>
  );
}
