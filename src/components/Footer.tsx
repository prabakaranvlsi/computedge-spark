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
  <footer className="border-t border-border py-16">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <Link to="/" className="font-display text-lg font-bold tracking-tight">
            <span className="text-gradient">Comput</span>
            <span className="text-foreground">Edge</span>
          </Link>
          <p className="text-xs text-muted-foreground mt-3 leading-relaxed max-w-[200px]">
            Next-generation edge AI hardware, RISC-V processors, and custom silicon.
          </p>
        </div>

        {footerLinks.map((group) => (
          <div key={group.title}>
            <p className="font-display text-xs tracking-widest uppercase text-foreground mb-4">{group.title}</p>
            <ul className="space-y-2">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© 2026 ComputEdge Technologies. All rights reserved.</p>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Careers</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
