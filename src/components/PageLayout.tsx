import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageHeaderProps {
  label: string;
  title: ReactNode;
  description?: string;
}

export const PageHeader = ({ label, title, description }: PageHeaderProps) => (
  <div className="relative overflow-hidden">
    <div className="absolute inset-0 circuit-bg opacity-10" />
    <div className="absolute inset-0 hero-gradient" />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative pt-36 pb-24 border-b border-border/40"
    >
      <div className="container max-w-4xl">
        <p className="text-body-sm font-semibold text-primary tracking-widest uppercase mb-5">{label}</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-7 tracking-tight">{title}</h1>
        {description && (
          <p className="text-muted-foreground leading-relaxed text-body-lg max-w-3xl">{description}</p>
        )}
      </div>
    </motion.div>
  </div>
);

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => (
  <div className="min-h-screen bg-background">{children}</div>
);
