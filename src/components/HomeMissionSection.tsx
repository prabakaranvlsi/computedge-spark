import { motion } from "framer-motion";

const HomeMissionSection = () => (
  <section className="relative py-28 md:py-36 overflow-hidden section-alt section-separator">
    <div className="absolute inset-0 circuit-bg-fine opacity-8" />
    <div className="absolute inset-0 gradient-radial" />

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-body-sm font-semibold text-primary tracking-widest uppercase mb-6">Our Mission</p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6 tracking-tight">
          To engineer power-efficient, high-performance AI silicon for{" "}
          <span className="text-gradient">intelligent edge devices.</span>
        </h2>
        <p className="text-body-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Enabling real-time decision-making directly where data is generated — across robotics, drones, industrial automation, and smart IoT systems.
        </p>
      </motion.div>
    </div>
  </section>
);

export default HomeMissionSection;
