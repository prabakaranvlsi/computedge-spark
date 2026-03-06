import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageHeaderProps {
  label: string;
  title: ReactNode;
  description?: string;
}

export const PageHeader = ({ label, title, description }: PageHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="pt-32 pb-16"
  >
    <div className="container max-w-4xl">
      <p className="font-display text-sm text-primary tracking-widest uppercase mb-3">{label}</p>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">{title}</h1>
      {description && (
        <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl">{description}</p>
      )}
    </div>
  </motion.div>
);

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => (
  <div className="min-h-screen bg-background">{children}</div>
);
