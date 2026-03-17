const footerLinks = {
  Shop: ["All Products", "Bottles", "Packs", "Organic", "Gift Sets"],
  Company: ["Our Story", "Journal", "Sourcing", "Careers"],
  Support: ["Contact", "Shipping", "Returns", "FAQ"],
};

const Footer = () => {
  return (
    <footer className="border-t border-foreground/5 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="font-display text-2xl tracking-tight">
              Materia
            </a>
            <p className="font-body text-xs text-muted-foreground mt-4 leading-relaxed max-w-[200px]">
              Precision spices for the discerning kitchen.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-body text-[10px] uppercase tracking-spice text-muted-foreground mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[10px] uppercase tracking-spice text-muted-foreground">
            © 2026 Materia. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-body text-[10px] uppercase tracking-spice text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
