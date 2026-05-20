import type { Metadata } from "next";
import { Sarabun, Plus_Jakarta_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { getDictionary, hasLocale, locales } from "./dictionaries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  metadataBase: new URL("https://knttechsolution.com"),
  title: {
    default: "KNT Technology Co., Ltd. — Software Development",
    template: "%s | KNT Technology",
  },
  description:
    "บริษัทพัฒนาซอฟต์แวร์ — เว็บแอปพลิเคชัน โมบายแอป ERP และระบบ Custom สำหรับธุรกิจ",
  keywords: [
    "software development",
    "web development",
    "mobile app",
    "ERP",
    "Thailand",
    "พัฒนาซอฟต์แวร์",
    "ทำเว็บไซต์",
    "พัฒนาแอป",
  ],
  authors: [{ name: "KNT Technology Co., Ltd." }],
  openGraph: {
    title: "KNT Technology Co., Ltd.",
    description: "Software development company in Thailand",
    type: "website",
    locale: "th_TH",
    alternateLocale: "en_US",
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
        <Navbar lang={lang} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} dict={dict} />
      </body>
    </html>
  );
}
