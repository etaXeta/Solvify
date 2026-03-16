import { ReactNode } from "react";
import { cn } from "../ui/utils";
import { Section } from "./Section";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "default" | "muted";
}

export function PageHeader({
  title,
  description,
  children,
  className,
  variant = "primary",
}: PageHeaderProps) {
  return (
    <Section variant={variant} spacing="lg" className={cn("text-center", className)}>
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
            {description}
          </p>
        )}
        {children && <div className="pt-4">{children}</div>}
      </div>
    </Section>
  );
}
