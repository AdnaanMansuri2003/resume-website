import { availability, profile, stats } from "@/lib/data";
import Reveal from "./Reveal";
import {
  ArrowIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PinIcon,
} from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-400/[0.07] px-3.5 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[12.5px] font-medium text-emerald-300">
              {availability.status} — {availability.headline}
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]">
            {profile.name}
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-snug text-accent-300 sm:text-2xl">
            {profile.headline}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[var(--muted)] sm:text-base">
            {profile.summary}
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13.5px] text-[var(--faint)]">
            <span className="inline-flex items-center gap-1.5">
              <PinIcon className="h-3.5 w-3.5" />
              {profile.location}
            </span>
            <span className="hidden h-3 w-px bg-[var(--border-strong)] sm:block" />
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent-300"
            >
              <MailIcon className="h-3.5 w-3.5" />
              {profile.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent-400 px-5 py-3 text-sm font-semibold text-ink-950 transition-all hover:bg-accent-300 hover:shadow-[0_0_32px_-8px_rgba(56,189,248,0.7)]"
            >
              Get in touch
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-accent-500/50 hover:bg-white/[0.06]"
            >
              <DownloadIcon />
              Full résumé
              <span className="font-normal text-[var(--faint)]">2 pages</span>
            </a>
            <a
              href={profile.resumeShortFile}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-5 py-3 text-sm font-semibold text-[var(--muted)] transition-colors hover:border-accent-500/50 hover:text-white"
            >
              <DownloadIcon />
              Short résumé
              <span className="font-normal text-[var(--faint)]">1 page</span>
            </a>
            <div className="flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-accent-500/50 hover:text-white"
              >
                <GithubIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-accent-500/50 hover:text-white"
              >
                <LinkedinIcon className="h-[17px] w-[17px]" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:mt-20 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#070b12] px-5 py-6 transition-colors hover:bg-[#0a1018]"
              >
                <dt className="font-mono text-2xl font-semibold text-white sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 whitespace-pre-line text-[12.5px] leading-snug text-[var(--faint)]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
