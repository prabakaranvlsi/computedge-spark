import { motion } from "framer-motion";
import { Settings, Layers, Zap, Shield } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Custom Silicon Design",
    description: "From RTL to GDSII — we design application-specific AI accelerators tailored to your inference workload.",
  },
  {
    icon: Layers,
    title: "Edge Deployment",
    description: "Model optimization, quantization, and deployment pipelines for edge hardware at any scale.",
  },
  {
    icon: Zap,
    title: "System Integration",
    description: "Full-stack integration of AI compute modules into your existing robotic and IoT infrastructure.",
  },
  {
    icon: Shield,
    title: "AI Safety & Validation",
    description: "Rigorous testing, formal verification, and safety certification for mission-critical AI systems.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <p className="text-body-sm font-semibold text-primary tracking-widest uppercase mb-4">Services</p>
        <h2 className="text-3xl sm:text-4xl font-bold">
          End-to-End <span className="text-gradient">Engineering</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {services.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-2xl border border-border bg-card card-hover-glow"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center mb-6">
              <svc.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold mb-3">{svc.title}</h3>
            <p className="text-body text-muted-foreground leading-relaxed">{svc.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
