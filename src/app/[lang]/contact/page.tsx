import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import ContactForm from "@/components/ContactForm";
import Map from "@/components/Map";
import { company } from "@/lib/company";

export const metadata = {
  title: "Contact Us",
};

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const address = company.address[lang];
  const companyName = lang === "th" ? company.nameTh : company.nameEn;

  return (
    <>
      <section className="gradient-brand-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            {dict.contact.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-200">
            {dict.contact.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold">
                {dict.contact.info.address}
              </h2>
              <div className="mt-6 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl gradient-brand text-xl">
                    ✉️
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-ink-500 dark:text-ink-400">
                      {dict.contact.info.email}
                    </div>
                    <a
                      href={`mailto:${company.email}`}
                      className="break-all text-base text-ink-900 hover:text-brand-600 dark:text-white"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl gradient-brand text-xl">
                    📞
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink-500 dark:text-ink-400">
                      {dict.contact.info.phone}
                    </div>
                    <a
                      href={`tel:${company.phoneRaw}`}
                      className="text-base text-ink-900 hover:text-brand-600 dark:text-white"
                    >
                      {company.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl gradient-brand text-xl">
                    🕐
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink-500 dark:text-ink-400">
                      {dict.contact.info.hours}
                    </div>
                    <div className="text-base text-ink-900 dark:text-white">
                      {dict.contact.info.hoursValue}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl gradient-brand text-xl">
                    📍
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink-500 dark:text-ink-400">
                      {dict.contact.info.address}
                    </div>
                    <div className="text-base leading-relaxed text-ink-900 dark:text-white">
                      {companyName}
                      <br />
                      {address.line1}
                      <br />
                      {address.line2}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl gradient-brand text-xl">
                    💻
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink-500 dark:text-ink-400">
                      GitHub
                    </div>
                    <a
                      href={company.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-ink-900 hover:text-brand-600 dark:text-white"
                    >
                      knt-tech
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <ContactForm dict={dict.contact.form} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-16 dark:bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {dict.contact.map.title}
            </h2>
          </div>
          <Map
            directionsLabel={dict.contact.map.directions}
            viewLabel={dict.contact.map.viewLarger}
          />
        </div>
      </section>
    </>
  );
}
