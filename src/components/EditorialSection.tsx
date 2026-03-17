import { motion } from "framer-motion";

const EditorialSection = () => {
  return (
    <section className="py-[20vh]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[65ch] mx-auto text-center"
        >
          <p className="font-body text-[10px] uppercase tracking-spice text-muted-foreground mb-6">
            Our Philosophy
          </p>
          <h2 className="font-display text-3xl md:text-5xl leading-snug tracking-tight mb-8">
            Every spice has a <em className="font-light">coordinate</em>, a harvest date, 
            and a measurable potency. We believe precision is the highest form of respect 
            for the ingredient.
          </h2>
          <a
            href="#"
            className="inline-block font-body text-xs uppercase tracking-spice text-muted-foreground border-b border-muted-foreground/30 pb-0.5 hover:text-foreground transition-colors"
          >
            Read Our Story
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EditorialSection;
