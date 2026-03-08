import { motion } from "framer-motion";
import { Beaker, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageLayout, PageHeader } from "@/components/PageLayout";
import researchImage from "@/assets/research.jpg";

const researchAreas = [
  { title: "AI Hardware Acceleration Architectures", description: "Exploring novel compute array topologies, dataflow architectures, and memory hierarchies optimized for emerging neural network models." },
  { title: "Neural Network Optimization for Edge Computing", description: "Developing hardware-aware model compression techniques including structured pruning, mixed-precision quantization, and operator fusion." },
  { title: "RISC-V Architecture Enhancements", description: "Designing custom RISC-V ISA extensions for AI, DSP, and control applications — including SIMD vector operations and matrix multiply instructions." },
  { title: "Robotics Computing Systems", description: "Investigating tightly-coupled perception-planning-actuation computing architectures that unify sensor fusion, SLAM, motion planning, and motor control." },
  { title: "Energy-Efficient AI Processing", description: "Advancing ultra-low-power design techniques including near-threshold computing, approximate arithmetic, and event-driven processing." },
];

const ResearchPage = () => (
  <PageLayout>
    <Navbar />
    <PageHeader
      label="Research & Innovation"
      title={<>Advancing the <span className="text-gradient">State of the Art</span></>}
      description="Our research team works at the frontier of AI hardware design, translating academic breakthroughs into production-grade silicon and systems."
    />

    <div className="container py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="rounded-2xl overflow-hidden shadow-xl mb-16"
      >
        <img src={researchImage} alt="AI research and neural network visualization" className="w-full h-64 md:h-80 object-cover" />
      </motion.div>

      <div className="space-y-6 mb-20">
        {researchAreas.map((area, i) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="p-8 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-4">
              <Beaker className="w-5 h-5 text-primary mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="text-base font-semibold mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/5 to-blue-50 p-10 text-center max-w-2xl mx-auto"
      >
        <GraduationCap className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.5} />
        <h3 className="text-lg font-semibold mb-3">Collaboration Opportunities</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We actively seek partnerships with universities, government research laboratories, and industry R&D teams working on next-generation computing architectures, AI systems, and autonomous robotics.
        </p>
      </motion.div>
    </div>
    <Footer />
  </PageLayout>
);

export default ResearchPage;
