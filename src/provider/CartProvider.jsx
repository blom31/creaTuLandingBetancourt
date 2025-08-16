import { createContext, useState } from "react"; // Importamos createContext para crear el contexto global del carrito
import {
  addItemToCart,
  removeItemFromCart,
  isInCart as checkIsInCart,
  totalItems,
  totalPrecio,
} from "../components/Cart/CartUtils";
import { toast } from "react-toastify"; // Importamos toast para mostrar notificaciones al usuario

export const CartContext = createContext(); // Creamos el contexto del carrito, que será compartido entre componentes

const CartProvider = CartContext.Provider; // Extraemos el componente Provider del contexto

export function CustomCartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const updatedCart = addItemToCart(cart, item, quantity);
    setCart(updatedCart);

    const message = checkIsInCart(cart, item.id)
      ? `Se agregó ${quantity} unidades más de ${item.title}`
      : `Se agregó ${item.title} al carrito`;

    toast[checkIsInCart(cart, item.id) ? "info" : "success"](message);
  };

  const removeItem = (id) => {
    const removedItem = cart.find((item) => item.id === id);
    setCart(removeItemFromCart(cart, id));
    if (removedItem) toast.error(`Se eliminó ${removedItem.title} del carrito`);
  };

  const clearCart = () => {
    setCart([]);
    toast.warn("Se vació el carrito");
  };

  return (
    <CartProvider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        isInCart: (id) => checkIsInCart(cart, id),
        totalItems: () => totalItems(cart),
        totalPrecio: () => totalPrecio(cart),
      }}
    >
      {children}
    </CartProvider>
  );
}
