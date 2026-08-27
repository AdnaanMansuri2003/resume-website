import { experience, type Experience as ExperienceItem } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

function Card({ item }: { item: ExperienceItem }) {
  return (
    <div
      className={`group relative rounded-2xl border p-7 transition-colors sm:p-8 ${
        item.featured
          ? "border-[var(--border-strong)] bg-[var(--surface)] hover:border-accent-500/40"
          : "border-[var(--border)] bg-transparent hover:border-[var(--border-strong)] hover:bg-[var(--surface)]"
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
              {item.company}
            </h3>
            {item.type === "internship" ? (
              <span className="rounded-md border border-[var(--border-strong)] px-2 py-0.5 font-mono text-[10.5px] uppercase tracking-wider text-[var(--faint)]">
                Internship
              </span>
            ) : null}
          </div>
          <p className="mt-1.5 text-[15px] font-medium text-accent-300">
            {item.role}
          </p>
        </div>
        <div className="text-left sm:text-right">
          <p className="font-mono text-[12.5px] text-[var(--muted)]">
            {item.period}
          </p>
          <p className="mt-1 font-mono text-[12px] text-[var(--faint)]">
            {item.location}
          </p>
        </div>
      </div>

      <p className="mt-5 text-[15px] leading-relaxed text-[var(--muted)]">
        {item.summary}
      </p>

      <ul className="mt-5 space-y-2.5">
        {item.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex gap-3 text-[14.5px] leading-relaxed text-[var(--muted)]"
          >
            <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent-500/70" />
            {bullet}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-[var(--border)] bg-white/[0.03] px-2.5 py-1 font-mono text-[11.5px] text-[var(--muted)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      title="Experience"
      subtitle="Software development, retail operations management, and two technical internships."
    >
      <div className="relative">
        {/* Timeline rail, drawn only on wide screens. */}
        <div className="absolute left-[7px] top-2 hidden h-full w-px bg-gradient-to-b from-accent-500/50 via-[var(--border)] to-transparent lg:block" />

        <div className="space-y-5 lg:space-y-6 lg:pl-12">
          {experience.map((item, i) => (
            <Reveal key={item.company + item.role} delay={i * 70} className="relative">
              <span className="absolute -left-12 top-9 hidden h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-[var(--bg)] bg-accent-500 lg:flex" />
              <Card item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
