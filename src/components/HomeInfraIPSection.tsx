import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import infraImage from "@/assets/infra-ip.jpg";

const ipBlocks = ["UART", "SPI", "I2C", "DMA", "Memory Controller", "Timer", "Interrupt Controller", "GPIO", "Clock Mgmt"];

const HomeInfraIPSection = () => (
  <section className="relative py-32 overflow-hidden">
    <div className="absolute inset-0 circuit-bg-fine opacity-10" />
    <div className="absolute inset-0 gradient-radial-accent" />

    <div className="container relative">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-body-sm font-semibold text-primary tracking-widest uppercase mb-4">Infrastructure IP</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Reusable Silicon <span className="text-gradient">IP Blocks</span>
          </h2>
          <p className="text-body-lg text-muted-foreground leading-relaxed mb-10">
            Production-grade semiconductor IP blocks designed for seamless integration into RISC-V based SoC platforms and custom silicon solutions.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {ipBlocks.map((block) => (
              <span key={block} className="px-4 py-2 rounded-lg border border-border bg-card text-body-sm font-mono font-medium text-muted-foreground">
                {block}
              </span>
            ))}
          </div>

          <Link to="/infrastructure-ip" className="group inline-flex items-center gap-2.5 text-body-sm text-primary hover:text-primary/80 font-semibold transition-colors">
            Explore IP portfolio <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden image-glow"
        >
          <img src={infraImage} alt="Semiconductor architecture and silicon IP blocks" className="w-full h-96 object-cover" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HomeInfraIPSection;
