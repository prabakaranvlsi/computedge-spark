import { motion } from "framer-motion";
import { Cpu, CircuitBoard, Microchip, Bot, Layers, BatteryCharging, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageLayout, PageHeader } from "@/components/PageLayout";

const techAreas = [
  {
    icon: Cpu,
    title: "Edge AI Hardware Acceleration",
    description: "Purpose-built compute architectures optimized for real-time neural network inference at the network edge. Our accelerators deliver high throughput within strict power and latency constraints, enabling AI workloads on battery-operated and thermally constrained devices.",
  },
  {
    icon: CircuitBoard,
    title: "RISC-V Processor Architecture",
    description: "Custom RISC-V processor cores with domain-specific instruction extensions for AI, signal processing, and control applications. Our cores are designed for deterministic real-time performance with minimal area and power overhead.",
  },
  {
    icon: Microchip,
    title: "Custom Machine Learning Accelerators",
    description: "Application-specific silicon optimized for convolutional, transformer, and recurrent neural network architectures. We design systolic array compute fabrics with hardware-level support for sparse operations, mixed-precision arithmetic, and operator fusion.",
  },
  {
    icon: Bot,
    title: "Robotics Computing Platforms",
    description: "Integrated hardware platforms combining real-time motor control, multi-sensor fusion, and AI-based perception and planning — designed for autonomous mobile robots, drones, manipulators, and industrial automation systems.",
  },
  {
    icon: Layers,
    title: "FPGA-Based AI Prototyping",
    description: "Reconfigurable hardware platforms for rapid architecture exploration, pre-silicon verification, and AI accelerator development. Our FPGA platforms include pre-built soft IP libraries and hardware-in-the-loop simulation support.",
  },
  {
    icon: BatteryCharging,
    title: "Low-Power Semiconductor Design",
    description: "Energy-efficient silicon design methodologies including dynamic voltage/frequency scaling, clock gating, power domain isolation, and retention-mode memories — enabling always-on AI inference in sub-5W power envelopes.",
  },
  {
    icon: Zap,
    title: "Embedded AI Systems",
    description: "Complete embedded AI system design from model compilation and quantization through firmware integration and deployment toolchains — bridging the gap between AI research and production edge hardware.",
  },
];

const TechnologyPage = () => (
  <PageLayout>
    <Navbar />
    <PageHeader
      label="Technology"
      title={<>Core Technology <span className="text-gradient">Domains</span></>}
      description="ComputEdge Technologies operates at the intersection of semiconductor engineering, AI systems research, and autonomous robotics — building next-generation hardware platforms for intelligent edge computing."
    />

    <div className="container pb-24">
      <div className="space-y-6">
        {techAreas.map((area, i) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex gap-6 p-8 rounded-lg border border-border bg-card hover:border-primary/30 transition-all"
          >
            <area.icon className="w-8 h-8 text-primary shrink-0 mt-1" strokeWidth={1.5} />
            <div>
              <h3 className="font-display text-base font-semibold mb-2">{area.title}</h3>
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
