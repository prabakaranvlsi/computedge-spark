import { motion } from "framer-motion";
import { Settings, Cpu, Microchip, Layers, Bot, CircuitBoard, Server } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageLayout, PageHeader } from "@/components/PageLayout";
import servicesImage from "@/assets/services.jpg";

const services = [
  { icon: Settings, title: "Custom SoC Design", description: "Full-cycle System-on-Chip design from architecture specification and RTL development through synthesis, physical implementation, and tapeout.", industries: ["Semiconductor", "Edge AI", "Industrial Automation", "Consumer Electronics"] },
  { icon: Cpu, title: "RISC-V Processor Integration", description: "Integration and customization of RISC-V processor cores into SoC platforms — including ISA extension development, cache hierarchy design, and bus fabric integration.", industries: ["Semiconductor IP", "IoT", "Automotive", "Robotics"] },
  { icon: Microchip, title: "AI Hardware Accelerator Design", description: "Architecture and RTL design of custom neural network accelerators — including systolic arrays, sparse compute engines, and mixed-precision arithmetic units.", industries: ["AI/ML", "Autonomous Systems", "Medical Devices", "Defense"] },
  { icon: Layers, title: "FPGA Prototyping", description: "FPGA-based prototyping and validation of SoC architectures, AI accelerators, and peripheral IP — enabling pre-silicon verification.", industries: ["Semiconductor", "Research", "Aerospace", "Telecommunications"] },
  { icon: Bot, title: "Robotics System Development", description: "Design and integration of robotics computing platforms — combining real-time control, multi-sensor fusion, and AI-based perception.", industries: ["Robotics", "Logistics", "Agriculture", "Manufacturing"] },
  { icon: CircuitBoard, title: "Embedded Hardware Development", description: "Custom embedded hardware design including PCB layout, firmware development, and board bring-up for AI-enabled edge devices.", industries: ["IoT", "Smart Infrastructure", "Consumer Electronics", "Healthcare"] },
  { icon: Server, title: "Semiconductor IP Development", description: "Design and verification of reusable semiconductor IP blocks — including communication interfaces, memory controllers, DMA engines, and clock management units.", industries: ["Semiconductor IP", "ASIC Design", "SoC Integration", "Foundry Services"] },
];

const ServicesPage = () => (
  <PageLayout>
    <Navbar />
    <PageHeader
      label="Services"
      title={<>End-to-End Silicon <span className="text-gradient">Engineering</span></>}
      description="Comprehensive semiconductor engineering services — from SoC architecture and custom accelerator design to FPGA prototyping, robotics integration, and IP development."
    />

    <div className="container py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="rounded-2xl overflow-hidden image-glow mb-16"
      >
        <img src={servicesImage} alt="Engineers designing semiconductor circuits" className="w-full h-64 md:h-80 object-cover" />
      </motion.div>

      <div className="space-y-5">
        {services.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="p-8 rounded-xl border border-border bg-card/50 card-hover-glow"
          >
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <svc.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-base font-semibold mb-2">{svc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{svc.description}</p>
                <div className="flex flex-wrap gap-2">
                  {svc.industries.map((ind) => (
                    <span key={ind} className="text-xs font-medium px-3 py-1 rounded-lg border border-border bg-muted/50 text-muted-foreground">
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