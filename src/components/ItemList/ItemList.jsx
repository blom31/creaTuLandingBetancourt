import { Item } from "../Item/Item"; // Importamos el componente para cada item individual

// Este componente solo se encarga de la presentación de la lista.
export function ItemList({ peliculas }) {
  if (!peliculas || peliculas.length === 0) {
    return (
      <div className="itemlist-container">
        <p>No se encontraron películas en esta categoría.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="list_container">
        {peliculas.map((pelicula) => (
          // Por cada película, renderizamos un componente Item
          <Item key={pelicula.id} pelicula={pelicula} />
        ))}
      </div>
    </div>
  );
}
