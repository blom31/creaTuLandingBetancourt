import { Currency } from "lucide-react";
import { Link } from "react-router-dom";

export function Item({ pelicula }) {
  if (!pelicula) return <p>No se recibió ninguna película</p>;

  return (
    <article className="item">
      <img className="item_img" src={pelicula.poster} alt={pelicula.title} />
      <div>
        <div className="title">{pelicula.title}</div>
        <div className="price">
          {Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
          }).format(pelicula.precio)}
        </div>
      </div>
      <Link to={`/item/${pelicula.id}`} className="detalle">
        Ver detalle
      </Link>
    </article>
  );
}
