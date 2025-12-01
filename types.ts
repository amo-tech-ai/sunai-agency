import { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  weeks: string;
}

export interface Metric {
  value: string;
  label: string;
  suffix?: string;
  trend?: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export type PageName = 'home' | 'services' | 'process' | 'projects' | 'whatsapp' | 'ai-features' | 'about' | 'contact';

export interface NavigationProps {
  onNavigate: (page: PageName, hash?: string) => void;
  currentPage?: PageName;
}