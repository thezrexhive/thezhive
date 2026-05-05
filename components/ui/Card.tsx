import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddingClasses = { sm: "p-4", md: "p-6", lg: "p-8" };

export function Card({ children, className, as: Tag = "div", hover = false, padding = "md" }: CardProps) {
  return (
    <Tag className={cn(
      "bg-white border border-neutral-200 rounded-xl shadow-card",
      hover && "transition-shadow duration-200 hover:shadow-card-hover cursor-pointer",
      paddingClasses[padding],
      className
    )}>
      {children}
    </Tag>
  );
}
