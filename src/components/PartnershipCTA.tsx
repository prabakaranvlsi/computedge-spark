import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const partnerAreas = [
  "AI hardware development",
  "Robotics platforms",
  "Semiconductor IP licensing",
  "Custom SoC development",
  "Edge AI products",
];

const PartnershipCTA = () => (
  <section className="py-24 relative">
    <div className="absolute inset-0 grid-bg opacity-10" />
    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl border border-primary/20 bg-card p-10 sm:p-16 text-center max-w-3xl mx-auto"
        style={{ boxShadow: "0 0 80px hsl(185 80% 50% / 0.06)" }}
      >
        <p className="font-display text-sm text-primary tracking-widest uppercase mb-3">Partnership</p>
        <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
          Let's Build the Future of <span className="text-gradient">Edge AI</span> Together
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
          We collaborate with companies, research institutions, and system integrators working across:
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {partnerAreas.map((area) => (
            <span key={area} className="px-4 py-2 rounded-full border border-border text-xs font-display text-secondary-foreground">
              {area}
            </span>
          ))}
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-primary text-primary-foreground font-display text-sm font-semibold hover:brightness-110 transition-all"
        >
          Start a Conversation <ArrowRight size={16} />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default PartnershipCTA;
