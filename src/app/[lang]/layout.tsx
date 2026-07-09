import type { Metadata } from "next";
import { Sarabun, Plus_Jakarta_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { getDictionary, hasLocale, locales } from "./dictionaries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { siteUrl } from "@/lib/company";

const sarabun = Sarabun({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  variable: "--font-sans",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "KNT Technology — Enterprise Software, ERP, WMS & HRMS in Thailand",
    template: "%s | KNT Technology",
  },
  description:
    "Enterprise software partner in Thailand. We build custom ERP, warehouse (WMS), HR (HRMS), integration and automation systems for manufacturing, logistics, retail and healthcare — starting with business analysis.",
  keywords: [
    "enterprise software development Thailand",
    "custom software development",
    "ERP development",
    "warehouse management system",
    "WMS",
    "HRMS",
    "manufacturing system",
    "business process automation",
    "system integration",
    "digital transformation",
    "รับพัฒนาซอฟต์แวร์องค์กร",
    "พัฒนาระบบ ERP",
    "ระบบคลังสินค้า WMS",
    "ระบบบริหารงานบุคคล HRMS",
    "รับทำระบบองค์กร",
  ],
  authors: [{ name: "KNT Technology Co., Ltd." }],
  creator: "KNT Technology Co., Ltd.",
  publisher: "KNT Technology Co., Ltd.",
  openGraph: {
    siteName: "KNT Technology",
    title: "KNT Technology — Enterprise Software Partner",
    description:
      "Custom ERP, WMS, HRMS, integration and automation for manufacturing, logistics, retail and healthcare — built to enterprise standards.",
    type: "website",
    locale: "th_TH",
    alternateLocale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo/icon.png",
  },
};

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${sarabun.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-ink-900 dark:bg-ink-950 dark:text-white">
        <JsonLd lang={lang} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Navbar lang={lang} dict={dict} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer lang={lang} dict={dict} />
      </body>
    </html>
  );
}
