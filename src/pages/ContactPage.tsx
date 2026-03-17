import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent!", { description: "We'll get back to you within 24 hours." });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 md:pt-36 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="font-body text-[10px] uppercase tracking-spice text-muted-foreground mb-2">Get in Touch</p>
            <h1 className="font-display text-5xl md:text-6xl tracking-tight mb-6">Contact</h1>
            <p className="font-body text-base text-muted-foreground leading-relaxed max-w-lg">
              Have a question about our spices, need help with an order, or want to explore wholesale? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-16">
            {/* Contact info */}
            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email", value: "hello@spicesmoon.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                { icon: MapPin, label: "Location", value: "Portland, Oregon" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-body text-[10px] uppercase tracking-spice text-muted-foreground mb-1">{label}</p>
                    <p className="font-body text-sm">{value}</p>
                  </div>
                </div>
              ))}

              <div className="pt-8 border-t border-foreground/5">
                <p className="font-body text-[10px] uppercase tracking-spice text-muted-foreground mb-3">Hours</p>
                <p className="font-body text-sm">Mon - Fri: 9am - 6pm PST</p>
                <p className="font-body text-sm text-muted-foreground">Sat - Sun: Closed</p>
              </div>
            </div>

            {/* Contact form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="lg:col-span-2 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-[10px] uppercase tracking-spice text-muted-foreground mb-2 block">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border border-foreground/10 px-4 py-3 font-body text-sm focus:outline-none focus:border-foreground/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-[10px] uppercase tracking-spice text-muted-foreground mb-2 block">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border border-foreground/10 px-4 py-3 font-body text-sm focus:outline-none focus:border-foreground/30 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="font-body text-[10px] uppercase tracking-spice text-muted-foreground mb-2 block">Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-transparent border border-foreground/10 px-4 py-3 font-body text-sm focus:outline-none focus:border-foreground/30 transition-colors cursor-pointer"
                >
                  <option value="">Select a topic</option>
                  <option value="order">Order Inquiry</option>
                  <option value="product">Product Question</option>
                  <option value="wholesale">Wholesale</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="font-body text-[10px] uppercase tracking-spice text-muted-foreground mb-2 block">Message</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border border-foreground/10 px-4 py-3 font-body text-sm focus:outline-none focus:border-foreground/30 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-foreground text-primary-foreground font-body text-xs uppercase tracking-spice px-10 py-4 hover:bg-foreground/90 transition-colors"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
