import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const papers = [
  {
    title: "Sparse Attention Mechanisms for Edge Neural Accelerators",
    venue: "NeurIPS 2025",
    abstract: "A novel hardware-aware sparse attention kernel achieving 3.2× throughput improvement on sub-10W devices.",
  },
  {
    title: "Federated On-Device Learning with Differential Privacy Guarantees",
    venue: "ICML 2025",
    abstract: "Privacy-preserving distributed training across heterogeneous edge deployments with provable convergence bounds.",
  },
  {
    title: "Co-Design of Neural Architectures and Custom Silicon",
    venue: "ISSCC 2026",
    abstract: "Joint optimization framework for model topology and chip micro-architecture, reducing inference energy by 5×.",
  },
  {
    title: "Real-Time 3D Scene Understanding for Autonomous Manipulation",
    venue: "CVPR 2025",
    abstract: "Multi-modal perception pipeline achieving sub-20ms latency for robotic grasping in unstructured environments.",
  },
];

const ResearchSection = () => (
  <section id="research" className="py-28 relative">
    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <p className="text-body-sm font-semibold text-primary tracking-widest uppercase mb-4">Research</p>
        <h2 className="text-3xl sm:text-4xl font-bold">
          Advancing the <span className="text-gradient">State of the Art</span>
        </h2>
        <p className="text-body-lg text-muted-foreground mt-5 max-w-xl">
          Our research team publishes at top-tier venues and translates breakthroughs directly into shipping products.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-7">
        {papers.map((paper, i) => (
          <motion.div
            key={paper.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group border border-border rounded-2xl p-8 bg-card card-hover-glow"
          >
            <div className="flex items-start gap-5">
              <FileText className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <span className="text-body-sm font-semibold text-primary mb-2 block">{paper.venue}</span>
                <h3 className="text-base font-semibold mb-3 group-hover:text-primary transition-colors">
                  {paper.title}
                </h3>
                <p className="text-body-sm text-muted-foreground leading-relaxed">{paper.abstract}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResearchSection;
