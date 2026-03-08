import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cpu, Microchip, Bot, Layers, ArrowRight } from "lucide-react";
import productSoc from "@/assets/product-soc.jpg";
import productAi from "@/assets/product-ai-engine.jpg";
import productRobotics from "@/assets/product-robotics.jpg";
import productFpga from "@/assets/product-fpga.jpg";

const products = [
  { icon: Cpu, image: productSoc, title: "Edge AI SoC Platform", description: "RISC-V based System-on-Chip optimized for embedded AI workloads and intelligent edge devices.", slug: "edge-ai-soc-platform" },
  { icon: Microchip, image: productAi, title: "AI Acceleration Engine", description: "Custom ML accelerator architecture for high-throughput neural network inference on edge hardware.", slug: "ai-acceleration-engine" },
  { icon: Bot, image: productRobotics, title: "Robotics Controller Platform", description: "Integrated computing platform for autonomous systems, drones, and robotic applications.", slug: "robotics-controller-platform" },
  { icon: Layers, image: productFpga, title: "FPGA AI Acceleration Platform", description: "Reconfigurable platform for prototyping AI accelerators and edge AI solutions.", slug: "fpga-ai-acceleration-platform" },
];

const HomeProductsPreview = () => (
  <section className="relative py-28 overflow-hidden">
    <div className="absolute inset-0 section-glow-top" />

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">Products</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Hardware Platforms for <span className="text-gradient">Edge Intelligence</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          Purpose-built silicon and hardware platforms for AI inference, autonomous systems, and semiconductor development.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        {products.map((product, i) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-xl border border-border bg-card/50 overflow-hidden card-hover-glow"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="w-9 h-9 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                  <product.icon className="w-4.5 h-4.5 text-primary" strokeWidth={1.5} />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-sm font-semibold mb-2 group-hover:text-primary transition-colors">{product.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{product.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <Link to="/products" className="group inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors">
        View all products <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </section>
);

export default HomeProductsPreview;