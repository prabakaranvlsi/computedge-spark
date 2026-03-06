import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cpu, Microchip, Bot, Layers, ArrowRight } from "lucide-react";

const products = [
  { icon: Cpu, title: "Edge AI SoC Platform", description: "RISC-V based System-on-Chip optimized for embedded AI workloads and intelligent edge devices." },
  { icon: Microchip, title: "AI Acceleration Engine", description: "Custom ML accelerator architecture for high-throughput neural network inference on edge hardware." },
  { icon: Bot, title: "Robotics Controller Platform", description: "Integrated computing platform for autonomous systems, drones, and robotic applications." },
  { icon: Layers, title: "FPGA AI Acceleration Platform", description: "Reconfigurable platform for prototyping AI accelerators and edge AI solutions." },
];

const HomeProductsPreview = () => (
  <section className="py-24 relative">
    <div className="absolute inset-0 grid-bg opacity-10" />
    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="font-display text-sm text-primary tracking-widest uppercase mb-2">Products</p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
          Hardware Platforms for <span className="text-gradient">Edge Intelligence</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {products.map((product, i) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-lg border border-border bg-card hover:glow-border transition-all duration-300"
          >
            <product.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="font-display text-sm font-semibold mb-2">{product.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{product.description}</p>
          </motion.div>
        ))}
      </div>

      <Link to="/products" className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-display">
        View all products <ArrowRight size={14} />
      </Link>
    </div>
  </section>
);

export default HomeProductsPreview;
