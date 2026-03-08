import { motion } from "framer-motion";
import { ArrowRight, Cpu, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-chip.jpg";

const stats = [
  { value: "<5W", label: "Platform Power" },
  { value: "256", label: "TOPS Peak" },
  { value: "RISC-V", label: "Architecture" },
  { value: "7nm", label: "Process Node" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background layers */}
    <div className="absolute inset-0">
      <img src={heroImage} alt="AI computing chip with glowing circuits" className="w-full h-full object-cover scale-105" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
      <div className="absolute inset-0 hero-gradient" />
    </div>

    {/* Circuit overlay */}
    <div className="absolute inset-0 circuit-bg opacity-30" />

    <div className="container relative z-10 pt-24 pb-16">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-xs font-semibold text-primary tracking-wide uppercase">Next-Generation Edge AI Hardware</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] mb-6 tracking-tight">
            Building the Silicon
            <br />
            That Powers{" "}
            <span className="text-gradient-hero">Edge Intelligence</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            ComputEdge Technologies designs custom AI chips, RISC-V processors, robotics computing platforms, and AI accelerators — engineered for intelligent edge devices.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              Explore Products <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground text-sm font-semibold hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              Partner With Us
            </Link>
          </div>

          {/* Quick features */}
          <div className="flex flex-wrap gap-6">
            {[
              { icon: Cpu, text: "Custom RISC-V Cores" },
              { icon: Zap, text: "AI Accelerators" },
              { icon: Shield, text: "Hardware Security" },
            ].map((feat) => (
              <div key={feat.text} className="flex items-center gap-2 text-xs text-muted-foreground">
                <feat.icon className="w-3.5 h-3.5 text-primary" />
                {feat.text}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="hidden lg:block"
        >
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="glass rounded-xl p-6 card-hover-glow"
              >
                <p className="text-3xl font-black text-primary stat-glow mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>

    {/* Bottom gradient fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;