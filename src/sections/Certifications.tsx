import { Section } from '@/components/Section';
import { GlassCard } from '@/components/GlassCard';
import { Icon } from '@/components/Icon';
import { certifications } from '@/data/certifications';

export function Certifications() {
  return (
    <Section
      id="certifications"
      label="Certifications"
      title="Certifications & professional learning."
      description="A record of certifications across the AI/ML domain. Issuer and date details will be updated as they are finalized."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <GlassCard key={cert.id} accent="violet" as="article" className="h-full">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent-violet/20 bg-accent-violet/10 text-accent-violet">
                <Icon name={cert.icon} className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold leading-tight text-slate-50">{cert.title}</h3>
                <p className="mt-1.5 text-xs text-slate-400">{cert.issuer}</p>
                {cert.date && (
                  <p className="mt-1 font-mono text-[11px] text-slate-500">{cert.date}</p>
                )}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
