import { NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../../provider/CartProvider";

export function CartWidget() {
  const result = useContext(CartContext);

  console.log(result);
  return (
    <NavLink to="/cart" className="cart_widget ">
      <ShoppingCart /> {result.cantidad}
    </NavLink>
  );
}
