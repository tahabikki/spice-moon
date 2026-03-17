import { Link } from "react-router-dom";
import logoMoon from "@/assets/logo-moon.png";

const footerLinks = {
  Shop: [
    { label: "All Products", path: "/shop" },
    { label: "Bottles", path: "/shop?category=bottles" },
    { label: "Packs", path: "/shop?category=packs" },
    { label: "Organic", path: "/shop?category=organic" },
    { label: "Gift Sets", path: "/shop?category=gift" },
  ],
  Company: [
    { label: "Our Story", path: "/about" },
    { label: "Sourcing", path: "/about" },
    { label: "Contact", path: "/contact" },
  ],
  Support: [
    { label: "Shipping & Returns", path: "/contact" },
    { label: "FAQ", path: "/contact" },
    { label: "Track Order", path: "/contact" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-foreground/5 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logoMoon} alt="Spices Moon" className="w-6 h-6" />
              <span className="font-display text-xl tracking-tight">Spices Moon</span>
            </Link>
            <p className="font-body text-xs text-muted-foreground leading-relaxed max-w-[220px]">
              Premium spices from the world's finest harvests. Curated with care, delivered with precision.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-body text-[10px] uppercase tracking-spice text-muted-foreground mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="font-body text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[10px] uppercase tracking-spice text-muted-foreground">
            © 2026 Spices Moon. All rights reserved.
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
