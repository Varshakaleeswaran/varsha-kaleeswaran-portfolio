import { useCallback, useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { PromptEngineering } from '@/sections/PromptEngineering';
import { Experience } from '@/sections/Experience';
import { Certifications } from '@/sections/Certifications';
import { Resume } from '@/sections/Resume';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

export default function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);

  const openCaseStudy = useCallback((id: string) => {
    setActiveCaseStudy(id);
  }, []);

  const closeCaseStudy = useCallback(() => {
    setActiveCaseStudy(null);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCaseStudy();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeCaseStudy]);

  useEffect(() => {
    document.body.style.overflow = activeCaseStudy ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeCaseStudy]);

  return (
    <div className="relative min-h-screen bg-ink-950 text-slate-200">
      <Navbar />
      <main>
        <Hero onViewProjects={() => scrollTo('projects')} />
        <About />
        <Skills />
        <Projects
          activeCaseStudy={activeCaseStudy}
          onOpenCaseStudy={openCaseStudy}
          onCloseCaseStudy={closeCaseStudy}
        />
        <PromptEngineering />
        <Experience />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
