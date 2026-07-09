import type { Metadata } from "next";
import type { Locale } from "@/app/[lang]/dictionaries";
import { siteUrl } from "@/lib/company";

export type PageKey =
  | "home"
  | "services"
  | "solutions"
  | "industries"
  | "process"
  | "about"
  | "contact";

// URL segment for each page (empty for the home page).
const segments: Record<PageKey, string> = {
  home: "",
  services: "services",
  solutions: "solutions",
  industries: "industries",
  process: "process",
  about: "about",
  contact: "contact",
};

type SeoEntry = { title: string; description: string };

// Keyword-rich, human-written titles + descriptions per page and language.
// Titles lead with the search intent, not the brand — better for enterprise
// software queries in Thailand / Southeast Asia.
const seo: Record<Locale, Record<PageKey, SeoEntry>> = {
  en: {
    home: {
      title:
        "Enterprise Software Development, ERP, WMS & HRMS in Thailand | KNT Technology",
      description:
        "KNT Technology is an enterprise software partner in Thailand. We build custom ERP, warehouse (WMS), HR (HRMS) and automation systems for manufacturing, logistics, retail and healthcare — starting with business analysis.",
    },
    services: {
      title: "Software Development Services — ERP, Integration & Support",
      description:
        "End-to-end enterprise software services: business analysis, custom development, ERP systems, mobile apps, system integration and SLA-backed managed support.",
    },
    solutions: {
      title: "Enterprise Solutions — ERP, WMS, HRMS, MES & Automation",
      description:
        "Productized enterprise platforms tailored to your operation: ERP, warehouse management (WMS), HR management (HRMS), manufacturing systems (MES) and business process automation.",
    },
    industries: {
      title: "Industries We Serve — Manufacturing, Logistics, Retail & More",
      description:
        "Enterprise software built for manufacturing, logistics & supply chain, retail, healthcare, construction and food & beverage operations across Thailand and Southeast Asia.",
    },
    process: {
      title: "How We Work — A Transparent Software Delivery Process",
      description:
        "Our standards-driven delivery process: discovery and business analysis, solution design, iterative development, QA and security, deployment and long-term support.",
    },
    about: {
      title: "About KNT Technology — Your Enterprise Software Partner",
      description:
        "KNT Technology helps organizations across Thailand modernize operations with custom software built to enterprise standards. We understand the business before we write code.",
    },
    contact: {
      title: "Contact Us — Book a Free Software Consultation",
      description:
        "Talk to KNT Technology about your ERP, WMS, HRMS or custom software project. Book a free, no-obligation consultation. We reply within one business day.",
    },
  },
  th: {
    home: {
      title:
        "รับพัฒนาซอฟต์แวร์องค์กร ERP, WMS, HRMS | KNT Technology",
      description:
        "KNT Technology พาร์ทเนอร์ซอฟต์แวร์ระดับองค์กรในไทย รับพัฒนาระบบ ERP, คลังสินค้า (WMS), งานบุคคล (HRMS) และระบบอัตโนมัติ สำหรับการผลิต โลจิสติกส์ ค้าปลีก และสุขภาพ เริ่มจากการวิเคราะห์ธุรกิจ",
    },
    services: {
      title: "บริการพัฒนาซอฟต์แวร์ — ERP เชื่อมต่อระบบ และดูแลระบบ",
      description:
        "บริการซอฟต์แวร์องค์กรครบวงจร ทั้งวิเคราะห์ธุรกิจ พัฒนาซอฟต์แวร์เฉพาะ ระบบ ERP แอปมือถือ เชื่อมต่อระบบ และการดูแลตาม SLA",
    },
    solutions: {
      title: "โซลูชันองค์กร — ERP, WMS, HRMS, MES และระบบอัตโนมัติ",
      description:
        "แพลตฟอร์มองค์กรสำเร็จรูปที่ปรับตามการทำงานของคุณ ทั้งระบบ ERP, จัดการคลังสินค้า (WMS), บริหารงานบุคคล (HRMS), ระบบการผลิต (MES) และระบบอัตโนมัติกระบวนการธุรกิจ",
    },
    industries: {
      title: "กลุ่มธุรกิจและอุตสาหกรรมที่เราดูแล — การผลิต โลจิสติกส์ ค้าปลีก และอื่นๆ",
      description:
        "ซอฟต์แวร์องค์กรสำหรับทุกประเภทธุรกิจ ทั้งการผลิต โลจิสติกส์และซัพพลายเชน ค้าปลีก สุขภาพ ก่อสร้าง และอาหารและเครื่องดื่ม ทั่วไทยและเอเชียตะวันออกเฉียงใต้",
    },
    process: {
      title: "วิธีการทำงาน — กระบวนการส่งมอบซอฟต์แวร์ที่โปร่งใส",
      description:
        "กระบวนการส่งมอบที่ยึดมาตรฐานของเรา ตั้งแต่วิเคราะห์ธุรกิจ ออกแบบโซลูชัน พัฒนาเป็นรอบ ทดสอบคุณภาพและความปลอดภัย ติดตั้ง และดูแลระยะยาว",
    },
    about: {
      title: "เกี่ยวกับ KNT Technology — พาร์ทเนอร์ซอฟต์แวร์องค์กรของคุณ",
      description:
        "KNT Technology ช่วยองค์กรทั่วไทยยกระดับการทำงานด้วยซอฟต์แวร์เฉพาะที่พัฒนาตามมาตรฐานระดับองค์กร เราเข้าใจธุรกิจก่อนเขียนโค้ด",
    },
    contact: {
      title: "ติดต่อเรา — นัดปรึกษาซอฟต์แวร์ฟรี",
      description:
        "ปรึกษา KNT Technology เรื่องโปรเจกต์ ERP, WMS, HRMS หรือซอฟต์แวร์เฉพาะองค์กร นัดปรึกษาฟรีไม่มีข้อผูกมัด เราตอบกลับภายในหนึ่งวันทำการ",
    },
  },
};

function pathFor(lang: Locale, key: PageKey) {
  const seg = segments[key];
  return seg ? `/${lang}/${seg}` : `/${lang}`;
}

/**
 * Build per-page Metadata: unique title + description, canonical URL, and
 * hreflang alternates linking the EN and TH versions of the same page.
 */
export function buildMetadata(lang: Locale, key: PageKey): Metadata {
  const entry = seo[lang][key];
  const seg = segments[key];

  return {
    title: key === "home" ? { absolute: entry.title } : entry.title,
    description: entry.description,
    alternates: {
      canonical: pathFor(lang, key),
      languages: {
        en: pathFor("en", key),
        th: pathFor("th", key),
        "x-default": seg ? `/en/${seg}` : "/en",
      },
    },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: `${siteUrl}${pathFor(lang, key)}`,
      type: "website",
      locale: lang === "th" ? "th_TH" : "en_US",
    },
  };
}
