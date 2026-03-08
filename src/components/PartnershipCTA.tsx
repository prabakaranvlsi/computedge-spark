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
  <section className="relative py-36 overflow-hidden">
    <div className="absolute inset-0">
      <img src={ctaBg} alt="Futuristic AI hardware technology" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/88 to-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
    </div>

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <p className="text-body-sm font-semibold text-primary tracking-widest uppercase mb-4">Partnership Opportunities</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Building the Future of <span className="text-gradient">Edge AI</span> Together
        </h2>
        <p className="text-body-lg text-muted-foreground leading-relaxed mb-10">
          We collaborate with companies, research institutions, and system integrators working across:
        </p>
        <div className="flex flex-wrap gap-3 mb-12">
          {partnerAreas.map((area) => (
            <span key={area} className="px-5 py-2.5 rounded-lg border border-border/50 bg-card/40 backdrop-blur-sm text-body-sm font-medium text-foreground/80">
              {area}
            </span>
          ))}
        </div>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-lg bg-primary text-primary-foreground text-body-sm font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
        >
          Start a Conversation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default PartnershipCTA;
