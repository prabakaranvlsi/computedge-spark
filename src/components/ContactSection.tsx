import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 circuit-bg-fine opacity-10" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">Contact</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Build Together</span>
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Whether you need custom silicon, edge deployment, or a full robotics platform — we'd love to hear about your project.
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                contact@computedge.tech
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                San Jose, CA · Taipei · Munich
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {submitted ? (
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-10 text-center">
                <p className="text-lg font-semibold text-primary mb-2">Message Sent</p>
                <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    required
                    placeholder="Name"
                    className="w-full rounded-lg border border-border bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-lg border border-border bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                  />
                </div>
                <input
                  required
                  placeholder="Subject"
                  className="w-full rounded-lg border border-border bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-lg border border-border bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all resize-none"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                >
                  Send Message <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;