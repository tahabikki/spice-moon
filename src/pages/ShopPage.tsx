import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categories, tastes } from "@/data/products";

const sortOptions = [
  { value: "popular", label: "Most Popular" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "newest", label: "New Arrivals" },
];

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get("category") || "all");
  const [activeTaste, setActiveTaste] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activeTaste !== "all") {
      result = result.filter((p) => p.taste === activeTaste);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.origin.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "popular":
        result.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return result;
  }, [activeCategory, activeTaste, sortBy, searchQuery]);

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    if (id === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", id);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 md:pt-36 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-body text-[10px] uppercase tracking-spice text-muted-foreground mb-2">Collection</p>
            <h1 className="font-display text-5xl md:text-6xl tracking-tight mb-8">All Spices</h1>
          </motion.div>

          {/* Search */}
          <div className="mb-8">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, origin, or flavor..."
              className="w-full max-w-md bg-transparent border border-foreground/10 px-4 py-3 font-body text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/30 transition-colors"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-8 mb-8 pb-8 border-b border-foreground/5">
            <div>
              <p className="font-body text-[10px] uppercase tracking-spice text-muted-foreground mb-3">Category</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleCategoryClick("all")}
                  className={`font-body text-[11px] uppercase tracking-spice px-4 py-2 border transition-colors ${
                    activeCategory === "all"
                      ? "bg-foreground text-primary-foreground border-foreground"
                      : "border-foreground/10 text-muted-foreground hover:border-foreground/30"
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.id)}
                    className={`font-body text-[11px] uppercase tracking-spice px-4 py-2 border transition-colors ${
                      activeCategory === cat.id
                        ? "bg-foreground text-primary-foreground border-foreground"
                        : "border-foreground/10 text-muted-foreground hover:border-foreground/30"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-body text-[10px] uppercase tracking-spice text-muted-foreground mb-3">Taste Profile</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveTaste("all")}
                  className={`font-body text-[11px] uppercase tracking-spice px-4 py-2 border transition-colors ${
                    activeTaste === "all"
                      ? "bg-foreground text-primary-foreground border-foreground"
                      : "border-foreground/10 text-muted-foreground hover:border-foreground/30"
                  }`}
                >
                  All
                </button>
                {tastes.map((taste) => (
                  <button
                    key={taste}
                    onClick={() => setActiveTaste(taste)}
                    className={`font-body text-[11px] uppercase tracking-spice px-4 py-2 border transition-colors ${
                      activeTaste === taste
                        ? "bg-foreground text-primary-foreground border-foreground"
                        : "border-foreground/10 text-muted-foreground hover:border-foreground/30"
                    }`}
                  >
                    {taste}
                  </button>
                ))}
              </div>
            </div>

            <div className="ml-auto self-end">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="font-body text-[11px] uppercase tracking-spice bg-transparent border border-foreground/10 px-4 py-2 text-muted-foreground focus:outline-none cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          <p className="font-body text-xs text-muted-foreground mb-6">
            {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </p>

          {/* Product grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-display text-2xl text-muted-foreground mb-2">No spices found</p>
              <p className="font-body text-sm text-muted-foreground">Try adjusting your filters or search query.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShopPage;
