import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageHeaderProps {
  label: string;
  title: ReactNode;
  description?: string;
}

export const PageHeader = ({ label, title, description }: PageHeaderProps) => (
  <div className="relative overflow-hidden">
    <div className="absolute inset-0 circuit-bg opacity-15" />
    <div className="absolute inset-0 hero-gradient" />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative pt-32 pb-20 border-b border-border/50"
    >
      <div className="container max-w-4xl">
        <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">{label}</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-6 tracking-tight">{title}</h1>
        {description && (
          <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl">{description}</p>
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