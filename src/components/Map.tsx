import { company } from "@/lib/company";

interface MapProps {
  directionsLabel: string;
  viewLabel: string;
}

export default function Map({ directionsLabel, viewLabel }: MapProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm dark:border-ink-800 dark:bg-ink-900">
      <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
        <iframe
          src={company.map.embedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
          title="KNT Technology Location"
        />
      </div>
      <div className="flex flex-col gap-3 border-t border-ink-100 p-4 dark:border-ink-800 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm">
          <div className="font-semibold text-ink-900 dark:text-white">
            {company.nameTh}
          </div>
          <div className="text-ink-600 dark:text-ink-300">
            {company.address.th.line1}, {company.address.th.line2}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href={company.map.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0L9 7"
              />
            </svg>
            {directionsLabel}
          </a>
          <a
            href={company.map.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-ink-700 dark:bg-ink-950 dark:text-ink-200"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            {viewLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
