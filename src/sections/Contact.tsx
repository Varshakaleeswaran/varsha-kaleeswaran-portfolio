import { Section } from '@/components/Section';
import { Icon } from '@/components/Icon';
import { GlassCard } from '@/components/GlassCard';

const links = [
  {
    label: 'Email',
    value: 'kaleeswaranvarsha@gmail.com',
    href: 'mailto:kaleeswaranvarsha@gmail.com',
    icon: 'Mail' as const,
    accent: 'text-accent-blue',
  },
  {
    label: 'Phone',
    value: '+91 8526776902',
    href: 'tel:+918526776902',
    icon: 'Send' as const,
    accent: 'text-accent-cyan',
  },
  {
    label: 'LinkedIn',
    value: 'in/varsha-kaleeswaran',
    href: 'https://www.linkedin.com/in/varsha-kaleeswaran-2b2b2a273/',
    icon: 'Linkedin' as const,
    accent: 'text-accent-violet',
  },
  {
    label: 'GitHub',
    value: 'github.com/Varshakaleeswaran',
    href: 'https://github.com/Varshakaleeswaran',
    icon: 'Github' as const,
    accent: 'text-accent-blue',
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      label="Contact"
      title="Let's talk AI."
      description="Open to AI/ML, Generative AI, and Prompt Engineering opportunities. Feel free to reach out through LinkedIn, GitHub, or email."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group flex flex-col gap-3 rounded-2xl glass glass-hover p-6 focus-ring"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
              <Icon name={link.icon} className={`h-5 w-5 ${link.accent}`} />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-50">{link.label}</p>
              <p className="mt-1 truncate font-mono text-xs text-slate-400">{link.value}</p>
            </div>
            {link.href.startsWith('http') && (
              <Icon
                name="ExternalLink"
                className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-200"
              />
            )}
          </a>
        ))}
      </div>

      <GlassCard accent="blue" className="mt-4 h-auto">
        <div className="flex items-center gap-3">
          <Icon name="MapPin" className="h-4 w-4 text-accent-blue" />
          <p className="text-sm text-slate-300">Based in India · Open to remote</p>
        </div>
      </GlassCard>
    </Section>
  );
}
