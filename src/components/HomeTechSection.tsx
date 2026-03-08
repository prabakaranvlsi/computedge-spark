import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cpu, Microchip, Bot, Layers, Zap, CircuitBoard, BatteryCharging } from "lucide-react";
import { ArrowRight } from "lucide-react";

const techAreas = [
  { icon: Cpu, title: "Edge AI Hardware Acceleration", description: "Purpose-built compute architectures for real-time AI inference at the network edge." },
  { icon: CircuitBoard, title: "RISC-V Processor Architecture", description: "Custom RISC-V cores with AI instruction extensions for embedded intelligence." },
  { icon: Microchip, title: "Custom ML Accelerators", description: "Application-specific silicon optimized for neural network inference workloads." },
  { icon: Bot, title: "Robotics Computing Platforms", description: "Integrated perception, planning, and control hardware for autonomous systems." },
  { icon: Layers, title: "FPGA AI Prototyping", description: "Reconfigurable platforms for rapid AI accelerator architecture exploration." },
  { icon: BatteryCharging, title: "Low-Power Semiconductor Design", description: "Energy-efficient silicon architectures for battery-operated intelligent devices." },
];

const HomeTechSection = () => (
  <section className="py-24 bg-muted/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">Technology Focus</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Core Technology <span className="text-gradient">Domains</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          We operate at the intersection of semiconductor engineering, AI systems research, and robotics — building hardware platforms that bring intelligence to the edge.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {techAreas.map((area, i) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="p-6 rounded-xl border border-border bg-background hover:border-primary/30 hover:shadow-md transition-all"
          >
            <area.icon className="w-7 h-7 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="text-sm font-semibold mb-2">{area.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{area.description}</p>
          </motion.div>
        ))}
      </div>

      <Link to="/technology" className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium">
        Explore our technology <ArrowRight size={14} />
      </Link>
    </div>
  </section>
);

export default HomeTechSection;
