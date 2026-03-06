import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Engineers" },
  { value: "12", label: "Patents Filed" },
  { value: "3", label: "Chip Tapeouts" },
  { value: "98%", label: "Uptime SLA" },
];

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="absolute inset-0 grid-bg opacity-10" />
    <div className="container relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-display text-sm text-primary tracking-widest uppercase mb-2">About Us</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            Born from <span className="text-gradient">Deep Tech</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              ComputEdge Technologies was founded in 2023 by a team of chip architects, roboticists, and ML researchers from leading labs and semiconductor companies.
            </p>
            <p>
              Our mission is to democratize on-device AI by building the most efficient inference hardware and intelligent robotic systems — enabling a world where AI runs everywhere, without the cloud.
            </p>
            <p>
              Headquartered in San Jose, CA, with R&D centers in Taipei and Munich, we combine silicon engineering excellence with cutting-edge machine learning research.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-lg border border-border bg-card text-center"
            >
              <p className="font-display text-3xl font-bold text-gradient mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
