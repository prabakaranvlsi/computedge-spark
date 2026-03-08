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

    <div className="py-28 md:py-36 section-separator">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden image-glow"
        >
          <img src={researchImage} alt="AI research and neural network visualization" className="w-full h-64 md:h-80 object-cover" />
        </motion.div>
      </div>
    </div>

    <div className="py-28 md:py-36 section-alt section-separator">
      <div className="container">
        <div className="space-y-5">
          {researchAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-8 rounded-xl border border-border bg-card card-hover-glow"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Beaker className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    <div className="py-28 md:py-36 section-separator">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center max-w-2xl mx-auto glow-border"
        >
          <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="w-6 h-6 text-primary" strokeWidth={1.5} />
          </div>
          <h3 className="text-lg font-semibold mb-3">Collaboration Opportunities</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We actively seek partnerships with universities, government research laboratories, and industry R&D teams working on next-generation computing architectures, AI systems, and autonomous robotics.
          </p>
        </motion.div>
      </div>
    </div>
    <Footer />
  </PageLayout>
);

export default ResearchPage;