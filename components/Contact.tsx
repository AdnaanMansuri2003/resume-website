import { availability, profile } from "@/lib/data";
import Reveal from "./Reveal";
import {
  ArrowIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "./Icons";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: MailIcon,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    Icon: PhoneIcon,
  },
  {
    label: "GitHub",
    value: "AdnaanMansuri2003",
    href: profile.github,
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "Adnaan Mansuri",
    href: profile.linkedin,
    Icon: LinkedinIcon,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-[var(--border-strong)] bg-gradient-to-b from-accent-500/[0.09] to-transparent px-6 py-14 text-center sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-64 w-[36rem] max-w-full rounded-full bg-accent-500/12 blur-3xl"
            />

            <div className="relative">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent-400">
                06 — Contact
              </span>

              <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                {availability.headline}
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-[var(--muted)] sm:text-base">
                I&apos;m in Toronto, hold a valid Canadian study permit, and I&apos;m
                looking for co-op, internship and part-time software roles — with
                full-time availability over the winter and summer breaks. If
                you&apos;re building something, I&apos;d like to hear about it.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 rounded-xl bg-accent-400 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:bg-accent-300 hover:shadow-[0_0_36px_-8px_rgba(56,189,248,0.75)]"
                >
                  Email me
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={profile.resumeFile}
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-strong)] bg-[var(--surface)] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent-500/50 hover:bg-white/[0.06]"
                >
                  <DownloadIcon />
                  Full résumé
                  <span className="font-normal text-[var(--faint)]">
                    2 pages
                  </span>
                </a>
                <a
                  href={profile.resumeShortFile}
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-6 py-3.5 text-sm font-semibold text-[var(--muted)] transition-colors hover:border-accent-500/50 hover:text-white"
                >
                  <DownloadIcon />
                  Short résumé
                  <span className="font-normal text-[var(--faint)]">1 page</span>
                </a>
              </div>

              <div className="mx-auto mt-14 grid max-w-3xl gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
                {channels.map(({ label, value, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                    className="group flex items-center gap-4 bg-[#070b12] px-5 py-5 text-left transition-colors hover:bg-[#0b121c]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--muted)] transition-colors group-hover:border-accent-500/50 group-hover:text-accent-300">
                      <Icon className="h-[17px] w-[17px]" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-[var(--faint)]">
                        {label}
                      </span>
                      <span className="mt-0.5 block truncate text-[14px] font-medium text-white">
                        {value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
