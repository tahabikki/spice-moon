import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 flex flex-col border-l border-foreground/5"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-foreground/5">
              <h2 className="font-display text-2xl">Your Bag</h2>
              <div className="flex items-center gap-3">
                <span className="font-body text-xs text-muted-foreground uppercase tracking-spice">
                  {totalItems} {totalItems === 1 ? "item" : "items"}
                </span>
                <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="font-display text-xl text-muted-foreground mb-2">Your bag is empty</p>
                  <p className="font-body text-sm text-muted-foreground mb-6">Discover our collection of precision spices.</p>
                  <Link
                    to="/shop"
                    onClick={() => setIsOpen(false)}
                    className="font-body text-xs uppercase tracking-spice border border-foreground px-6 py-3 hover:bg-foreground hover:text-primary-foreground transition-colors duration-300"
                  >
                    Shop Now
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex gap-4"
                    >
                      <div className="w-20 h-20 bg-secondary flex-shrink-0 flex items-center justify-center p-2">
                        <img src={item.product.image} alt={item.product.name} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-base truncate">{item.product.name}</h3>
                        <p className="font-body text-[10px] uppercase tracking-spice text-muted-foreground">{item.product.weight}</p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2 border border-foreground/10">
                            <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-1.5 text-muted-foreground hover:text-foreground">
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-body text-sm tabular-nums w-6 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-1.5 text-muted-foreground hover:text-foreground">
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="font-body text-sm tabular-nums">${(item.product.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(item.product.id)} className="text-muted-foreground hover:text-foreground self-start mt-1">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="px-6 py-6 border-t border-foreground/5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-body text-xs uppercase tracking-spice text-muted-foreground">Subtotal</span>
                  <span className="font-display text-xl">${totalPrice.toFixed(2)}</span>
                </div>
                <button className="w-full bg-foreground text-primary-foreground font-body text-xs uppercase tracking-spice py-4 hover:bg-foreground/90 transition-colors">
                  Checkout
                </button>
                <p className="font-body text-[10px] text-muted-foreground text-center">Free shipping on orders over $50</p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
