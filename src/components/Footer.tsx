const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-display text-sm">
        <span className="text-gradient">Comput</span>
        <span className="text-foreground">Edge</span>
        <span className="text-muted-foreground ml-2">© 2026</span>
      </p>
      <div className="flex gap-6 text-xs text-muted-foreground">
        <a href="#" className="hover:text-primary transition-colors">Privacy</a>
        <a href="#" className="hover:text-primary transition-colors">Terms</a>
        <a href="#" className="hover:text-primary transition-colors">Careers</a>
      </div>
    </div>
  </footer>
);

export default Footer;
