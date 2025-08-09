import { Item } from "../Item/Item";

export function ItemList({ peliculas, greet }) {
  if (!peliculas || peliculas.length === 0) {
    return (
      <div className="itemlist-container">
        <p>No se encontraron películas en esta categoría.</p>
      </div>
    );
  }

  return (
    <section className="container">
      <div className="saludo">
        <h1>{greet}</h1>
        <div className="buscar">
          <label htmlFor="buscar-input">Buscar</label>
          <input type="text" name="buscar" id="buscar-input" />
        </div>
      </div>
      <article className="list_container">
        {peliculas.map((pelicula) => (
          <Item key={pelicula.id} pelicula={pelicula} />
        ))}
      </article>
    </section>
  );
}
