import Image from "next/image";
import Icon from "@/components/Icon";
import { workGallery, workIcons } from "@/lib/works";

type Project = {
  id: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  summary: string;
};

// Cover for a project: the first screenshot when we have one, otherwise a
// branded panel with the project's icon (never a client logo).
export function WorkCover({
  id,
  alt,
  className = "",
}: {
  id: string;
  alt: string;
  className?: string;
}) {
  const cover = workGallery[id]?.[0];
  if (cover) {
    return (
      <div className={`relative overflow-hidden bg-ink-100 dark:bg-ink-800 ${className}`}>
        <Image
          src={cover.src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 400px, 100vw"
          className="object-cover object-top"
        />
      </div>
    );
  }
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden gradient-brand-dark ${className}`}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm">
        <Icon name={workIcons[id] ?? "custom-software"} className="h-10 w-10" />
      </div>
    </div>
  );
}

// Compact project card used on the home page and in the Works grid.
export default function WorkCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition-all hover:border-brand-300 hover:shadow-xl dark:border-ink-800 dark:bg-ink-900 dark:hover:border-brand-500/40">
      <WorkCover id={project.id} alt={project.title} className="aspect-[16/10]" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="rounded-full bg-brand-50 px-2.5 py-1 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
            {project.industry}
          </span>
          <span className="text-ink-500 dark:text-ink-400">{project.year}</span>
        </div>
        <h3 className="mt-3 text-lg font-bold leading-snug">{project.title}</h3>
        <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{project.client}</p>
        <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
          {project.summary}
        </p>
      </div>
    </article>
  );
}
