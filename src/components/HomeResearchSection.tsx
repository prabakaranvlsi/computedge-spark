import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import researchImage from "@/assets/research.jpg";

const areas = [
  "AI hardware acceleration architectures",
  "Neural network optimization for edge computing",
  "RISC-V architecture enhancements",
  "Robotics computing systems",
  "Energy-efficient AI processing",
];

const HomeResearchSection = () => (
  <section className="relative py-28 overflow-hidden">
    <div className="absolute inset-0 section-glow-top" />

    <div className="container relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden image-glow order-2 lg:order-1"
        >
          <img src={researchImage} alt="AI research and neural network visualization" className="w-full h-80 object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">Research & Innovation</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Pushing the <span className="text-gradient">Boundaries</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our research team works at the frontier of AI hardware design, translating academic breakthroughs into production silicon.
          </p>
          <ul className="space-y-3 mb-8">
            {areas.map((area) => (
              <li key={area} className="flex items-center gap-3 text-sm text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_8px_hsl(210_100%_55%/0.5)]" />
                {area}
              </li>
            ))}
          </ul>
          <Link to="/research" className="group inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors">
            Learn about our research <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HomeResearchSection;