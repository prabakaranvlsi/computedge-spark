import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageLayout, PageHeader } from "@/components/PageLayout";

const ipBlocks = [
  { name: "UART Controller", description: "Universal asynchronous receiver-transmitter for serial communication interfaces.", features: ["Configurable baud rate generator", "TX/RX FIFO buffers", "Interrupt-driven and polled modes", "RS-232/RS-485 compatible"] },
  { name: "SPI Controller", description: "Serial Peripheral Interface master/slave controller for high-speed synchronous communication.", features: ["Multi-slave support with chip select", "Configurable clock polarity and phase", "DMA-capable data transfers", "Up to 50 MHz operation"] },
  { name: "I2C Controller", description: "Inter-Integrated Circuit bus controller supporting multi-master and multi-slave configurations.", features: ["Standard, Fast, and Fast-Plus modes", "Multi-master arbitration", "Clock stretching support", "7-bit and 10-bit addressing"] },
  { name: "DMA Engine", description: "Direct Memory Access engine for high-throughput data transfer between peripherals and memory.", features: ["Multi-channel with priority arbitration", "Scatter-gather descriptor support", "Linked list transfer mode", "Per-channel interrupt generation"] },
  { name: "Memory Controller", description: "Configurable memory controller supporting SRAM, DDR, and on-chip memory interfaces with ECC.", features: ["SRAM and DDR interface support", "ECC with single-bit correction", "Low-power retention modes", "Configurable memory map"] },
  { name: "Timer Modules", description: "Precision timer and counter modules for scheduling, PWM generation, and watchdog supervision.", features: ["32-bit counters with prescaler", "PWM output generation", "Watchdog timer with reset", "Capture and compare modes"] },
  { name: "Interrupt Controller", description: "Programmable interrupt controller with priority management and vectored interrupt support.", features: ["Up to 256 interrupt sources", "Configurable priority levels", "Nested interrupt support", "RISC-V PLIC compatible"] },
  { name: "GPIO Controller", description: "General-purpose I/O controller with configurable pin direction and interrupt capabilities.", features: ["Per-pin direction control", "Configurable pull-up/pull-down", "Edge and level interrupt triggers", "Output drive strength control"] },
  { name: "Clock Management Unit", description: "Clock generation, distribution, and gating unit for power-efficient SoC clock management.", features: ["PLL and clock dividers", "Dynamic frequency scaling", "Per-module clock gating", "Glitch-free clock switching"] },
];

const InfrastructureIPPage = () => (
  <PageLayout>
    <Navbar />
    <PageHeader
      label="Infrastructure IP"
      title={<>Reusable Semiconductor <span className="text-gradient">IP Blocks</span></>}
      description="Production-grade infrastructure IP blocks designed for integration into RISC-V based SoC platforms and custom silicon solutions."
    />

    <div className="container py-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ipBlocks.map((block, i) => (
          <motion.div
            key={block.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-md transition-all"
          >
            <h3 className="text-base font-semibold mb-2">{block.name}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">{block.description}</p>
            <ul className="space-y-1.5">
              {block.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <ChevronRight className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
    <Footer />
  </PageLayout>
);

export default InfrastructureIPPage;
