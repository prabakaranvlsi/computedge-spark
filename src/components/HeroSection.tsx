import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-chip.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="AI computing chip with glowing circuits" className="w-full h-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
    </div>
    <div className="absolute inset-0 grid-bg opacity-20" />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <p className="font-display text-sm text-primary tracking-widest uppercase mb-4">
          Next-Generation Edge AI Hardware
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
          Building the Silicon That Powers{" "}
          <span className="text-gradient">Edge Intelligence</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          ComputEdge Technologies designs custom AI chips, RISC-V processors, robotics computing platforms, and AI accelerators — engineered for intelligent edge devices that operate without cloud dependency.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-display text-sm font-semibold hover:brightness-110 transition-all"
          >
            Explore Products <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground font-display text-sm font-semibold hover:border-primary/50 transition-all"
          >
            Partner With Us
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
