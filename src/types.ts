export interface NavItem {
  label: string;
  href: string;
}

export interface PracticeCardItem {
  id: string;
  title: string;
  description?: string;
  category: 'previdenciario' | 'servidor';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface DifferentialItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}
