"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const locales = [
  { code: "th", label: "TH", name: "ภาษาไทย" },
  { code: "en", label: "EN", name: "English" },
];

interface Props {
  currentLocale: string;
}

export default function LanguageSwitcher({ currentLocale }: Props) {
  const pathname = usePathname();

  const switchTo = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex items-center gap-1 rounded-lg border border-ink-200 bg-white p-0.5 text-xs font-semibold dark:border-ink-700 dark:bg-ink-900">
      {locales.map((loc) => (
        <Link
          key={loc.code}
          href={switchTo(loc.code)}
          className={`rounded-md px-2.5 py-1 transition-colors ${
            currentLocale === loc.code
              ? "gradient-brand text-white"
              : "text-ink-600 hover:text-brand-600 dark:text-ink-300 dark:hover:text-brand-400"
          }`}
          aria-label={loc.name}
        >
          {loc.label}
        </Link>
      ))}
    </div>
  );
}
