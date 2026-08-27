"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "@/components/Logo";
import { navLinks, profile } from "@/lib/data";

/** Both files are offered, so each label has to say plainly what you get. */
const resumeOptions = [
  {
    title: "Full résumé",
    detail: "2 pages — complete detail",
    href: profile.resumeFile,
  },
  {
    title: "Short résumé",
    detail: "1 page — the quick read",
    href: profile.resumeShortFile,
  },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const resumeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section currently owns the upper third of the viewport.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit?.target.id) setActive(`#${hit.target.id}`);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the résumé menu on an outside click or Escape.
  useEffect(() => {
    if (!resumeOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!resumeRef.current?.contains(event.target as Node)) {
        setResumeOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setResumeOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [resumeOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[rgba(5,7,13,0.78)] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* The name is hidden on small screens, so the link carries its own
            label rather than relying on the decorative mark. */}
        <a
          href="#top"
          aria-label={`${profile.name} — back to top`}
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-9 w-9 text-accent-400 transition-colors group-hover:text-accent-300" />
          <span className="hidden text-sm font-semibold tracking-tight text-white sm:block">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-[13px] font-medium transition-colors ${
                active === link.href
                  ? "text-accent-300"
                  : "text-[var(--muted)] hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div ref={resumeRef} className="relative ml-3">
            <button
              type="button"
              onClick={() => setResumeOpen((v) => !v)}
              aria-expanded={resumeOpen}
              aria-haspopup="menu"
              className="flex items-center gap-1.5 rounded-lg border border-accent-500/40 bg-accent-500/10 px-3.5 py-2 text-[13px] font-semibold text-accent-300 transition-colors hover:border-accent-400 hover:bg-accent-500/20"
            >
              Résumé
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className={`h-3 w-3 transition-transform ${
                  resumeOpen ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              role="menu"
              className={`absolute right-0 top-full mt-2 w-64 origin-top-right overflow-hidden rounded-xl border border-[var(--border-strong)] bg-[rgba(8,12,20,0.97)] shadow-2xl backdrop-blur-xl transition-all ${
                resumeOpen
                  ? "pointer-events-auto scale-100 opacity-100"
                  : "pointer-events-none scale-95 opacity-0"
              }`}
            >
              <p className="border-b border-[var(--border)] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--faint)]">
                Download résumé
              </p>
              {resumeOptions.map((option) => (
                <a
                  key={option.href}
                  href={option.href}
                  download
                  role="menuitem"
                  onClick={() => setResumeOpen(false)}
                  className="block px-4 py-3 transition-colors hover:bg-white/[0.06]"
                >
                  <span className="block text-[13.5px] font-semibold text-white">
                    {option.title}
                  </span>
                  <span className="mt-0.5 block text-[12px] text-[var(--muted)]">
                    {option.detail}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-white md:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 block h-[1.6px] w-5 bg-current transition-transform duration-300 ${
                open ? "top-[6px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] block h-[1.6px] w-5 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-[1.6px] w-5 bg-current transition-transform duration-300 ${
                open ? "top-[6px] -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* max-height drives the collapse, so the open value has to clear the
          tallest the panel gets: every nav link plus both résumé cards. */}
      <div
        className={`overflow-hidden border-t border-[var(--border)] bg-[rgba(5,7,13,0.96)] backdrop-blur-xl transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-136" : "max-h-0 border-t-transparent"
        }`}
      >
        <div className="space-y-1 px-5 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--muted)] transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <p className="px-3 pt-4 pb-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--faint)]">
            Download résumé
          </p>
          {resumeOptions.map((option) => (
            <a
              key={option.href}
              href={option.href}
              download
              onClick={() => setOpen(false)}
              className="block rounded-lg border border-accent-500/40 bg-accent-500/10 px-3 py-2.5 text-left"
            >
              <span className="block text-sm font-semibold text-accent-200">
                {option.title}
              </span>
              <span className="mt-0.5 block text-[12px] text-[var(--muted)]">
                {option.detail}
              </span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
