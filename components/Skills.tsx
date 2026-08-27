import { skills } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

const levelStyles: Record<string, string> = {
  Advanced: "border-accent-500/45 bg-accent-500/[0.13] text-accent-200",
  Intermediate: "border-[var(--border-strong)] bg-white/[0.05] text-[#cbd5e1]",
  Novice: "border-[var(--border)] bg-transparent text-[var(--faint)]",
};

export default function Skills() {
  return (
    <Section
      id="skills"
      index="04"
      title="Skills"
      subtitle="The stack I reach for, grouped by where it lives. Language proficiency is marked where it's meaningful."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={i * 60} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--border-strong)]">
              <h3 className="flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-wider text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    title={item.level ? `${item.name} — ${item.level}` : item.name}
                    className={`rounded-lg border px-2.5 py-1.5 text-[13px] font-medium transition-colors ${
                      item.level
                        ? levelStyles[item.level]
                        : "border-[var(--border-strong)] bg-white/[0.045] text-[#cbd5e1]"
                    }`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-xl border border-[var(--border)] px-5 py-4 font-mono text-[11.5px] text-[var(--faint)]">
          <span className="uppercase tracking-wider">Proficiency key</span>
          {(["Advanced", "Intermediate", "Novice"] as const).map((level) => (
            <span key={level} className="inline-flex items-center gap-2">
              <span
                className={`h-2.5 w-2.5 rounded-sm border ${levelStyles[level]}`}
              />
              {level}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
