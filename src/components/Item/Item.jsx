import { Link } from "react-router-dom";

// Este componente renderiza una sola tarjeta de película.
export function Item({ pelicula }) {
  console.log("Recibiendo película:", pelicula); // Debug

  if (!pelicula) return <p>No se recibió ninguna película</p>;

  return (
    // Envolvemos todo en un Link para que sea clickeable y nos lleve al detalle
    <Link to={`/item/${pelicula.id}`} className="item">
      <img
        className="item_img"
        src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
        alt={pelicula.title}
      />
      <p className="title">{pelicula.title}</p>
      {/* <p className="title">{category.id}</p> */}
    </Link>
  );
}
