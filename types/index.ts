import type { LucideIcon } from "lucide-react";

export type UserPlan = "free" | "pro" | "enterprise";

export interface UserProfile {
  id: string;
  email: string;
  display_name: string | null;
  avatar_url: string | null;
  plan: UserPlan;
  onboarding_completed: boolean;
  onboarding_step: number;
  created_at: string;
  updated_at: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SidebarItem {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string | number;
}

export interface OnboardingStep {
  step: number;
  title: string;
  description: string;
  href: string;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: UserPlan;
  name: string;
  description: string;
  price: number;
  priceSuffix: string;
  features: PricingFeature[];
  highlighted: boolean;
  ctaLabel: string;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  size?: "sm" | "md" | "lg" | "full";
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: React.ElementType;
  spacing?: "sm" | "md" | "lg" | "xl";
}

export type ButtonVariant = "primary" | "secondary" | "ghost" | "gradient" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
}

// Input
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helperText?: string;
  error?: string;
  success?: string;
  size?: "sm" | "md" | "lg";
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}

// Card
export type CardVariant = "default" | "elevated" | "bordered" | "gradient";
export interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  variant?: CardVariant;
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
  animate?: boolean;
}

// Divider
export interface DividerProps {
  orientation?: "horizontal" | "vertical";
  label?: string;
  className?: string;
  decorative?: boolean;
}
