import { NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

export function NavBar() {
  return (
    <>
      <nav className="menu">
        <NavLink to="/">
          <img
            className="menu_img"
            src="https://res.cloudinary.com/dv9yjyclh/image/upload/v1750554951/entrada_ufzx1i.png"
          />
        </NavLink>
        <NavLink to="/" className="menu_inicio">
          Inicio
        </NavLink>
        <NavLink to="/peliculas" className="menu_link">
          Películas
        </NavLink>
        <NavLink to="/series" className="menu_link">
          Series
        </NavLink>
        <NavLink to="/ingresar" className="menu_link">
          👤Ingresar
        </NavLink>
        <CartWidget />
      </nav>
    </>
  );
}
