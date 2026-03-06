import { motion } from "framer-motion";
import { Beaker, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageLayout, PageHeader } from "@/components/PageLayout";

const researchAreas = [
  {
    title: "AI Hardware Acceleration Architectures",
    description: "Exploring novel compute array topologies, dataflow architectures, and memory hierarchies optimized for emerging neural network models — including transformer, diffusion, and graph neural network workloads on resource-constrained edge devices.",
  },
  {
    title: "Neural Network Optimization for Edge Computing",
    description: "Developing hardware-aware model compression techniques including structured pruning, mixed-precision quantization, and operator fusion — maximizing inference throughput per watt on custom AI accelerators.",
  },
  {
    title: "RISC-V Architecture Enhancements",
    description: "Designing custom RISC-V ISA extensions for AI, DSP, and control applications — including SIMD vector operations, matrix multiply instructions, and hardware threading for real-time embedded workloads.",
  },
  {
    title: "Robotics Computing Systems",
    description: "Investigating tightly-coupled perception-planning-actuation computing architectures that unify sensor fusion, SLAM, motion planning, and motor control on a single heterogeneous SoC platform.",
  },
  {
    title: "Energy-Efficient AI Processing",
    description: "Advancing ultra-low-power design techniques including near-threshold computing, approximate arithmetic, and event-driven processing — enabling always-on AI inference in milliwatt-class power budgets.",
  },
];

const ResearchPage = () => (
  <PageLayout>
    <Navbar />
    <PageHeader
      label="Research & Innovation"
      title={<>Advancing the <span className="text-gradient">State of the Art</span></>}
      description="Our research team works at the frontier of AI hardware design, translating academic breakthroughs into production-grade silicon and systems."
    />

    <div className="container pb-24">
      {/* Research Areas */}
      <div className="space-y-6 mb-20">
        {researchAreas.map((area, i) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="p-8 rounded-lg border border-border bg-card hover:border-primary/30 transition-all"
          >
            <div className="flex items-start gap-4">
              <Beaker className="w-5 h-5 text-primary mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="font-display text-base font-semibold mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Collaboration */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl border border-primary/20 bg-card p-10 text-center max-w-2xl mx-auto"
        style={{ boxShadow: "0 0 60px hsl(185 80% 50% / 0.05)" }}
      >
        <GraduationCap className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.5} />
        <h3 className="font-display text-lg font-semibold mb-3">Collaboration Opportunities</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We actively seek partnerships with universities, government research laboratories, and industry R&D teams working on next-generation computing architectures, AI systems, and autonomous robotics. Contact us to explore joint research initiatives, sponsored projects, and technology licensing.
        </p>
      </motion.div>
    </div>
    <Footer />
  </PageLayout>
);

export default ResearchPage;
