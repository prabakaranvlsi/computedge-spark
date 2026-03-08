import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cpu, Microchip, Bot, Layers, CircuitBoard, BatteryCharging, ArrowRight } from "lucide-react";
import techImage from "@/assets/tech-focus.jpg";

const techAreas = [
  { icon: Cpu, title: "Edge AI Hardware Acceleration", description: "Purpose-built compute architectures for real-time AI inference at the network edge." },
  { icon: CircuitBoard, title: "RISC-V Processor Architecture", description: "Custom RISC-V cores with AI instruction extensions for embedded intelligence." },
  { icon: Microchip, title: "Custom ML Accelerators", description: "Application-specific silicon optimized for neural network inference workloads." },
  { icon: Bot, title: "Robotics Computing Platforms", description: "Integrated perception, planning, and control hardware for autonomous systems." },
  { icon: Layers, title: "FPGA AI Prototyping", description: "Reconfigurable platforms for rapid AI accelerator architecture exploration." },
  { icon: BatteryCharging, title: "Low-Power Semiconductor Design", description: "Energy-efficient silicon architectures for battery-operated intelligent devices." },
];

const HomeTechSection = () => (
  <section className="relative py-28 md:py-36 overflow-hidden section-alt section-separator">
    <div className="absolute inset-0 circuit-bg opacity-15" />
    <div className="absolute inset-0 gradient-radial" />

    <div className="container relative">
      <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-body-sm font-semibold text-primary tracking-widest uppercase mb-4">Technology Focus</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Core Technology <span className="text-gradient">Domains</span>
          </h2>
          <p className="text-body-lg text-muted-foreground leading-relaxed">
            We operate at the intersection of semiconductor engineering, AI systems research, and robotics — building hardware platforms that bring intelligence to the edge.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden image-glow"
        >
          <img src={techImage} alt="Advanced AI semiconductor technology" className="w-full h-72 lg:h-96 object-cover" />
        </motion.div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {techAreas.map((area, i) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group p-7 rounded-2xl border border-border bg-card card-hover-glow"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/12 transition-colors">
              <area.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-base font-semibold mb-3">{area.title}</h3>
            <p className="text-body-sm text-muted-foreground leading-relaxed">{area.description}</p>
          </motion.div>
        ))}
      </div>

      <Link to="/technology" className="group inline-flex items-center gap-2.5 text-body-sm text-primary hover:text-primary/80 font-semibold transition-colors">
        Explore our technology <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </section>
);

export default HomeTechSection;
