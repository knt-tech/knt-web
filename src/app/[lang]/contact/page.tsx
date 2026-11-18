import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import { buildMetadata } from "@/lib/seo";
import ContactForm from "@/components/ContactForm";
import Map from "@/components/Map";
import Icon, { type IconName } from "@/components/Icon";
import { company } from "@/lib/company";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return buildMetadata(lang, "contact");
}

export default async function ContactPage({
  params,
}: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const c = dict.contact;
  const address = company.address[lang];
  const companyName = lang === "th" ? company.nameTh : company.nameEn;

  const infoItems: { icon: IconName; label: string; content: React.ReactNode }[] = [
    {
      icon: "mail",
      label: c.info.email,
      content: (
        <a
          href={`mailto:${company.email}`}
          className="break-all text-base text-ink-900 hover:text-brand-600 dark:text-white"
        >
          {company.email}
        </a>
      ),
    },
    {
      icon: "phone",
      label: c.info.phone,
      content: (
        <a
          href={`tel:${company.phoneRaw}`}
          className="text-base text-ink-900 hover:text-brand-600 dark:text-white"
        >
          {company.phone}
        </a>
      ),
    },
    {
      icon: "chat",
      label: c.info.line,
      content: (
        <a
          href={company.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base text-ink-900 hover:text-brand-600 dark:text-white"
        >
          {company.lineId}
        </a>
      ),
    },
    {
      icon: "clock",
      label: c.info.hours,
      content: (
        <div className="text-base text-ink-900 dark:text-white">
          {c.info.hoursValue}
        </div>
      ),
    },
    {
      icon: "map-pin",
      label: c.info.address,
      content: (
        <div className="text-base leading-relaxed text-ink-900 dark:text-white">
          {companyName}
          <br />
          {address.line1}
          <br />
          {address.line2}
        </div>
      ),
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden gradient-brand-dark py-20 text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold sm:text-5xl">{c.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-200">
            {c.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {infoItems.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                      <Icon name={item.icon} className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-ink-500 dark:text-ink-400">
                        {item.label}
                      </div>
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* What happens next */}
              <div className="mt-8 rounded-2xl border border-ink-100 bg-ink-50 p-6 dark:border-ink-800 dark:bg-ink-900">
                <h2 className="text-base font-bold">{c.next.title}</h2>
                <ol className="mt-4 space-y-4">
                  {c.next.steps.map((step, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full gradient-brand text-xs font-bold text-white">
                        {idx + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-ink-700 dark:text-ink-200">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="lg:col-span-2">
              <ContactForm dict={c.form} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-16 dark:bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">{c.map.title}</h2>
          </div>
          <Map
            directionsLabel={c.map.directions}
            viewLabel={c.map.viewLarger}
          />
        </div>
      </section>
    </>
  );
}
