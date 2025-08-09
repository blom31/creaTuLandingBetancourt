import { createContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const CartProvider = CartContext.Provider;

export function CustomCartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((peli) => {
          if (peli.id === item.id) {
            return { ...peli, quantity: peli.quantity + quantity };
          }
          return peli;
        })
      );
      toast.info(`Se agregó ${quantity} unidades más de ${item.title}`);
    } else {
      setCart([...cart, { ...item, quantity }]);
      toast.success(`Se agregó ${item.title} al carrito`);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    const removedItem = cart.find((item) => item.id === id);
    if (removedItem) {
      toast.error(`Se eliminó ${removedItem.title} del carrito`); // Notificación
    }
  };
  const clearCart = () => {
    setCart([]);
    toast.warn("Se vació el carrito");
  };
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };
  const totalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };
  const totalPrecio = () => {
    return cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
  };

  return (
    <CartProvider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        isInCart,
        totalItems,
        totalPrecio,
      }}
    >
      {children}
    </CartProvider>
  );
}
