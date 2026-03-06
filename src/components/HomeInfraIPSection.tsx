import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Server } from "lucide-react";

const HomeInfraIPSection = () => (
  <section className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <p className="font-display text-sm text-primary tracking-widest uppercase mb-2">Infrastructure IP</p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
          Reusable Silicon <span className="text-gradient">IP Blocks</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We develop production-grade semiconductor IP blocks — UART, SPI, I2C, DMA, memory controllers, timers, interrupt controllers, GPIO, and clock management units — designed for seamless integration into RISC-V based SoC platforms and custom silicon solutions.
        </p>
        <Link to="/infrastructure-ip" className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-display">
          Explore IP portfolio <ArrowRight size={14} />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default HomeInfraIPSection;
