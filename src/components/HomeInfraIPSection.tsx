import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import infraImage from "@/assets/infra-ip.jpg";

const HomeInfraIPSection = () => (
  <section className="py-24 bg-muted/30">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">Infrastructure IP</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Reusable Silicon <span className="text-gradient">IP Blocks</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We develop production-grade semiconductor IP blocks — UART, SPI, I2C, DMA, memory controllers, timers, interrupt controllers, GPIO, and clock management units — designed for seamless integration into RISC-V based SoC platforms and custom silicon solutions.
          </p>
          <Link to="/infrastructure-ip" className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium">
            Explore IP portfolio <ArrowRight size={14} />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <img src={infraImage} alt="Semiconductor architecture and silicon IP blocks" className="w-full h-72 object-cover" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HomeInfraIPSection;
