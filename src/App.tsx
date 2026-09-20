import { useCallback, useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { PromptEngineering } from '@/sections/PromptEngineering';
import { Projects } from '@/sections/Projects';
import { Experience } from '@/sections/Experience';
import { Education } from '@/sections/Education';
import { Certifications } from '@/sections/Certifications';
import { Resume } from '@/sections/Resume';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const openProject = useCallback((id: string) => {
    setActiveProjectId(id);
  }, []);

  const closeProject = useCallback(() => {
    setActiveProjectId(null);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeProject();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeProject]);

  useEffect(() => {
    document.body.style.overflow = activeProjectId ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeProjectId]);

  return (
    <div className="relative min-h-screen bg-ink-950 text-slate-200">
      <Navbar />
      <main>
        <Hero onViewProjects={() => scrollTo('projects')} />
        <About />
        <Skills />
        <PromptEngineering />
        <Projects
          activeProjectId={activeProjectId}
          onOpenProject={openProject}
          onCloseProject={closeProject}
        />
        <Experience />
        <Education />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
