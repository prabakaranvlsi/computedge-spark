import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import servicesImage from "@/assets/services.jpg";

const services = [
  "Custom SoC Design",
  "RISC-V Integration",
  "AI Accelerator Design",
  "FPGA Prototyping",
  "Robotics Development",
  "Semiconductor IP",
];

const HomeServicesPreview = () => (
  <section className="relative py-28 overflow-hidden">
    <div className="absolute inset-0 circuit-bg opacity-15" />
    <div className="absolute inset-0 gradient-radial-accent" />

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-16 items-center"
      >
        <div>
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">Engineering Services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            End-to-End <span className="text-gradient">Silicon Engineering</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            From custom SoC architecture and RISC-V integration to FPGA prototyping and robotics system development — we offer comprehensive semiconductor engineering services.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {services.map((svc) => (
              <div key={svc} className="p-4 rounded-xl border border-border bg-card/50 text-center card-hover-glow">
                <p className="text-xs font-medium text-foreground/80">{svc}</p>
              </div>
            ))}
          </div>

          <Link to="/services" className="group inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors">
            View all services <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden image-glow"
        >
          <img src={servicesImage} alt="Engineers designing semiconductor circuits" className="w-full h-80 object-cover" />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HomeServicesPreview;