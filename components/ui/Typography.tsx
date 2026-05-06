import { cn } from "@/lib/utils";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  gradient?: "pp" | "pb" | "py" | "full" | false;
}

export function Hero({ children, className, as: Tag = "h1", gradient = false }: TextProps) {
  return (
    <Tag className={cn(
      "text-hero font-bold tracking-tight text-neutral-900",
      gradient === "pp"   && "text-gradient-pp",
      gradient === "pb"   && "text-gradient-pb",
      gradient === "py"   && "text-gradient-py",
      gradient === "full" && "text-gradient-full",
      className
    )}>
      {children}
    </Tag>
  );
}

export function Title({ children, className, as: Tag = "h2", gradient = false }: TextProps) {
  return (
    <Tag className={cn(
      "text-title font-semibold tracking-tight text-neutral-900",
      gradient === "pp"   && "text-gradient-pp",
      gradient === "pb"   && "text-gradient-pb",
      gradient === "py"   && "text-gradient-py",
      gradient === "full" && "text-gradient-full",
      className
    )}>
      {children}
    </Tag>
  );
}

export function Heading({ children, className, as: Tag = "h3" }: TextProps) {
  return (
    <Tag className={cn(
      "text-heading font-semibold tracking-tight text-neutral-900",
      className
    )}>
      {children}
    </Tag>
  );
}

export function Body({
  children, className, as: Tag = "p",
  size = "base",
}: TextProps & { size?: "sm" | "base" | "lg" }) {
  return (
    <Tag className={cn(
      "text-neutral-600 leading-relaxed",
      size === "sm"   && "text-sm",
      size === "base" && "text-base",
      size === "lg"   && "text-lg",
      className
    )}>
      {children}
    </Tag>
  );
}

export function Label({ children, className, as: Tag = "span" }: TextProps) {
  return (
    <Tag className={cn(
      "text-sm font-medium text-neutral-700",
      className
    )}>
      {children}
    </Tag>
  );
}

export function Caption({ children, className, as: Tag = "span" }: TextProps) {
  return (
    <Tag className={cn(
      "text-xs text-neutral-500",
      className
    )}>
      {children}
    </Tag>
  );
}

export function Overline({ children, className, as: Tag = "p" }: TextProps) {
  return (
    <Tag className={cn(
      "text-xs font-semibold uppercase tracking-widest text-gradient-pp",
      className
    )}>
      {children}
    </Tag>
  );
}
