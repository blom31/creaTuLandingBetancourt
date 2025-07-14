export function ItemDetail({ pelicula }) {
  return (
    <div className="detalle_container">
      <h2>{pelicula.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
        alt={pelicula.title}
        className="detalle_img"
      />
      <p>
        <strong>Descripción:</strong> {pelicula.overview || "No disponible."}
      </p>
      <p>
        <strong>Fecha de estreno:</strong> {pelicula.release_date}
      </p>
      <p>
        <strong>ID:</strong> {pelicula.id}
      </p>
      {/* Agrega más si querés */}
    </div>
  );
}
