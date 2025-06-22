// import "../CartWidget/CartWidget";

export function NavBar() {
  return (
    <>
      <nav className="">
        <ul className="menu">
          <li>
            <a href="/">
              <img
                className="menu_img"
                src="https://res.cloudinary.com/dv9yjyclh/image/upload/v1750554951/entrada_ufzx1i.png"
              />
            </a>
          </li>
          <li>
            <a className="menu_inicio" href="/">
              Inicio
            </a>
          </li>
          <li>
            <a className="menu_link" href="/peliculas">
              Películas
            </a>
          </li>
          <li>
            <a className="menu_link" href="/series">
              Series
            </a>
          </li>
          <li>
            <a className="menu_link" href="/contacto">
              Contacto
            </a>
          </li>
        </ul>
        {/* <CartWidget /> */}
      </nav>
    </>
  );
}
