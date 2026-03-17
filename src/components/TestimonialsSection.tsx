import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The saffron is genuinely the best I've ever used. You can taste the difference in every thread.",
      author: "Chef Maria Gonzalez",
      role: "Executive Chef, Barcelona",
    },
    {
      quote: "Spices Moon has transformed how I approach seasoning. The freshness and potency is unmatched.",
      author: "David Chen",
      role: "Home Cook & Food Writer",
    },
    {
      quote: "I sent the gift set to my mother. She called it the most thoughtful gift she's ever received.",
      author: "Sarah Al-Rashid",
      role: "Loyal Customer",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-[10px] uppercase tracking-spice text-muted-foreground mb-2">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">
            What They Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card p-8 border border-foreground/5"
            >
              <p className="font-display text-lg italic leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="font-body text-sm font-medium">{t.author}</p>
                <p className="font-body text-[11px] text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
