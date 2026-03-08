import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Products",
    links: [
      { label: "Edge AI SoC", href: "/products" },
      { label: "AI Acceleration Engine", href: "/products" },
      { label: "Robotics Platform", href: "/products" },
      { label: "FPGA Platform", href: "/products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Technology", href: "/technology" },
      { label: "Research", href: "/research" },
      { label: "Services", href: "/services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Infrastructure IP", href: "/infrastructure-ip" },
      { label: "RISC-V SoC", href: "/risc-v-soc" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const Footer = () => (
  <footer className="relative border-t border-border bg-card">
    <div className="container relative py-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <Link to="/" className="text-xl font-bold tracking-tight font-display">
            <span className="text-gradient">Comput</span>
            <span className="text-foreground">Edge</span>
          </Link>
          <p className="text-body-sm text-muted-foreground mt-5 leading-relaxed max-w-[240px]">
            Next-generation edge AI hardware, RISC-V processors, and custom silicon for intelligent systems.
          </p>
        </div>

        {footerLinks.map((group) => (
          <div key={group.title}>
            <p className="text-body-sm font-semibold tracking-widest uppercase text-foreground/60 mb-5">{group.title}</p>
            <ul className="space-y-3">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-body-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-body-sm text-muted-foreground/60">© 2026 ComputEdge Technologies. All rights reserved.</p>
        <div className="flex gap-8 text-body-sm text-muted-foreground/60">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Careers</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
