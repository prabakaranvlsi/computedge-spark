import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

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
  <section id="research" className="py-24 relative">
    <div className="absolute inset-0 grid-bg opacity-10" />
    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="font-display text-sm text-primary tracking-widest uppercase mb-2">Research</p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold">
          Advancing the <span className="text-gradient">State of the Art</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl">
          Our research team publishes at top-tier venues and translates breakthroughs directly into shipping products.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {papers.map((paper, i) => (
          <motion.div
            key={paper.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group border border-border rounded-lg p-6 bg-card hover:border-primary/30 transition-all"
          >
            <div className="flex items-start gap-4">
              <FileText className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <span className="text-xs font-display text-primary mb-1 block">{paper.venue}</span>
                <h3 className="font-display text-sm font-semibold mb-2 group-hover:text-primary transition-colors">
                  {paper.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{paper.abstract}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResearchSection;
