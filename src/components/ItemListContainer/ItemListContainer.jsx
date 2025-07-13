import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { getPeliculas } from "../../fetchApi";

export function ItemListContainer({ greet }) {
  const [peliculas, setPeliculas] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPeliculas()
      .then((data) => {
        setPeliculas(data);
      })
      .catch((error) => {
        console.error("Error en el componente:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <h3>Cargando...</h3>;
  }

  return (
    <div className="item_list_container">
      <div className="saludo">
        <h1>{greet}</h1>
      </div>
      <div className="container">
        <div className="list_container">
          {peliculas.map((pelicula) => (
            <div className="item" key={pelicula.id}>
              <img
                className="item_img"
                src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                alt={pelicula.title}
              />
              <p className="title">{pelicula.title}</p>
            </div>
          ))}
          {/* Placeholder for additional items */}
        </div>
      </div>
    </div>
  );
}
