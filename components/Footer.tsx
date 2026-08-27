import Logo from "@/components/Logo";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 py-9 sm:flex-row sm:px-8">
        <p className="flex items-center gap-2.5 font-mono text-[12px] text-[var(--faint)]">
          <Logo className="h-7 w-7 text-accent-400/70" />© {new Date().getFullYear()}{" "}
          {profile.name}
        </p>
        <p className="font-mono text-[12px] text-[var(--faint)]">
          Built with Next.js &amp; Tailwind CSS · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
