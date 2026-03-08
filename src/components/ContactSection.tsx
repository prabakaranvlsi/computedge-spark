import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">Contact</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Let's <span className="text-gradient">Build Together</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you need custom silicon, edge deployment, or a full robotics platform — we'd love to hear about your project.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                contact@computedge.tech
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
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
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
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
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <input
                  required
                  placeholder="Subject"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all shadow-md"
                >
                  Send Message <ArrowRight size={16} />
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
