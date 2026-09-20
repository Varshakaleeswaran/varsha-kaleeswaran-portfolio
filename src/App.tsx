import { useCallback, useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { PromptEngineering } from '@/sections/PromptEngineering';
import { Projects } from '@/sections/Projects';
import { Experience } from '@/sections/Experience';
import { Education } from '@/sections/Education';
import { Achievements } from '@/sections/Achievements';
import { Certifications } from '@/sections/Certifications';
import { Resume } from '@/sections/Resume';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

const NAV_HEIGHT = 72; // px — matches h-16 (64px) + small buffer

/** Smooth-scroll to a section, accounting for the fixed navbar height. */
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
  window.scrollTo({ top, behavior: 'smooth' });
}

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const openProject = useCallback((id: string) => {
    setActiveProjectId(id);
  }, []);

  const closeProject = useCallback(() => {
    setActiveProjectId(null);
  }, []);

  // Keyboard: Escape closes the modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeProject();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeProject]);

  // Lock body scroll when modal is open WITHOUT causing layout shift.
  // We compensate for the scrollbar width so content doesn't jump.
  useEffect(() => {
    if (activeProjectId) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [activeProjectId]);

  return (
    <div className="relative min-h-screen bg-ink-950 text-slate-200">
      <Navbar />
      <main>
        <Hero onViewProjects={() => scrollToSection('projects')} />
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
        <Achievements />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
