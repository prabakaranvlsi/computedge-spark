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
  <section className="relative py-32 overflow-hidden">
    <div className="absolute inset-0 section-glow-top" />

    <div className="container relative">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden image-glow order-2 lg:order-1"
        >
          <img src={researchImage} alt="AI research and neural network visualization" className="w-full h-96 object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <p className="text-body-sm font-semibold text-primary tracking-widest uppercase mb-4">Research & Innovation</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Pushing the <span className="text-gradient">Boundaries</span>
          </h2>
          <p className="text-body-lg text-muted-foreground leading-relaxed mb-10">
            Our research team works at the frontier of AI hardware design, translating academic breakthroughs into production silicon.
          </p>
          <ul className="space-y-4 mb-10">
            {areas.map((area) => (
              <li key={area} className="flex items-center gap-3 text-body text-foreground/80">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0 shadow-[0_0_8px_hsl(217_91%_50%/0.4)]" />
                {area}
              </li>
            ))}
          </ul>
          <Link to="/research" className="group inline-flex items-center gap-2.5 text-body-sm text-primary hover:text-primary/80 font-semibold transition-colors">
            Learn about our research <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HomeResearchSection;
