import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HomeServicesPreview = () => (
  <section className="py-24 bg-muted/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-12 items-center"
      >
        <div>
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">Engineering Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            End-to-End <span className="text-gradient">Silicon Engineering</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            From custom SoC architecture and RISC-V integration to FPGA prototyping and robotics system development — we offer comprehensive semiconductor engineering services.
          </p>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium">
            View all services <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            "Custom SoC Design",
            "RISC-V Integration",
            "AI Accelerator Design",
            "FPGA Prototyping",
            "Robotics Development",
            "Semiconductor IP",
          ].map((svc) => (
            <div key={svc} className="p-4 rounded-xl border border-border bg-background text-center hover:border-primary/30 hover:shadow-sm transition-all">
              <p className="text-xs font-medium text-foreground/80">{svc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default HomeServicesPreview;
