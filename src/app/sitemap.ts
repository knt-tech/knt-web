import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/company";
import { locales } from "./[lang]/dictionaries";

const paths = ["", "services", "solutions", "industries", "process", "about", "contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((lang) =>
    paths.map((path) => {
      const rel = path ? `/${lang}/${path}` : `/${lang}`;
      return {
        url: `${siteUrl}${rel}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: path === "" ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${siteUrl}${path ? `/en/${path}` : "/en"}`,
            th: `${siteUrl}${path ? `/th/${path}` : "/th"}`,
          },
        },
      };
    })
  );
}
