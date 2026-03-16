import { ReactNode } from "react";
import { cn } from "../ui/utils";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  variant?: "default" | "muted" | "primary" | "accent" | "none";
  spacing?: "default" | "sm" | "lg" | "none";
  containerVariant?: "default" | "narrow" | "wide" | "full";
}

export function Section({
  children,
  className,
  containerClassName,
  id,
  variant = "default",
  spacing = "default",
  containerVariant = "default",
}: SectionProps) {
  const variants = {
    default: "bg-background text-foreground",
    muted: "bg-muted text-muted-foreground",
    primary: "bg-primary text-primary-foreground",
    accent: "bg-accent text-accent-foreground",
    none: "",
  };

  const spacings = {
    default: "py-16 md:py-24",
    sm: "py-8 md:py-12",
    lg: "py-24 md:py-32",
    none: "",
  };

  return (
    <section id={id} className={cn(variants[variant], spacings[spacing], className)}>
      <Container variant={containerVariant} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
