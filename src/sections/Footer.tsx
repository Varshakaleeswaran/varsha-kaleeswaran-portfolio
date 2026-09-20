import { Icon } from '@/components/Icon';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06] bg-ink-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent-blue/30 bg-accent-blue/10">
            <span className="font-mono text-sm font-bold text-accent-blue">V</span>
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-100">Varsha Kaleeswaran</p>
            <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
              AI/ML Developer
            </p>
          </div>
        </div>

        <nav className="flex items-center gap-3" aria-label="Social links">
          <a
            href="https://github.com/Varshakaleeswaran"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-slate-400 transition-colors hover:border-accent-blue/40 hover:text-white focus-ring"
            aria-label="GitHub"
          >
            <Icon name="Github" className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/varsha-kaleeswaran-2b2b2a273/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-slate-400 transition-colors hover:border-accent-blue/40 hover:text-white focus-ring"
            aria-label="LinkedIn"
          >
            <Icon name="Linkedin" className="h-4 w-4" />
          </a>
          <a
            href="mailto:kaleeswaranvarsha@gmail.com"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-slate-400 transition-colors hover:border-accent-blue/40 hover:text-white focus-ring"
            aria-label="Email"
          >
            <Icon name="Mail" className="h-4 w-4" />
          </a>
        </nav>

        <p className="text-xs text-slate-500">
          © {year} Varsha Kaleeswaran. Built with React, TypeScript, Vite &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
