import { useState } from 'react';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { GlassCard } from '@/components/GlassCard';

const links = [
  {
    label: 'GitHub',
    value: 'github.com/Varshakaleeswaran',
    href: 'https://github.com/Varshakaleeswaran',
    icon: 'Github' as const,
    accent: 'text-accent-blue',
  },
  {
    label: 'LinkedIn',
    value: 'in/varsha-kaleeswaran',
    href: 'https://www.linkedin.com/in/varsha-kaleeswaran-2b2b2a273/',
    icon: 'Linkedin' as const,
    accent: 'text-accent-cyan',
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Section
      id="contact"
      label="Contact"
      title="Let's talk AI."
      description="Open to AI/ML, Generative AI, and Prompt Engineering opportunities. Reach out through any channel below."
    >
      <div className="grid gap-4 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl glass glass-hover p-5 focus-ring"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                <Icon name={link.icon} className={`h-5 w-5 ${link.accent}`} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-slate-50">{link.label}</p>
                <p className="truncate font-mono text-xs text-slate-400">{link.value}</p>
              </div>
              <Icon
                name="ExternalLink"
                className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-200"
              />
            </a>
          ))}
          <GlassCard accent="violet" className="h-auto">
            <div className="flex items-center gap-3">
              <Icon name="MapPin" className="h-4 w-4 text-accent-violet" />
              <p className="text-sm text-slate-300">Based in India · Open to remote</p>
            </div>
          </GlassCard>
        </div>

        <div className="lg:col-span-3">
          <GlassCard accent="blue" className="h-full">
            <form onSubmit={handleSubmit} className="flex h-full flex-col gap-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="input"
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="input"
                  />
                </Field>
              </div>
              <Field label="Subject" htmlFor="subject">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What is this about?"
                  className="input"
                />
              </Field>
              <Field label="Message" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about the role or project…"
                  className="input resize-none"
                />
              </Field>

              <div className="mt-1 flex items-center justify-between gap-4">
                <p className="text-xs text-slate-500">
                  This form is a UI demo — no message is sent yet.
                </p>
                <Button type="submit" variant="primary" size="md">
                  {sent ? (
                    <>
                      <Icon name="CheckCircle2" className="h-4 w-4" />
                      Message ready
                    </>
                  ) : (
                    <>
                      <Icon name="Send" className="h-4 w-4" />
                      Send message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </GlassCard>
        </div>
      </div>
    </Section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-slate-300">{label}</span>
      {children}
    </label>
  );
}
