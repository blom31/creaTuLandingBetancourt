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
        <NavLink to="/categoria/pelicula" className="menu_link">
          Películas
        </NavLink>
        <NavLink to="/categoria/series" className="menu_link">
          Series
        </NavLink>
        <NavLink to="/uploader" className="menu_link">
          Uploader
        </NavLink>
        <NavLink to="/ingresar" className="menu_link">
          👤Ingresar
        </NavLink>
        <CartWidget />
      </nav>
    </>
  );
}
