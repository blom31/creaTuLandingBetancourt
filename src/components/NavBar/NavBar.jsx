import { NavLink } from "react-router-dom";
import { CartWidget } from "../Cart/CartWidget/CartWidget";
import { useMenuToggle } from "./Hooks/useMenuToggle";
import styles from "./NavBar.module.scss";

export function NavBar() {
  const { isActive, toggleMenu, closeMenu } = useMenuToggle();
  return (
    <>
      <nav className={styles.menu}>
        <NavLink to="/" className={styles.menuLogo}>
          CineApp
        </NavLink>
        <div className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
          <NavLink to="/" className={styles.menuInicio} onClick={closeMenu}>
            Inicio
          </NavLink>
          <NavLink
            to="/categoria/pelicula"
            className={styles.menuInicio}
            onClick={closeMenu}
          >
            Películas
          </NavLink>
          <NavLink
            to="/categoria/series"
            className={styles.menuInicio}
            onClick={closeMenu}
          >
            Series
          </NavLink>
          <NavLink
            to="/uploader"
            className={styles.menuInicio}
            onClick={closeMenu}
          >
            Uploader
          </NavLink>
          <NavLink
            to="/login"
            className={styles.menuInicio}
            onClick={closeMenu}
          >
            👤Ingresar
          </NavLink>
          {/* Componente ícono del cart */}
        </div>
        <CartWidget />
        <div
          className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
          onClick={toggleMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </nav>
    </>
  );
}
