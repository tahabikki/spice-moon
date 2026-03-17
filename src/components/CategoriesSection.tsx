import { motion } from "framer-motion";
import { categories } from "@/data/products";

const CategoriesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-[10px] uppercase tracking-spice text-muted-foreground mb-2">
            Browse By
          </p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">
            Categories
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.id}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-card p-8 md:p-12 text-center border border-foreground/5 hover:shadow-product-hover transition-shadow duration-500"
            >
              <h3 className="font-display text-2xl md:text-3xl mb-2 group-hover:text-accent transition-colors duration-300">
                {cat.label}
              </h3>
              <p className="font-body text-[10px] uppercase tracking-spice text-muted-foreground">
                {cat.count} {cat.count === 1 ? "item" : "items"}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
