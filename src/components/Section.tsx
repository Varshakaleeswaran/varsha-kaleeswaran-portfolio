import { type ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { cn } from '@/lib/cn';

interface SectionProps {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, label, title, description, children, className }: SectionProps) {
  const { ref, visible } = useReveal();
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn('relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28', className)}
    >
      <div
        ref={ref}
        className={cn('reveal', visible && 'is-visible')}
      >
        <div className="flex flex-col gap-3">
          <span className="section-label">
            <span className="h-px w-8 bg-accent-blue/60" />
            {label}
          </span>
          <h2
            id={`${id}-title`}
            className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem]"
          >
            {title}
          </h2>
          {description && (
            <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {description}
            </p>
          )}
        </div>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
