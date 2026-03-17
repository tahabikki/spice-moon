import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import heroTable from "@/assets/hero-spices-table.jpg";

const AboutPage = () => {
  const values = [
    { title: "Origin First", description: "We trace every spice to its exact growing region, ensuring authenticity and supporting local farmers." },
    { title: "Peak Potency", description: "Harvested at the optimal moment for maximum volatile oil content and flavor intensity." },
    { title: "Zero Compromise", description: "No fillers, no additives, no irradiation. Just pure, unadulterated spice." },
    { title: "Sustainable Chain", description: "Fair trade practices and sustainable agriculture at every step of our supply chain." },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img src={heroTable} alt="Spice table" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center text-primary-foreground"
        >
          <p className="font-body text-[10px] uppercase tracking-spice text-primary-foreground/50 mb-4">Since 2020</p>
          <h1 className="font-display text-5xl md:text-7xl tracking-tight">Our Story</h1>
        </motion.div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 font-body text-base text-muted-foreground leading-relaxed"
            >
              <p>
                Spices Moon was born from a simple observation: the spices in most kitchens are shadows 
                of what they could be. Mass-produced, months old, stripped of the volatile oils that 
                make them extraordinary.
              </p>
              <p>
                We set out to change that. Our founder traveled to Kerala, Kashmir, Sri Lanka, Guatemala, 
                and Spain — meeting the farmers who grow these incredible ingredients. What we found was 
                a world of flavor hiding in plain sight.
              </p>
              <p>
                Today, we work directly with over 40 small-scale farms across 12 countries. Every spice 
                in our collection is traceable to its source, harvested at peak potency, and delivered 
                to you in glass vessels designed to preserve freshness.
              </p>
              <p className="font-display text-2xl text-foreground italic">
                "We believe the best meals start with the finest ingredients — and the finest ingredients 
                deserve to be treated with respect."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-body text-[10px] uppercase tracking-spice text-muted-foreground mb-2">What Guides Us</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-foreground/5 p-8"
              >
                <span className="font-body text-[10px] uppercase tracking-spice text-accent">0{i + 1}</span>
                <h3 className="font-display text-2xl mt-2 mb-3">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "40+", label: "Partner Farms" },
              { number: "12", label: "Countries" },
              { number: "50K+", label: "Happy Customers" },
              { number: "100%", label: "Traceable" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="font-display text-4xl md:text-5xl mb-2">{stat.number}</p>
                <p className="font-body text-[10px] uppercase tracking-spice text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
