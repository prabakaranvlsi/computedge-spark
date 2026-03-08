import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ctaBg from "@/assets/cta-bg.jpg";

const partnerAreas = [
  "AI hardware development",
  "Robotics platforms",
  "Semiconductor IP licensing",
  "Custom SoC development",
  "Edge AI products",
];

const PartnershipCTA = () => (
  <section className="relative py-32 overflow-hidden">
    <div className="absolute inset-0">
      <img src={ctaBg} alt="Futuristic AI hardware technology" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
    </div>
    <div className="absolute inset-0 circuit-bg opacity-20" />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">Partnership Opportunities</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
          Building the Future of <span className="text-gradient">Edge AI</span> Together
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          We collaborate with companies, research institutions, and system integrators working across:
        </p>
        <div className="flex flex-wrap gap-2 mb-10">
          {partnerAreas.map((area) => (
            <span key={area} className="px-4 py-2 rounded-lg border border-border/60 bg-card/30 backdrop-blur-sm text-xs font-medium text-foreground/80">
              {area}
            </span>
          ))}
        </div>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
        >
          Start a Conversation <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default PartnershipCTA;