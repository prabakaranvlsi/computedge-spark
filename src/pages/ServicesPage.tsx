import { motion } from "framer-motion";
import { Settings, Cpu, Microchip, Layers, Bot, CircuitBoard, Server } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageLayout, PageHeader } from "@/components/PageLayout";

const services = [
  {
    icon: Settings,
    title: "Custom SoC Design",
    description: "Full-cycle System-on-Chip design from architecture specification and RTL development through synthesis, physical implementation, and tapeout. We design application-specific SoCs for edge AI, robotics, and embedded computing.",
    industries: ["Semiconductor", "Edge AI", "Industrial Automation", "Consumer Electronics"],
  },
  {
    icon: Cpu,
    title: "RISC-V Processor Integration",
    description: "Integration and customization of RISC-V processor cores into SoC platforms — including ISA extension development, cache hierarchy design, and bus fabric integration for embedded and AI workloads.",
    industries: ["Semiconductor IP", "IoT", "Automotive", "Robotics"],
  },
  {
    icon: Microchip,
    title: "AI Hardware Accelerator Design",
    description: "Architecture and RTL design of custom neural network accelerators — including systolic arrays, sparse compute engines, and mixed-precision arithmetic units optimized for edge inference workloads.",
    industries: ["AI/ML", "Autonomous Systems", "Medical Devices", "Defense"],
  },
  {
    icon: Layers,
    title: "FPGA Prototyping",
    description: "FPGA-based prototyping and validation of SoC architectures, AI accelerators, and peripheral IP — enabling pre-silicon verification and hardware-software co-development.",
    industries: ["Semiconductor", "Research", "Aerospace", "Telecommunications"],
  },
  {
    icon: Bot,
    title: "Robotics System Development",
    description: "Design and integration of robotics computing platforms — combining real-time control, multi-sensor fusion, and AI-based perception and planning for autonomous mobile robots, drones, and industrial manipulators.",
    industries: ["Robotics", "Logistics", "Agriculture", "Manufacturing"],
  },
  {
    icon: CircuitBoard,
    title: "Embedded Hardware Development",
    description: "Custom embedded hardware design including PCB layout, firmware development, and board bring-up for AI-enabled edge devices, sensor systems, and IoT platforms.",
    industries: ["IoT", "Smart Infrastructure", "Consumer Electronics", "Healthcare"],
  },
  {
    icon: Server,
    title: "Semiconductor IP Development",
    description: "Design and verification of reusable semiconductor IP blocks — including communication interfaces, memory controllers, DMA engines, and clock management units for SoC integration.",
    industries: ["Semiconductor IP", "ASIC Design", "SoC Integration", "Foundry Services"],
  },
];

const ServicesPage = () => (
  <PageLayout>
    <Navbar />
    <PageHeader
      label="Services"
      title={<>End-to-End Silicon <span className="text-gradient">Engineering</span></>}
      description="ComputEdge Technologies offers comprehensive semiconductor engineering services — from SoC architecture and custom accelerator design to FPGA prototyping, robotics integration, and IP development."
    />

    <div className="container pb-24">
      <div className="space-y-6">
        {services.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="p-8 rounded-lg border border-border bg-card hover:glow-border transition-all duration-300"
          >
            <div className="flex gap-6">
              <svc.icon className="w-8 h-8 text-primary shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="font-display text-base font-semibold mb-2">{svc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{svc.description}</p>
                <div className="flex flex-wrap gap-2">
                  {svc.industries.map((ind) => (
                    <span key={ind} className="text-xs font-display px-3 py-1 rounded-full border border-border text-muted-foreground">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    <Footer />
  </PageLayout>
);

export default ServicesPage;
