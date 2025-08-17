import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import {
  collection,
  getFirestore,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { app } from "../../firebase/firebaseConfig";

export function ItemListContainer({ greet }) {
  const { categoriaId } = useParams();
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore(app);
    const peliculasCollection = collection(db, "peliculas");
    let q = categoriaId;

    if (typeof categoriaId === "string" && categoriaId.length > 0) {
      q = query(peliculasCollection, where("categoria", "==", categoriaId));
    } else {
      q = query(peliculasCollection);
    }

    const listaPeliculas = getDocs(q);

    listaPeliculas
      .then((respuesta) => {
        const peliculasListadas = [];
        respuesta.docs.forEach((pelicula) => {
          peliculasListadas.push({ id: pelicula.id, ...pelicula.data() });
        });
        setPeliculas(peliculasListadas);
      })
      .catch((error) => {
        console.error("Error al obtener las películas de Firestore:", error);
        setError(
          "Error al cargar las películas. Inténtalo de nuevo más tarde."
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoriaId]);

  if (loading) {
    return <p className="loading">Cargando lista de películas / series...</p>;
  }
  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="item_list_container">
      {peliculas.length === 0 && !loading && !error ? (
        <p>No hay películas disponibles.</p>
      ) : (
        <ItemList peliculas={peliculas} greet={greet} />
      )}
    </div>
  );
}
