import { motion } from "framer-motion";
import heroBottle from "@/assets/hero-bottle.png";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-secondary">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl text-center lg:text-left"
        >
          <p className="font-body text-[10px] uppercase tracking-spice text-muted-foreground mb-4">
            Harvest 2026 — Now Available
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-6">
            The Architecture<br />
            <em className="font-light">of Flavor</em>
          </h1>
          <p className="font-body text-sm text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
            Harvested at peak potency. Traceable to the coordinate. For those who cook by chemistry, not just by heart.
          </p>
          <a
            href="#products"
            className="inline-block font-body text-xs uppercase tracking-spice border border-foreground px-8 py-4 hover:bg-foreground hover:text-primary-foreground transition-colors duration-500 ease-expo"
          >
            Explore the Collection
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative w-72 md:w-96 lg:w-[28rem]"
        >
          <img
            src={heroBottle}
            alt="Premium spice bottle on marble surface"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
