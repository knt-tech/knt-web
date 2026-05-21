"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { Dictionary, Locale } from "@/app/[lang]/dictionaries";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavbarProps {
  lang: Locale;
  dict: Dictionary;
}

export default function Navbar({ lang, dict }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/services`, label: dict.nav.services },
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === `/${lang}`) return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100/50 bg-white/80 backdrop-blur-md dark:border-ink-800/50 dark:bg-ink-950/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href={`/${lang}`} className="flex items-center gap-3">
          <Image
            src="/logo/icon.png"
            alt="KNT Technology"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
          />
          <div className="hidden sm:block">
            <div className="text-sm font-bold text-ink-900 dark:text-white whitespace-nowrap">
              KNT TECHNOLOGY CO., LTD.
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300"
                  : "text-ink-700 hover:bg-ink-50 hover:text-brand-600 dark:text-ink-200 dark:hover:bg-ink-800 dark:hover:text-brand-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLocale={lang} />
          <Link
            href={`/${lang}/contact`}
            className="hidden rounded-lg gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:scale-105 md:inline-flex"
          >
            {dict.nav.getQuote}
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-ink-700 hover:bg-ink-50 md:hidden dark:text-ink-200 dark:hover:bg-ink-800"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-ink-100 bg-white md:hidden dark:border-ink-800 dark:bg-ink-950">
          <div className="space-y-1 px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                  isActive(item.href)
                    ? "bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300"
                    : "text-ink-700 hover:bg-ink-50 dark:text-ink-200 dark:hover:bg-ink-800"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={`/${lang}/contact`}
              onClick={() => setIsOpen(false)}
              className="mt-2 block rounded-lg gradient-brand px-4 py-2 text-center text-sm font-semibold text-white"
            >
              {dict.nav.getQuote}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
