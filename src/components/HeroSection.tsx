import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-chip.jpg";

const HeroSection = () => (
  <section className="relative min-h-[85vh] flex items-center pt-16 overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="AI computing chip with glowing circuits" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <p className="text-sm font-semibold text-blue-300 tracking-widest uppercase mb-4">
          Next-Generation Edge AI Hardware
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
          Building the Silicon That Powers{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Edge Intelligence</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-8 leading-relaxed">
          ComputEdge Technologies designs custom AI chips, RISC-V processors, robotics computing platforms, and AI accelerators — engineered for intelligent edge devices that operate without cloud dependency.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all shadow-md"
          >
            Explore Products <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-all"
          >
            Partner With Us
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
