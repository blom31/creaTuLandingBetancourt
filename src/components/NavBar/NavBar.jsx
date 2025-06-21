// import "../CartWidget/CartWidget";

export function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/peliculas">Películas</a>
          </li>
          <li>
            <a href="/series">Series</a>
          </li>
          <li>
            <a href="/contacto">Contacto</a>
          </li>
        </ul>
        {/* <CartWidget /> */}
      </nav>
    </>
  );
}
