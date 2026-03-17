import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PromoSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Subscription box promo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-accent/10 border border-accent/20 p-10 md:p-14 flex flex-col justify-between min-h-[300px]"
          >
            <div>
              <p className="font-body text-[10px] uppercase tracking-spice text-accent mb-3">Monthly Delivery</p>
              <h3 className="font-display text-3xl md:text-4xl tracking-tight mb-4">
                The Spice Box
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm">
                A curated selection of 3 premium spices delivered to your door each month. 
                Discover new flavors, origins, and recipes.
              </p>
            </div>
            <Link
              to="/shop"
              className="inline-block self-start mt-8 font-body text-xs uppercase tracking-spice border border-foreground px-8 py-3 hover:bg-foreground hover:text-primary-foreground transition-colors duration-300"
            >
              Subscribe — $39/mo
            </Link>
          </motion.div>

          {/* Gift sets promo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-sumac/5 border border-sumac/10 p-10 md:p-14 flex flex-col justify-between min-h-[300px]"
          >
            <div>
              <p className="font-body text-[10px] uppercase tracking-spice text-sumac mb-3">Gift Collection</p>
              <h3 className="font-display text-3xl md:text-4xl tracking-tight mb-4">
                Give the Gift<br />of Flavor
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm">
                Beautifully packaged sets for every occasion. From the adventurous cook 
                to the seasoned chef.
              </p>
            </div>
            <Link
              to="/shop?category=gift"
              className="inline-block self-start mt-8 font-body text-xs uppercase tracking-spice border border-foreground px-8 py-3 hover:bg-foreground hover:text-primary-foreground transition-colors duration-300"
            >
              Explore Gift Sets
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
