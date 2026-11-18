import type { SVGProps } from "react";

// Professional line-icon set (24x24, 1.5 stroke) used across the site in place
// of emoji. Keeping every glyph in one registry guarantees a consistent visual
// language — a key enterprise trust signal.
export type IconName =
  | "custom-software"
  | "mobile"
  | "erp"
  | "integration"
  | "cloud"
  | "support"
  | "analysis"
  | "warehouse"
  | "people"
  | "factory"
  | "automation"
  | "logistics"
  | "retail"
  | "healthcare"
  | "construction"
  | "food"
  | "building"
  | "discovery"
  | "design"
  | "build"
  | "quality"
  | "deploy"
  | "shield"
  | "lock"
  | "growth"
  | "clock"
  | "handshake"
  | "target"
  | "eye"
  | "sparkle"
  | "check"
  | "check-circle"
  | "arrow-right"
  | "mail"
  | "phone"
  | "map-pin"
  | "chat"
  | "document"
  | "library"
  | "records";

const paths: Record<IconName, React.ReactNode> = {
  "custom-software": (
    <path d="m6.75 7.5-3.75 4.5 3.75 4.5m10.5-9 3.75 4.5-3.75 4.5M14.25 4.5l-4.5 15" />
  ),
  mobile: (
    <>
      <rect x="7" y="2.75" width="10" height="18.5" rx="2.5" />
      <path d="M10.5 18.25h3" />
    </>
  ),
  erp: (
    <>
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </>
  ),
  integration: (
    <path d="M13.5 6.75 15 5.25a3.182 3.182 0 0 1 4.5 4.5l-2.25 2.25a3.182 3.182 0 0 1-4.5 0m-2.25 4.5L9 18.75a3.182 3.182 0 0 1-4.5-4.5l2.25-2.25a3.182 3.182 0 0 1 4.5 0M9 15l6-6" />
  ),
  cloud: (
    <path d="M6.5 18.5a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 9.5a3.75 3.75 0 0 1 .3 8.98H6.5Z" />
  ),
  support: (
    <path d="M11.42 15.17 8.5 18.09a2.65 2.65 0 0 1-3.75-3.75l2.92-2.92m1.83-1.83 2.92-2.92a2.65 2.65 0 0 1 3.75 3.75l-2.92 2.92m1.09-8.42-9.5 9.5" />
  ),
  analysis: (
    <path d="M3 3v16.5a1.5 1.5 0 0 0 1.5 1.5H21M7.5 15.5l3.5-3.75 2.75 2.5 4-4.75" />
  ),
  warehouse: (
    <>
      <path d="M3 21V9.5L12 4l9 5.5V21" />
      <path d="M7.5 21v-6.5h9V21M7.5 17.5h9" />
    </>
  ),
  people: (
    <path d="M17 20.25v-1.5a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1.5m14 0v-1.5a3 3 0 0 0-2.25-2.9M15.5 4.1a3 3 0 0 1 0 5.8M13.5 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  ),
  factory: (
    <path d="M3 21V10l6 3.5V10l6 3.5V6l6-1v16H3Zm4-4.5h1.5m3.5 0h1.5m3.5 0H18" />
  ),
  automation: (
    <path d="M13 2 4.5 13H11l-1 9 8.5-11H12l1-9Z" />
  ),
  logistics: (
    <path d="M2.5 6.5h10v9h-10v-9Zm10 3h4l3 3v3h-7v-6Zm-6.75 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  ),
  retail: (
    <path d="M6 8V6.5a3.5 3.5 0 1 1 7 0V8m-9.5 0h12l.9 11a1.5 1.5 0 0 1-1.5 1.6H5.1a1.5 1.5 0 0 1-1.5-1.6L4.5 8Z" transform="translate(0.75 0)" />
  ),
  healthcare: (
    <path d="M20.5 8.5c0 5-8 11-8 11s-8-6-8-11a4.5 4.5 0 0 1 8-2.86A4.5 4.5 0 0 1 20.5 8.5Z" />
  ),
  construction: (
    <>
      <path d="M4 21V4.5A1.5 1.5 0 0 1 5.5 3h7A1.5 1.5 0 0 1 14 4.5V21M14 21V9.5h4.5A1.5 1.5 0 0 1 20 11v10M4 21h17" />
      <path d="M7 7h1.5M10 7h.5M7 11h1.5M10 11h.5M7 15h1.5M10 15h.5" />
    </>
  ),
  food: (
    <path d="M8 2v9m-3-9v6a3 3 0 0 0 6 0V2M8 11v11M17 2c-1.5 0-3 2-3 5.5S15.5 13 17 13m0-11v20" />
  ),
  building: (
    <path d="M5 21V4.5A1.5 1.5 0 0 1 6.5 3h11A1.5 1.5 0 0 1 19 4.5V21M3 21h18M9 7h1.5M13.5 7H15M9 11h1.5m3-0H15M9 15h1.5m3 0H15M10 21v-3.5h4V21" />
  ),
  discovery: (
    <path d="m20 20-3.5-3.5m1.5-4.5a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" />
  ),
  design: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 9v11" />
    </>
  ),
  build: (
    <path d="m8 9-3 3 3 3m8-6 3 3-3 3M13.5 6l-3 12" />
  ),
  quality: (
    <path d="M12 3 5 6v5c0 4.2 2.9 7.6 7 8.7 4.1-1.1 7-4.5 7-8.7V6l-7-3Zm-2 8.5 1.5 1.5 3-3.5" />
  ),
  deploy: (
    <path d="M12 2c3 2 4.5 5.5 4.5 9L12 15l-4.5-4c0-3.5 1.5-7 4.5-9Zm0 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8 17c-1.5.7-2 2.5-2 5 2.5 0 4.3-.5 5-2m2.5-.5c1.4 1 3.2 1.4 4.5.5m-9-8C6 12 4.6 13.4 4.6 13.4" />
  ),
  shield: (
    <path d="M12 3 5 6v5c0 4.2 2.9 7.6 7 8.7 4.1-1.1 7-4.5 7-8.7V6l-7-3Z" />
  ),
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </>
  ),
  growth: (
    <path d="M3 17.5 9 11l4 4 8-8.5M21 6.5h-5m5 0v5" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  handshake: (
    <path d="m11 17 2 2a1.5 1.5 0 0 0 2.1-2.1M13 15l2 2a1.5 1.5 0 0 0 2.1-2.1L12 9.5 9.5 12a2 2 0 0 1-2.8-2.8L11 5h3l6 3m-16 .5 3.5-1M4 8v7l2 2m14-9v7l-2 2" />
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.75" fill="currentColor" stroke="none" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.75" />
    </>
  ),
  sparkle: (
    <path d="M12 3v4m0 10v4m9-9h-4M7 12H3m13.5-5.5-2.8 2.8m-5.4 5.4-2.8 2.8m11-0-2.8-2.8m-5.4-5.4L4.5 6.5" />
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  "check-circle": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.5 2.5 4.5-5" />
    </>
  ),
  "arrow-right": <path d="M4 12h15m0 0-6-6m6 6-6 6" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </>
  ),
  phone: (
    <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h1.6a1 1 0 0 1 .95.68l1.2 3.2a1 1 0 0 1-.5 1.2L7.5 9a11 11 0 0 0 5.5 5.5l.92-1.25a1 1 0 0 1 1.2-.5l3.2 1.2a1 1 0 0 1 .68.95v1.6a2.5 2.5 0 0 1-2.5 2.5A13.5 13.5 0 0 1 3 5.5Z" />
  ),
  "map-pin": (
    <>
      <path d="M20 10c0 5.5-8 11-8 11s-8-5.5-8-11a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.75" />
    </>
  ),
  chat: (
    <path d="M4 12a8 8 0 1 1 3.5 6.6L4 20l1.2-3.3A7.9 7.9 0 0 1 4 12Z" />
  ),
  document: (
    <path d="M6 3h8l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm8 0v4h4M8.5 12.5h7M8.5 16h7" />
  ),
  library: (
    <path d="M4.5 4.5h3.5v15H4.5zM10 4.5h3.5v15H10zM15.6 5.2l3.3-.9 3.6 14.5-3.3.9zM3 19.5h18" />
  ),
  records: (
    <>
      <rect x="3.75" y="4.5" width="16.5" height="15" rx="2" />
      <circle cx="9" cy="10.5" r="2" />
      <path d="M6 16c.5-1.6 1.6-2.5 3-2.5s2.5.9 3 2.5M14 9.5h3.5M14 12.5h3.5M14 15.5h2" />
    </>
  ),
};

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
}

export default function Icon({ name, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
