import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';

const accentRing: Record<string, string> = {
  cyan: 'group-hover:border-accent-cyan/40',
  blue: 'group-hover:border-accent-blue/40',
  violet: 'group-hover:border-accent-violet/40',
};

const accentGlow: Record<string, string> = {
  cyan: 'from-accent-cyan/15',
  blue: 'from-accent-blue/15',
  violet: 'from-accent-violet/15',
};

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  accent?: 'cyan' | 'blue' | 'violet';
  as?: 'div' | 'article' | 'li';
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  accent = 'blue',
  as: Tag = 'div',
  hover = true,
}: GlassCardProps) {
  return (
    <Tag
      className={cn(
        'group relative overflow-hidden rounded-2xl glass p-6',
        hover && 'glass-hover',
        accentRing[accent],
        className
      )}
    >
      <div
        className={cn(
          'pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100',
          accentGlow[accent]
        )}
        aria-hidden="true"
      />
      <div className="relative">{children}</div>
    </Tag>
  );
}
