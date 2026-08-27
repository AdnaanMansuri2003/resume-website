import { availability, education, profile } from "@/lib/data";
import Section from "./Section";
import Reveal from "./Reveal";
import { CheckIcon, SparkIcon } from "./Icons";

const current = education.find((entry) => entry.current);

const focus = [
  "Offline-first and resilient systems — software that survives a dropped connection.",
  "Retail and operations software: POS, inventory, invoicing, GST and reporting.",
  "AI where it earns its place — forecasting, voice input, and analytics that change a decision.",
  "Clean, typed, reviewable TypeScript across the whole stack.",
];

export default function About() {
  return (
    <Section
      id="about"
      index="01"
      title="About"
      subtitle="Where I come from, what I build, and what I'm looking for right now."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-9">
            <div className="space-y-5 text-[15px] leading-relaxed text-[var(--muted)]">
              <p>
                I&apos;m a Computer Engineering graduate from Gujarat Technological
                University who spends most of his time building the unglamorous
                software that businesses run on — billing screens, stock ledgers,
                invoices, reports.
              </p>
              <p>
                The reason I&apos;m good at it is a little unusual: before I wrote
                retail software, I <span className="text-white">ran a retail store</span>. As
                store manager at Isaji Mart I handled the cashier desk, the daily
                cash reconciliation, the stock room and the suppliers. I know
                exactly what happens when the internet drops mid-transaction and
                there are six people in the queue — which is why the POS I
                architected for{" "}
                <span className="text-white">Inventix</span> keeps billing offline and
                reconciles itself when the connection returns.
              </p>
              <p>
                Professionally I spent a year developing full-stack applications at{" "}
                <span className="text-white">Gujarat Infotech Limited</span>, and
                independently I&apos;ve shipped an AI analytics dashboard, two
                appliance-service websites and a multi-tenant ERP of roughly 74,000
                lines of TypeScript.
              </p>
              {current ? (
                <p>
                  I&apos;m now in Toronto for a{" "}
                  <span className="text-white">
                    {current.credential} in {current.detail}
                  </span>{" "}
                  at {current.school}, starting {current.period.split("—")[0].trim()}.
                </p>
              ) : null}
            </div>

            <div className="mt-8 border-t border-[var(--border)] pt-7">
              <h3 className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-white">
                <SparkIcon className="h-4 w-4 text-accent-400" />
                What I focus on
              </h3>
              <ul className="mt-4 space-y-2.5">
                {focus.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[14.5px] leading-relaxed text-[var(--muted)]"
                  >
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-2">
          <div className="h-full rounded-2xl border border-emerald-400/25 bg-gradient-to-b from-emerald-400/[0.09] to-transparent p-7 sm:p-9">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                {availability.status}
              </span>
            </div>

            <h3 className="mt-5 text-xl font-semibold leading-snug tracking-tight text-white">
              {availability.headline}
            </h3>

            <dl className="mt-7 space-y-5">
              {availability.points.map((point) => (
                <div key={point.label} className="flex gap-3">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-wider text-[var(--faint)]">
                      {point.label}
                    </dt>
                    <dd className="mt-1 text-[14.5px] leading-snug text-white">
                      {point.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <a
              href={`mailto:${profile.email}`}
              className="mt-8 flex w-full items-center justify-center rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-3 text-sm font-semibold text-emerald-200 transition-colors hover:border-emerald-300 hover:bg-emerald-400/20"
            >
              Let&apos;s talk about a role
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
