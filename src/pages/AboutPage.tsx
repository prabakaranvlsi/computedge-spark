import { motion } from "framer-motion";
import { Target, Eye, Landmark, Lightbulb, Cpu, Bot, Layers, Server, CircuitBoard, Microchip } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageLayout, PageHeader } from "@/components/PageLayout";
import aboutImage from "@/assets/about.jpg";

const focusAreas = [
  { icon: Cpu, label: "Edge AI Hardware" },
  { icon: Microchip, label: "Custom AI Accelerators" },
  { icon: CircuitBoard, label: "RISC-V SoC Design" },
  { icon: Bot, label: "Robotics & Embedded" },
  { icon: Layers, label: "FPGA AI Acceleration" },
  { icon: Server, label: "Infrastructure IP" },
];

const pillars = [
  { icon: Target, title: "Our Mission", text: "To engineer the most power-efficient, high-performance AI silicon for edge deployment — enabling intelligent decision-making at the point of data generation, without reliance on cloud infrastructure." },
  { icon: Eye, title: "Our Vision", text: "A world where every embedded device, autonomous machine, and industrial system runs sophisticated AI workloads locally — with deterministic latency, minimal power draw, and uncompromising security." },
  { icon: Landmark, title: "Company Story", text: "ComputEdge Technologies was founded by semiconductor veterans and AI systems architects who recognized a critical gap: the AI revolution was accelerating, but the hardware at the edge was falling behind." },
  { icon: Lightbulb, title: "Founder's Vision", text: "Our founder's conviction is rooted in a simple but powerful thesis: the future of AI is not in the data center — it's at the edge. By combining custom accelerator micro-architectures with RISC-V processor cores, ComputEdge is pioneering a new class of AI SoCs." },
];

const AboutPage = () => (
  <PageLayout>
    <Navbar />
    <PageHeader
      label="About Us"
      title={<>Engineering the Silicon That Powers <span className="text-gradient">Edge Intelligence</span></>}
      description="ComputEdge Technologies is a deep-technology semiconductor company specializing in custom AI accelerator design, RISC-V based SoC architecture, and hardware acceleration for machine learning workloads at the edge."
    />

    <div className="container py-28">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="rounded-2xl overflow-hidden image-glow mb-24"
      >
        <img src={aboutImage} alt="Semiconductor innovation and AI chip technology" className="w-full h-72 md:h-96 object-cover" />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24">
        <p className="text-body-sm font-semibold text-muted-foreground tracking-widest uppercase mb-8">Core Focus Areas</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {focusAreas.map((area) => (
            <div key={area.label} className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-border bg-card text-center card-hover-glow">
              <div className="w-12 h-12 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center">
                <area.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-body-sm font-medium text-foreground/80">{area.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-7">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-border bg-card p-9 card-hover-glow"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center">
                <pillar.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold">{pillar.title}</h3>
            </div>
            <p className="text-body text-muted-foreground leading-relaxed">{pillar.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
    <Footer />
  </PageLayout>
);

export default AboutPage;
