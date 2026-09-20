import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { GlassCard } from '@/components/GlassCard';

export function Resume() {
  return (
    <Section
      id="resume"
      label="Resume"
      title="Resume."
      description="A prominent download is available below. The resume file is a placeholder for now — replace it with the final PDF when ready."
    >
      <GlassCard accent="blue" className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent-blue/20 bg-accent-blue/10 text-accent-blue">
            <Icon name="FileText" className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-50 sm:text-lg">
              Varsha Kaleeswaran — Resume
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              PDF download. Placeholder file in place until the final resume is provided.
            </p>
          </div>
        </div>
        <Button
          size="lg"
          variant="primary"
          href="/resume/Varsha_Kaleeswaran_Resume.pdf"
          download
        >
          <Icon name="Download" className="h-4 w-4" />
          Download Resume
        </Button>
      </GlassCard>
    </Section>
  );
}
