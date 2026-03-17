import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bottleSaffron from "@/assets/bottle-saffron.png";
import bottlePepper from "@/assets/bottle-pepper.png";
import bottleTurmeric from "@/assets/bottle-turmeric.png";
import bottleCinnamon from "@/assets/bottle-cinnamon.png";
import heroTable from "@/assets/hero-spices-table.jpg";

const floatingBottles = [
  { src: bottlePepper, alt: "Pepper", x: -180, y: 40, rotate: -8, delay: 0.3, size: "w-28 md:w-36" },
  { src: bottleSaffron, alt: "Saffron", x: 160, y: -20, rotate: 6, delay: 0.5, size: "w-24 md:w-32" },
  { src: bottleTurmeric, alt: "Turmeric", x: -120, y: -90, rotate: 4, delay: 0.7, size: "w-20 md:w-28" },
  { src: bottleCinnamon, alt: "Cinnamon", x: 200, y: 80, rotate: -5, delay: 0.9, size: "w-22 md:w-30" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroTable} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-body text-[10px] uppercase tracking-spice text-primary-foreground/50 mb-6"
          >
            Premium Spices — Sourced Worldwide
          </motion.p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tight text-primary-foreground mb-6">
            Where Flavor<br />
            Meets the <em className="font-light italic">Moon</em>
          </h1>
          <p className="font-body text-sm md:text-base text-primary-foreground/60 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
            Hand-selected spices from the world's finest harvests. Each bottle tells a story of origin, 
            tradition, and uncompromising quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/shop"
              className="inline-block font-body text-xs uppercase tracking-spice bg-primary-foreground text-foreground px-10 py-4 hover:bg-primary-foreground/90 transition-colors duration-500 ease-expo text-center"
            >
              Shop Collection
            </Link>
            <Link
              to="/about"
              className="inline-block font-body text-xs uppercase tracking-spice border border-primary-foreground/30 text-primary-foreground px-10 py-4 hover:border-primary-foreground/60 transition-colors duration-500 ease-expo text-center"
            >
              Our Story
            </Link>
          </div>
        </motion.div>

        {/* Floating bottles composition */}
        <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] hidden lg:flex items-center justify-center">
          {floatingBottles.map((bottle, i) => (
            <motion.img
              key={i}
              src={bottle.src}
              alt={bottle.alt}
              className={`absolute ${bottle.size} drop-shadow-2xl`}
              initial={{ opacity: 0, y: 60, rotate: 0 }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: bottle.rotate,
                x: bottle.x,
              }}
              transition={{
                duration: 1.2,
                delay: bottle.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ scale: 1.1, rotate: 0 }}
              style={{ top: `calc(50% + ${bottle.y}px)`, left: "50%" }}
            />
          ))}
          {/* Center glow */}
          <div className="absolute w-48 h-48 rounded-full bg-accent/20 blur-3xl" />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-primary-foreground/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
