import { Children, createContext } from "react";
import { useState } from "react";
export const CartContext = createContext();

const CartProvider = CartContext.Provider;

export function CustomCartProvider({ children }) {
  const [cantidad, setCantidad] = useState(0);

  const cart = { cantidad: cantidad, precio: 0, setCantidad: setCantidad };

  return <CartProvider value={cart}>{children}</CartProvider>;
}
