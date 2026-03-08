import { motion } from "framer-motion";
import { Cpu, Microchip, Bot, Layers, ChevronRight } from "lucide-react";
import productSoc from "@/assets/product-soc.jpg";
import productAi from "@/assets/product-ai-engine.jpg";
import productRobotics from "@/assets/product-robotics.jpg";
import productFpga from "@/assets/product-fpga.jpg";

const products = [
  {
    icon: Cpu,
    image: productSoc,
    slug: "edge-ai-soc-platform",
    title: "Edge AI SoC Platform",
    subtitle: "RISC-V Based System on Chip",
    description: "A custom RISC-V based System on Chip optimized for edge AI workloads and embedded systems.",
    features: ["Multi-core RISC-V processor with custom AI extensions", "Integrated neural network accelerator subsystem", "Hardware-level security with secure boot and encrypted memory", "On-chip SRAM with configurable memory hierarchy", "Low-power design with dynamic voltage and frequency scaling", "Support for INT8, FP16 and mixed-precision inference"],
    applications: ["Industrial automation controllers", "Smart IoT gateway devices", "Autonomous sensor nodes", "Medical edge devices"],
    benefits: ["Sub-5W total platform power for always-on AI inference", "Fully programmable RISC-V cores for flexible workload mapping", "Silicon-proven IP blocks reduce time-to-tapeout", "End-to-end toolchain from model compilation to deployment"],
  },
  {
    icon: Microchip,
    image: productAi,
    slug: "ai-acceleration-engine",
    title: "AI Acceleration Engine",
    subtitle: "Custom ML Accelerator Architecture",
    description: "A purpose-built machine learning accelerator architecture engineered for high-throughput neural network inference at the edge.",
    features: ["Systolic array-based compute fabric with configurable dataflow", "Support for sparse and dense tensor operations", "Dedicated activation, pooling, and normalization units", "Multi-model concurrent execution support", "Hardware-optimized memory access patterns for bandwidth efficiency", "Compiler-driven operator fusion and scheduling"],
    applications: ["Computer vision inference pipelines", "Natural language processing at the edge", "Predictive maintenance systems", "Real-time anomaly detection"],
    benefits: ["Up to 256 TOPS peak performance within power envelope", "Architecture-aware model optimization for maximum utilization", "Reduced external memory bandwidth requirements", "Seamless integration with RISC-V host processors"],
  },
  {
    icon: Bot,
    image: productRobotics,
    slug: "robotics-controller-platform",
    title: "Robotics Controller Platform",
    subtitle: "Autonomous Systems Control Unit",
    description: "An integrated robotics control platform purpose-built for autonomous systems, drones, and industrial robotic applications.",
    features: ["Real-time motor control with sub-microsecond loop latency", "Multi-sensor fusion engine (LiDAR, IMU, camera, ToF)", "Integrated AI co-processor for perception and planning", "ROS 2 native hardware abstraction layer", "Redundant safety controllers with watchdog supervision", "CAN-FD, EtherCAT, and SPI sensor interfaces"],
    applications: ["Autonomous mobile robots (AMRs)", "Industrial robotic arms and manipulators", "Drone flight controllers with AI navigation", "Warehouse and logistics automation"],
    benefits: ["Unified compute for control and AI eliminates multi-board architectures", "Deterministic real-time performance for safety-critical applications", "Reduced BOM cost through hardware consolidation", "Field-updatable AI models via secure OTA pipeline"],
  },
  {
    icon: Layers,
    image: productFpga,
    title: "FPGA AI Acceleration Platform",
    subtitle: "Reconfigurable AI Prototyping System",
    description: "An FPGA-based platform for rapid prototyping, validation, and deployment of AI accelerator architectures.",
    features: ["High-density FPGA fabric with dedicated DSP and memory blocks", "Pre-built AI accelerator soft IP library", "Hardware-in-the-loop simulation support", "High-speed interfaces (PCIe Gen4, DDR4/5, Ethernet)", "Integrated logic analyzer and performance profiling tools", "Compatible with industry-standard RTL and HLS toolchains"],
    applications: ["AI accelerator architecture exploration", "Pre-silicon SoC emulation and verification", "Edge AI application prototyping", "Academic and research AI hardware development"],
    benefits: ["Accelerate ASIC design cycles with FPGA-first validation", "Reconfigurable fabric enables rapid design iteration", "Production-representative performance benchmarking", "Seamless transition path from FPGA prototype to custom silicon"],
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const ProductsSection = () => (
  <section id="products" className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 gradient-radial" />

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 max-w-3xl"
      >
        <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">Products</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Hardware Platforms for <span className="text-gradient">Edge Intelligence</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Purpose-built silicon and hardware platforms engineered for AI inference, autonomous systems, and semiconductor IP development.
        </p>
      </motion.div>

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-8">
        {products.map((product) => (
          <motion.div
            key={product.title}
            variants={fadeUp}
            className="rounded-xl border border-border bg-card/50 overflow-hidden card-hover-glow"
          >
            <div className="grid md:grid-cols-[300px_1fr]">
              <div className="h-48 md:h-full relative overflow-hidden">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50 hidden md:block" />
              </div>
              <div>
                <div className="p-8 pb-0">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <product.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{product.title}</h3>
                      <p className="text-xs font-semibold text-primary tracking-wider uppercase mt-1">{product.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">{product.description}</p>
                </div>

                <div className="grid sm:grid-cols-3 gap-px bg-border/50">
                  {[
                    { label: "Key Features", items: product.features },
                    { label: "Target Applications", items: product.applications },
                    { label: "Benefits", items: product.benefits },
                  ].map((section) => (
                    <div key={section.label} className="bg-card/80 p-6">
                      <h4 className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">{section.label}</h4>
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                            <ChevronRight className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProductsSection;