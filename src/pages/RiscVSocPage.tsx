import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageLayout, PageHeader } from "@/components/PageLayout";
import riscvImage from "@/assets/riscv-soc.jpg";

const archFeatures = [
  { title: "32-bit RISC-V CPU", description: "Custom RV32IMAC core with AI instruction extensions for embedded workloads." },
  { title: "Integrated AI Acceleration Engine", description: "On-chip neural network accelerator subsystem with INT8/FP16 support." },
  { title: "On-Chip Memory Architecture", description: "Configurable SRAM hierarchy with tightly-coupled memory for low-latency inference." },
  { title: "DMA Subsystem", description: "Multi-channel DMA engine for efficient data movement between accelerator and memory." },
  { title: "High-Speed Peripheral Bus", description: "AHB/APB bus architecture with configurable bandwidth allocation." },
  { title: "Embedded Connectivity Interfaces", description: "UART, SPI, I2C, GPIO, and CAN interfaces for sensor and actuator connectivity." },
  { title: "Low-Power Design Architecture", description: "Dynamic voltage/frequency scaling, clock gating, and power domain isolation." },
];

const targetApps = ["Edge AI devices", "Robotics systems", "Smart cameras", "Industrial automation", "IoT edge gateways"];

const RiscVSocPage = () => (
  <PageLayout>
    <Navbar />
    <PageHeader
      label="RISC-V SoC Platform"
      title={<>RISC-V Based SoC for <span className="text-gradient">Edge AI Computing</span></>}
      description="A custom RISC-V based System-on-Chip architecture designed for edge AI and embedded computing."
    />

    <div className="container py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="rounded-2xl overflow-hidden image-glow mb-16"
      >
        <img src={riscvImage} alt="RISC-V processor architecture visualization" className="w-full h-64 md:h-80 object-cover" />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
        <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-6">Architecture Features</p>
        <div className="grid md:grid-cols-2 gap-5">
          {archFeatures.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-xl border border-border bg-card/50 card-hover-glow"
            >
              <h3 className="text-sm font-semibold mb-2">{feat.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-6">Target Applications</p>
        <div className="flex flex-wrap gap-3">
          {targetApps.map((app) => (
            <span key={app} className="px-5 py-3 rounded-xl border border-border bg-card/50 text-sm font-medium text-foreground/80">
              {app}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
    <Footer />
  </PageLayout>
);

export default RiscVSocPage;