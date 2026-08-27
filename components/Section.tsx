import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  index,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs tracking-[0.2em] text-accent-400">
                {index}
              </span>
              <span className="h-px w-10 bg-[var(--border-strong)]" />
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {title}
              </h2>
              <span className="hidden h-px flex-1 bg-[var(--border)] sm:block" />
            </div>
            {subtitle ? (
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--muted)]">
                {subtitle}
              </p>
            ) : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
