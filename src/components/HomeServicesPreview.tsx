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
  <section className="relative py-28 md:py-36 overflow-hidden section-alt section-separator">
    <div className="absolute inset-0 circuit-bg opacity-10" />
    <div className="absolute inset-0 gradient-radial-accent" />

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-20 items-center"
      >
        <div>
          <p className="text-body-sm font-semibold text-primary tracking-widest uppercase mb-4">Engineering Services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            End-to-End <span className="text-gradient">Silicon Engineering</span>
          </h2>
          <p className="text-body-lg text-muted-foreground leading-relaxed mb-10">
            From custom SoC architecture and RISC-V integration to FPGA prototyping and robotics system development — we offer comprehensive semiconductor engineering services.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-10">
            {services.map((svc) => (
              <div key={svc} className="p-5 rounded-xl border border-border bg-card text-center card-hover-glow">
                <p className="text-body-sm font-medium text-foreground/80">{svc}</p>
              </div>
            ))}
          </div>

          <Link to="/services" className="group inline-flex items-center gap-2.5 text-body-sm text-primary hover:text-primary/80 font-semibold transition-colors">
            View all services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden image-glow"
        >
          <img src={servicesImage} alt="Engineering workstation with semiconductor design tools" className="w-full h-96 object-cover" />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HomeServicesPreview;
