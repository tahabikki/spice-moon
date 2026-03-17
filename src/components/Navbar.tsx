import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoMoon from "@/assets/logo-moon.png";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Shop", path: "/shop" },
  { label: "Collections", path: "/shop" },
  { label: "Our Story", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
      <nav className="container mx-auto flex items-center justify-between h-16 md:h-20 px-6">
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`font-body text-[11px] uppercase tracking-spice transition-colors ${
                location.pathname === link.path
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <img src={logoMoon} alt="Spices Moon" className="w-7 h-7" />
          <span className="font-display text-xl md:text-2xl tracking-tight">
            Spices Moon
          </span>
        </Link>

        <div className="flex items-center gap-5">
          <Link to="/shop" aria-label="Search" className="text-muted-foreground hover:text-foreground transition-colors">
            <Search className="w-4 h-4" />
          </Link>
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Cart"
            className="relative text-muted-foreground hover:text-foreground transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-accent text-[9px] font-body flex items-center justify-center text-accent-foreground font-medium">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-foreground/5 bg-background"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-sm uppercase tracking-spice text-muted-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
