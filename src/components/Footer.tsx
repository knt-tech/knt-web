import Link from "next/link";
import Image from "next/image";
import type { Dictionary, Locale } from "@/app/[lang]/dictionaries";
import { company } from "@/lib/company";

interface FooterProps {
  lang: Locale;
  dict: Dictionary;
}

export default function Footer({ lang, dict }: FooterProps) {
  const year = new Date().getFullYear();
  const address = company.address[lang];

  return (
    <footer className="border-t border-ink-100 bg-ink-50 dark:border-ink-800 dark:bg-ink-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href={`/${lang}`} className="flex items-center gap-3">
              <Image
                src="/logo/icon.png"
                alt="KNT Technology"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <div>
                <div className="font-bold text-ink-900 dark:text-white">
                  {company.nameEn}
                </div>
                <div className="text-xs text-ink-500 dark:text-ink-300">
                  {lang === "th" ? company.nameTh : "Software Development Company"}
                </div>
              </div>
            </Link>
            <p className="mt-4 max-w-md text-sm text-ink-600 dark:text-ink-300">
              {dict.footer.tagline}
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href={company.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-600 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-300"
                aria-label="GitHub"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-600 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-300"
                aria-label="Email"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
              <a
                href={`tel:${company.phoneRaw}`}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-600 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-300"
                aria-label="Phone"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink-900 dark:text-white">
              {dict.footer.company}
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href={`/${lang}/about`}
                  className="text-ink-600 hover:text-brand-600 dark:text-ink-300"
                >
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/services`}
                  className="text-ink-600 hover:text-brand-600 dark:text-ink-300"
                >
                  {dict.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/contact`}
                  className="text-ink-600 hover:text-brand-600 dark:text-ink-300"
                >
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink-900 dark:text-white">
              {dict.footer.contact}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-600 dark:text-ink-300">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="break-all hover:text-brand-600"
                >
                  {company.email}
                </a>
              </li>
              <li>
                <a href={`tel:${company.phoneRaw}`} className="hover:text-brand-600">
                  {company.phone}
                </a>
              </li>
              <li className="pt-2 text-xs leading-relaxed">
                {address.line1}
                <br />
                {address.line2}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-ink-200 pt-6 dark:border-ink-800 sm:flex-row">
          <p className="text-xs text-ink-500 dark:text-ink-400">
            © {year} {company.nameEn} {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
