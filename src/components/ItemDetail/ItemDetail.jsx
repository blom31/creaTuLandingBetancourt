export function ItemDetail({ pelicula }) {
  return (
    <div className="item_detail">
      <div className="item_img_container">
        <img
          src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
          alt={pelicula.title}
          className="item_detail_img"
        />
      </div>
      <div className="item_info">
        <h2>{pelicula.title}</h2>
        <p>
          <strong>Descripción:</strong> {pelicula.overview || "No disponible."}
        </p>
        <p>
          <strong>Fecha de estreno:</strong> {pelicula.release_date}
        </p>
        <p>
          <strong>Categoría:</strong> {pelicula.categoria}
        </p>
        <div className="item_actions">
          <button className="btn-primary">Comprar ahora</button>
          <button className="btn-primary">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}
