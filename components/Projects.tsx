import { projects, type Project } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";
import { ArrowIcon } from "./Icons";

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-md border border-[var(--border)] bg-white/[0.03] px-2.5 py-1 font-mono text-[11.5px] text-[var(--muted)]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function Links({ links }: { links: NonNullable<Project["links"]> }) {
  return (
    <div className="flex flex-wrap gap-4">
      {links.map((link) => (
        <a
          key={link.href + link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer noopener"
          className="group inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-accent-300 transition-colors hover:text-accent-400"
        >
          {link.label}
          <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      ))}
    </div>
  );
}

function FlagshipCard({ project }: { project: Project }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-accent-500/30 bg-gradient-to-br from-accent-500/[0.10] via-[var(--surface)] to-transparent p-7 sm:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl"
      />

      <div className="relative">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="rounded-md border border-accent-500/40 bg-accent-500/10 px-2.5 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-accent-300">
            Flagship
          </span>
          <span className="font-mono text-[12px] text-[var(--faint)]">
            {project.period}
          </span>
        </div>

        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-2 text-[15px] font-medium text-accent-300 sm:text-base">
          {project.subtitle}
        </p>
        <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-[var(--muted)]">
          {project.summary}
        </p>

        {project.metrics ? (
          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-4">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="bg-[#080d16] px-4 py-4">
                <dt className="font-mono text-xl font-semibold text-white">
                  {metric.value}
                </dt>
                <dd className="mt-1 text-[11.5px] leading-snug text-[var(--faint)]">
                  {metric.label}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        <ul className="mt-8 grid gap-2.5 lg:grid-cols-2 lg:gap-x-8">
          {project.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-3 text-[14.5px] leading-relaxed text-[var(--muted)]"
            >
              <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent-400" />
              {bullet}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Tags tags={project.tags} />
        </div>

        {project.links ? (
          <div className="mt-6">
            <Links links={project.links} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-colors hover:border-accent-500/35 hover:bg-white/[0.045]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-white">
            {project.name}
          </h3>
          <p className="mt-1.5 text-[14px] font-medium text-accent-300">
            {project.subtitle}
          </p>
        </div>
        <span className="shrink-0 font-mono text-[11.5px] text-[var(--faint)]">
          {project.period}
        </span>
      </div>

      <p className="mt-4 text-[14.5px] leading-relaxed text-[var(--muted)]">
        {project.summary}
      </p>

      <ul className="mt-5 space-y-2.5">
        {project.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex gap-3 text-[14px] leading-relaxed text-[var(--muted)]"
          >
            <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent-500/70" />
            {bullet}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex-1" />

      <Tags tags={project.tags} />

      {project.links ? (
        <div className="mt-5">
          <Links links={project.links} />
        </div>
      ) : null}
    </div>
  );
}

export default function Projects() {
  const flagship = projects.filter((p) => p.flagship);
  const rest = projects.filter((p) => !p.flagship);

  return (
    <Section
      id="projects"
      index="03"
      title="Projects"
      subtitle="Systems I designed and built end to end — from a multi-tenant retail ERP to AI dashboards and client websites."
    >
      <div className="space-y-6">
        {flagship.map((project) => (
          <Reveal key={project.name}>
            <FlagshipCard project={project} />
          </Reveal>
        ))}

        <div className="grid gap-6 lg:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.name} delay={i * 70} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
