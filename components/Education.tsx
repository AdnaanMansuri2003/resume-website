import { education } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <Section
      id="education"
      index="05"
      title="Education"
      subtitle="Graduate study in Toronto, on top of a Computer Engineering degree from GTU."
    >
      <div className="space-y-5">
        {education.map((entry, i) => (
          <Reveal key={entry.school} delay={i * 70}>
            <div
              className={`rounded-2xl border p-7 transition-colors sm:p-8 ${
                entry.current
                  ? "border-accent-500/35 bg-gradient-to-br from-accent-500/[0.09] to-transparent"
                  : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-strong)]"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                      {entry.school}
                    </h3>
                    {entry.current ? (
                      <span className="rounded-md border border-accent-500/40 bg-accent-500/10 px-2 py-0.5 font-mono text-[10.5px] font-semibold uppercase tracking-wider text-accent-300">
                        In progress
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1.5 text-[15px] font-medium text-accent-300">
                    {entry.credential}
                  </p>
                  <p className="mt-1 text-[14px] text-[var(--muted)]">
                    {entry.detail}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-mono text-[12.5px] text-[var(--muted)]">
                    {entry.period}
                  </p>
                  <p className="mt-1 font-mono text-[12px] text-[var(--faint)]">
                    {entry.location}
                  </p>
                  {entry.result ? (
                    <p className="mt-2 inline-block rounded-md border border-[var(--border-strong)] bg-white/[0.04] px-2 py-0.5 font-mono text-[12px] text-white">
                      {entry.result}
                    </p>
                  ) : null}
                </div>
              </div>

              {entry.coursework ? (
                <div className="mt-7 border-t border-[var(--border)] pt-6">
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[var(--faint)]">
                    Relevant coursework
                  </h4>
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {entry.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-md border border-[var(--border)] bg-white/[0.03] px-2.5 py-1 font-mono text-[11.5px] text-[var(--muted)]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
