import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden section-alt section-separator">
      <div className="absolute inset-0 circuit-bg-fine opacity-8" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-body-sm font-semibold text-primary tracking-widest uppercase mb-4">Contact</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Build Together</span>
            </h2>
            <p className="text-body-lg text-muted-foreground mb-12 leading-relaxed">
              Whether you need custom silicon, edge deployment, or a full robotics platform — we'd love to hear about your project.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-body text-muted-foreground">
                <div className="w-12 h-12 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                info@computedge.in
              </div>
              <div className="flex items-start gap-4 text-body text-muted-foreground">
                <div className="w-12 h-12 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  4A, Thiru Vi Ka Street<br />
                  Behind Bajaj Showroom<br />
                  Rasipuram (TK), Namakkal (DT)<br />
                  Tamil Nadu, India - 637408
                </div>
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
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-12 text-center">
                <p className="text-xl font-semibold text-primary mb-3">Message Sent</p>
                <p className="text-body text-muted-foreground">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    required
                    placeholder="Name"
                    className="w-full rounded-xl border border-border bg-card px-5 py-3.5 text-body-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/40 transition-all"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-xl border border-border bg-card px-5 py-3.5 text-body-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/40 transition-all"
                  />
                </div>
                <input
                  required
                  placeholder="Subject"
                  className="w-full rounded-xl border border-border bg-card px-5 py-3.5 text-body-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/40 transition-all"
                />
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl border border-border bg-card px-5 py-3.5 text-body-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary/40 transition-all resize-none"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-lg bg-primary text-primary-foreground text-body-sm font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                >
                  Send Message <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
