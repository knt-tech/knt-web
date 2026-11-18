import type { IconName } from "@/components/Icon";

// Visual assets for each portfolio project, keyed by the `id` used in the
// dictionaries. Screenshots are cropped to the app's content area so no
// client name or logo appears, and they show demo data only.
export type WorkImage = { src: string; width: number; height: number };

export const workIcons: Record<string, IconName> = {
  production: "factory",
  b2b: "retail",
  library: "library",
  records: "records",
};

export const workGallery: Record<string, WorkImage[]> = {
  production: [
    { src: "/works/production-overview.jpg", width: 706, height: 1030 },
    { src: "/works/production-running.jpg", width: 830, height: 352 },
    { src: "/works/production-qc-template.jpg", width: 830, height: 744 },
    { src: "/works/production-machine.jpg", width: 830, height: 620 },
  ],
};
