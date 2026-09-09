// ─── Domain Types ────────────────────────────────────────────────────────────

export type Platform = 'revit' | 'autocad' | 'multi';
export type ProductStatus = 'available' | 'coming-soon';

export interface Feature {
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CompatibilityVersion {
  label: string;
  versions: string[];
}

export interface Compatibility {
  software: CompatibilityVersion[];
  os: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  platform: Platform;
  category: string;
  tagline: string;
  description: string;
  badge?: string;
  status: ProductStatus;
  features: Feature[];
  howItWorks: Step[];
  compatibility: Compatibility;
  faqs: FAQ[];
}

// ─── Solution Types ───────────────────────────────────────────────────────────

export interface Solution {
  id: string;
  title: string;
  description: string;
  audience: string;
  icon: string;
}

// ─── Form Types ───────────────────────────────────────────────────────────────

export interface ContactFormValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  product: string;
  message: string;
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
