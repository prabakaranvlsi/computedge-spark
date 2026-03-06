import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-chip.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImage} alt="AI computing chip with glowing circuits" className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    </div>

    {/* Grid overlay */}
    <div className="absolute inset-0 grid-bg opacity-30" />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <p className="font-display text-sm text-primary tracking-widest uppercase mb-4">
          Intelligence at the Edge
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
          Building the Future of{" "}
          <span className="text-gradient">Edge AI</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
          We design custom AI chips, edge computing devices, and autonomous robotics systems that push the boundaries of on-device intelligence.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-display text-sm font-semibold hover:brightness-110 transition-all"
          >
            Explore Products <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground font-display text-sm font-semibold hover:border-primary/50 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
