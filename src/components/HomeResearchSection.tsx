import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const areas = [
  "AI hardware acceleration architectures",
  "Neural network optimization for edge computing",
  "RISC-V architecture enhancements",
  "Robotics computing systems",
  "Energy-efficient AI processing",
];

const HomeResearchSection = () => (
  <section className="py-24 relative">
    <div className="absolute inset-0 grid-bg opacity-10" />
    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <p className="font-display text-sm text-primary tracking-widest uppercase mb-2">Research & Innovation</p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
          Pushing the <span className="text-gradient">Boundaries</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Our research team works at the frontier of AI hardware design, translating academic breakthroughs into production silicon.
        </p>
        <ul className="space-y-3 mb-8">
          {areas.map((area) => (
            <li key={area} className="flex items-center gap-3 text-sm text-secondary-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {area}
            </li>
          ))}
        </ul>
        <Link to="/research" className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-display">
          Learn about our research <ArrowRight size={14} />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default HomeResearchSection;
