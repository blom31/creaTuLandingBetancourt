import { NavLink } from "react-router-dom";

export function CartWidget() {
  return (
    <NavLink to="/cartWidget" className="cart_widget ">
      🛒 <span>3</span>
    </NavLink>
  );
}
