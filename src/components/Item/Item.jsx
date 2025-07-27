import { Link } from "react-router-dom";

export function Item({ pelicula }) {
  if (!pelicula) return <p>No se recibió ninguna película</p>;

  return (
    <Link to={`/item/${pelicula.id}`} className="item">
      <img className="item_img" src={pelicula.poster} alt={pelicula.title} />
      <p className="title">{pelicula.title}</p>
      <p className="title">{pelicula.precio}</p>
    </Link>
  );
}
