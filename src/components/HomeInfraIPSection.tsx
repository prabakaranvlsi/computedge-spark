import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import infraImage from "@/assets/infra-ip.jpg";

const ipBlocks = ["UART", "SPI", "I2C", "DMA", "Memory Controller", "Timer", "Interrupt Controller", "GPIO", "Clock Mgmt"];

const HomeInfraIPSection = () => (
  <section className="relative py-28 overflow-hidden">
    <div className="absolute inset-0 circuit-bg-fine opacity-15" />
    <div className="absolute inset-0 gradient-radial-accent" />

    <div className="container relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">Infrastructure IP</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Reusable Silicon <span className="text-gradient">IP Blocks</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Production-grade semiconductor IP blocks designed for seamless integration into RISC-V based SoC platforms and custom silicon solutions.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {ipBlocks.map((block) => (
              <span key={block} className="px-3 py-1.5 rounded-lg border border-border bg-card/50 text-xs font-mono font-medium text-muted-foreground">
                {block}
              </span>
            ))}
          </div>

          <Link to="/infrastructure-ip" className="group inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors">
            Explore IP portfolio <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden image-glow"
        >
          <img src={infraImage} alt="Semiconductor architecture and silicon IP blocks" className="w-full h-80 object-cover" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HomeInfraIPSection;