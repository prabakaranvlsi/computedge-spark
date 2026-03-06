import { motion } from "framer-motion";
import { Cpu, Bot, Microchip } from "lucide-react";

const products = [
  {
    icon: Cpu,
    title: "Edge AI Devices",
    description: "Ultra-low-power inference accelerators designed for real-time AI workloads at the edge. From industrial sensors to autonomous drones.",
    specs: ["< 5W TDP", "INT8/FP16 support", "On-device learning"],
  },
  {
    icon: Bot,
    title: "Robotics Systems",
    description: "End-to-end autonomous robotics platforms with integrated perception, planning, and actuation — built for manufacturing and logistics.",
    specs: ["6-DOF manipulation", "LiDAR + vision fusion", "ROS 2 native"],
  },
  {
    icon: Microchip,
    title: "Custom AI Chips",
    description: "Application-specific silicon for neural network inference, optimized for your exact model architecture and latency requirements.",
    specs: ["7nm process", "Up to 256 TOPS", "Custom ISA"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProductsSection = () => (
  <section id="products" className="py-24 relative">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="font-display text-sm text-primary tracking-widest uppercase mb-2">Products</p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold">
          Hardware That <span className="text-gradient">Thinks</span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        {products.map((product) => (
          <motion.div
            key={product.title}
            variants={item}
            className="group rounded-lg border border-border bg-card p-8 hover:glow-border transition-all duration-300"
          >
            <product.icon className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
            <h3 className="font-display text-xl font-semibold mb-3">{product.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{product.description}</p>
            <div className="flex flex-wrap gap-2">
              {product.specs.map((spec) => (
                <span key={spec} className="text-xs font-display px-3 py-1 rounded-full border border-border text-muted-foreground">
                  {spec}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProductsSection;
