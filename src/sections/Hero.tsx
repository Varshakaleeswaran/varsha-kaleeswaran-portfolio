import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';

export function Hero({ onViewProjects }: { onViewProjects: () => void }) {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-24 sm:px-8"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-grid-faint bg-grid [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]" />
        <div className="absolute left-1/2 top-[-12rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent-blue/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute right-[-8rem] top-32 h-[26rem] w-[26rem] rounded-full bg-accent-violet/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10rem] left-[-6rem] h-[22rem] w-[22rem] rounded-full bg-accent-cyan/10 blur-[120px] animate-pulse-slow" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex animate-fade-in items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-slate-300 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to AI/ML &amp; Prompt Engineering roles
          </span>

          <h1 className="animate-fade-up text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Varsha
            <br className="sm:hidden" /> Kaleeswaran
          </h1>

          <p className="animate-fade-up text-lg font-medium text-slate-100 sm:text-2xl [animation-delay:80ms]">
            <span className="text-gradient">AI/ML Developer</span>
            <span className="mx-2 text-slate-600">|</span>
            Generative AI
            <span className="mx-2 text-slate-600">|</span>
            Prompt Engineering
            <span className="mx-2 text-slate-600">|</span>
            LLM Applications
          </p>

          <p className="max-w-2xl animate-fade-up text-base leading-relaxed text-slate-400 sm:text-lg [animation-delay:160ms]">
            Building practical AI systems with Generative AI, LLMs, prompt engineering, RAG, NLP, and
            Computer Vision.
          </p>

          <div className="mt-2 flex animate-fade-up flex-wrap gap-3 [animation-delay:240ms]">
            <Button size="lg" variant="primary" onClick={onViewProjects}>
              View Projects
              <Icon name="ArrowRight" className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              href="/resume/Varsha_Kaleeswaran_Resume.pdf"
              download
            >
              <Icon name="Download" className="h-4 w-4" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              href="https://github.com/Varshakaleeswaran"
              aria-label="GitHub profile"
            >
              <Icon name="Github" className="h-4 w-4" />
              GitHub
            </Button>
            <Button
              size="lg"
              variant="outline"
              href="https://www.linkedin.com/in/varsha-kaleeswaran-2b2b2a273/"
              aria-label="LinkedIn profile"
            >
              <Icon name="Linkedin" className="h-4 w-4" />
              LinkedIn
            </Button>
          </div>

          <div className="mt-10 flex animate-fade-up flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-slate-500 [animation-delay:320ms]">
            <span className="inline-flex items-center gap-2">
              <Icon name="Sparkles" className="h-3.5 w-3.5 text-accent-violet" /> Generative AI
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="Database" className="h-3.5 w-3.5 text-accent-blue" /> RAG
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="MessageSquare" className="h-3.5 w-3.5 text-accent-cyan" /> Prompt Engineering
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="Eye" className="h-3.5 w-3.5 text-accent-violet" /> Computer Vision
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={onViewProjects}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-float text-slate-500 hover:text-slate-200 sm:block"
        aria-label="Scroll to projects"
      >
        <Icon name="ChevronDown" className="h-6 w-6" />
      </button>
    </section>
  );
}
