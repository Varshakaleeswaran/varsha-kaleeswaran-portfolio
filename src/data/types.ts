export type IconName =
  | 'Cpu'
  | 'Brain'
  | 'MessageSquare'
  | 'Database'
  | 'Eye'
  | 'Code'
  | 'Layers'
  | 'Search'
  | 'Bot'
  | 'FileText'
  | 'Building2'
  | 'Car'
  | 'Gavel'
  | 'Sparkles'
  | 'Music'
  | 'Languages'
  | 'ScanFace'
  | 'Github'
  | 'ExternalLink'
  | 'ArrowRight'
  | 'Download'
  | 'Linkedin'
  | 'Mail'
  | 'MapPin'
  | 'GraduationCap'
  | 'Briefcase'
  | 'Award'
  | 'Send'
  | 'Menu'
  | 'X'
  | 'ChevronDown'
  | 'Terminal'
  | 'Workflow'
  | 'Lightbulb'
  | 'Target'
  | 'CheckCircle2'
  | 'AlertTriangle'
  | 'Rocket';

export interface Skill {
  name: string;
  note?: string;
}

export interface SkillGroup {
  category: string;
  icon: IconName;
  accent: 'cyan' | 'blue' | 'violet';
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  focus: string;
  description: string;
  tags: string[];
  github?: string;
  status?: string;
  hasCaseStudy: boolean;
  caseStudyId?: string;
  icon: IconName;
  accent: 'cyan' | 'blue' | 'violet';
  featured?: boolean;
}

export interface CaseStudySection {
  heading: string;
  body: string;
}

export interface CaseStudy {
  id: string;
  projectId: string;
  title: string;
  focus: string;
  tags: string[];
  sections: CaseStudySection[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  period: string;
  location: string;
  type: 'Internship' | 'Project' | 'Academic';
  summary: string;
  highlights: string[];
  current?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  icon: IconName;
}
