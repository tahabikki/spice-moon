import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import bottlePepper from "@/assets/bottle-pepper.png";
import bottleCumin from "@/assets/bottle-cumin.png";
import bottleTurmeric from "@/assets/bottle-turmeric.png";
import bottleStarAnise from "@/assets/bottle-staranise.png";

const categoryImages: Record<string, string> = {
  bottles: bottlePepper,
  packs: bottleCumin,
  organic: bottleTurmeric,
  gift: bottleStarAnise,
};

const CategoriesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-[10px] uppercase tracking-spice text-primary-foreground/40 mb-2">
            Browse By
          </p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">
            Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={`/shop?category=${cat.id}`}
                className="group block bg-primary-foreground/5 border border-primary-foreground/10 p-8 text-center hover:bg-primary-foreground/10 transition-colors duration-500"
              >
                <div className="h-32 flex items-center justify-center mb-4">
                  <motion.img
                    src={categoryImages[cat.id]}
                    alt={cat.label}
                    className="h-full w-auto object-contain drop-shadow-lg"
                    whileHover={{ scale: 1.1, rotate: -3 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <h3 className="font-display text-2xl mb-1">{cat.label}</h3>
                <p className="font-body text-[11px] text-primary-foreground/50 leading-relaxed">{cat.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
