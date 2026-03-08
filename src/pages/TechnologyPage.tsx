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
      description="ComputEdge Technologies operates at the intersection of semiconductor engineering, AI systems research, and autonomous robotics — building next-generation hardware platforms for intelligent edge computing."
    />

    <div className="container py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="rounded-2xl overflow-hidden shadow-xl mb-16"
      >
        <img src={techImage} alt="Advanced semiconductor and AI technology" className="w-full h-64 md:h-80 object-cover" />
      </motion.div>

      <div className="space-y-6">
        {techAreas.map((area, i) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex gap-6 p-8 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all"
          >
            <area.icon className="w-8 h-8 text-primary shrink-0 mt-1" strokeWidth={1.5} />
            <div>
              <h3 className="text-base font-semibold mb-2">{area.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    <Footer />
  </PageLayout>
);

export default TechnologyPage;
