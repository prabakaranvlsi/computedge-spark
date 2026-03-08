import { motion } from "framer-motion";
import { Cpu, CircuitBoard, Microchip, Bot, Layers, BatteryCharging, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageLayout, PageHeader } from "@/components/PageLayout";
import techImage from "@/assets/tech-focus.jpg";

const techAreas = [
  { icon: Cpu, title: "Edge AI Hardware Acceleration", description: "Purpose-built compute architectures optimized for real-time neural network inference at the network edge." },
  { icon: CircuitBoard, title: "RISC-V Processor Architecture", description: "Custom RISC-V processor cores with domain-specific instruction extensions for AI, signal processing, and control applications." },
  { icon: Microchip, title: "Custom Machine Learning Accelerators", description: "Application-specific silicon optimized for convolutional, transformer, and recurrent neural network architectures." },
  { icon: Bot, title: "Robotics Computing Platforms", description: "Integrated hardware platforms combining real-time motor control, multi-sensor fusion, and AI-based perception and planning." },
  { icon: Layers, title: "FPGA-Based AI Prototyping", description: "Reconfigurable hardware platforms for rapid architecture exploration, pre-silicon verification, and AI accelerator development." },
  { icon: BatteryCharging, title: "Low-Power Semiconductor Design", description: "Energy-efficient silicon design methodologies including dynamic voltage/frequency scaling, clock gating, and power domain isolation." },
  { icon: Zap, title: "Embedded AI Systems", description: "Complete embedded AI system design from model compilation and quantization through firmware integration and deployment toolchains." },
];

const TechnologyPage = () => (
  <PageLayout>
    <Navbar />
    <PageHeader
      label="Technology"
      title={<>Core Technology <span className="text-gradient">Domains</span></>}
      description="ComputEdge Technologies operates at the intersection of semiconductor engineering, AI systems research, and autonomous robotics."
    />

    <div className="container py-28">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="rounded-2xl overflow-hidden image-glow mb-20"
      >
        <img src={techImage} alt="Advanced semiconductor and AI technology" className="w-full h-72 md:h-96 object-cover" />
      </motion.div>

      <div className="space-y-6">
        {techAreas.map((area, i) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex gap-7 p-9 rounded-2xl border border-border bg-card card-hover-glow"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center shrink-0">
              <area.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">{area.title}</h3>
              <p className="text-body text-muted-foreground leading-relaxed">{area.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    <Footer />
  </PageLayout>
);

export default TechnologyPage;
