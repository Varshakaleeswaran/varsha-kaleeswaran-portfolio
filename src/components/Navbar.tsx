import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';

const NAV_HEIGHT = 72; // px — matches h-16 + buffer

const navItems = [
  { id: 'home',               label: 'Home'               },
  { id: 'about',              label: 'About'              },
  { id: 'skills',             label: 'Skills'             },
  { id: 'prompt-engineering', label: 'Prompt Engineering' },
  { id: 'projects',           label: 'Projects'           },
  { id: 'experience',         label: 'Experience'         },
  { id: 'education',          label: 'Education'          },
  { id: 'achievements',       label: 'Achievements'       },
  { id: 'certifications',     label: 'Certifications'     },
  { id: 'resume',             label: 'Resume'             },
  { id: 'contact',            label: 'Contact'            },
];

/** Smooth-scroll to a section with correct navbar offset. */
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const [active, setActive]       = useState('home');
  const ticking                   = useRef(false);

  // Navbar background on scroll
  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 16);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section tracking — uses a generous rootMargin so the active
  // item updates reliably without skipping sections.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false);
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-white/[0.07] bg-ink-950/85 backdrop-blur-xl shadow-lg shadow-black/20'
          : 'border-b border-transparent'
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav('home'); }}
          className="flex items-center gap-2.5 focus-ring rounded-lg"
          aria-label="Varsha Kaleeswaran — back to top"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent-blue/30 bg-accent-blue/10">
            <span className="font-mono text-sm font-bold text-accent-blue" aria-hidden="true">V</span>
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-slate-100 sm:block">
            Varsha Kaleeswaran
            <span className="ml-2 font-mono text-[10px] font-normal uppercase tracking-[0.2em] text-accent-blue/80">
              AI/ML
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-0.5 xl:flex" role="list">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNav(item.id)}
                className={cn(
                  'rounded-lg px-2.5 py-2 text-sm font-medium transition-colors focus-ring',
                  active === item.id
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                )}
                aria-current={active === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-200 hover:bg-white/[0.05] focus-ring xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg
            width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="18" y1="6"  x2="6"  y2="18" />
                <line x1="6"  y1="6"  x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7"  x2="20" y2="7"  />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden border-t border-white/[0.06] bg-ink-900/95 backdrop-blur-xl',
          'transition-[max-height,opacity] duration-300 ease-in-out xl:hidden',
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        )}
        aria-hidden={!open}
      >
        <ul
          className="mx-auto grid max-w-6xl grid-cols-2 gap-1 px-5 py-4 sm:px-8"
          role="list"
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNav(item.id)}
                className={cn(
                  'w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors focus-ring',
                  active === item.id
                    ? 'bg-white/[0.07] text-white'
                    : 'text-slate-400 hover:bg-white/[0.04] hover:text-white'
                )}
                aria-current={active === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
