import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome to the Spices Moon family!", {
        description: "You'll receive our monthly dispatch soon.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-24 md:py-32 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="font-body text-[10px] uppercase tracking-spice text-primary-foreground/40 mb-4">
            Stay Connected
          </p>
          <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-4">
            The Moon Dispatch
          </h2>
          <p className="font-body text-sm text-primary-foreground/50 mb-8">
            Seasonal recipes, new arrivals, exclusive offers, and spice tips delivered monthly.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-3.5 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary-foreground/40 transition-colors"
            />
            <button
              type="submit"
              className="font-body text-xs uppercase tracking-spice bg-primary-foreground text-foreground px-8 py-3.5 hover:bg-primary-foreground/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
