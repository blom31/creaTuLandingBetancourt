import { NavLink } from "react-router-dom";

export function CartWidget() {
  return (
    <NavLink className="cart_widget ">
      🛒 <span>3</span> {/* Simula 3 productos en el carrito */}
    </NavLink>
  );
}
