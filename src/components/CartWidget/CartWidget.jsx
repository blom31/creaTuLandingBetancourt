import { NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../../provider/CartProvider";

export function CartWidget() {
  const { totalItems } = useContext(CartContext); // Desestructurado directamente

  const itemCount = totalItems(); // Llama a la función y guarda el resultado

  return (
    <NavLink to="/cart" className="cart_widget ">
      <ShoppingCart />
      {/* Muestra el número solo si itemCount es mayor que 0 */}
      {itemCount > 0 && <span className="cart_item_count">{itemCount}</span>}
    </NavLink>
  );
}
