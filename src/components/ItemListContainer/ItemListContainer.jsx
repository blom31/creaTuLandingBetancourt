import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { getPeliculas } from "../../services/fetchApi";
import { ItemList } from "../ItemList/ItemList";
import {
  collection,
  getFirestore,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { app } from "../../firebase/firebaseConfig"; // Import the Firestore database instance

export function ItemListContainer({ greet }) {
  const { categoriaId } = useParams();
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log("categoriaId recibido:", categoriaId);
    setLoading(true);
    const db = getFirestore(app);
    const peliculasCollection = collection(db, "peliculas");
    let q = categoriaId;

    if (typeof categoriaId === "string" && categoriaId.length > 0) {
      q = query(peliculasCollection, where("categoria", "==", categoriaId));
    } else {
      q = query(peliculasCollection); // Sin filtro
    }

    const listaPeliculas = getDocs(q);

    listaPeliculas
      .then((respuesta) => {
        const peliculasListadas = [];
        respuesta.docs.forEach((pelicula) => {
          console.log("Documento de película:", pelicula.id, pelicula.data());
          peliculasListadas.push({ id: pelicula.id, ...pelicula.data() });
        });
        console.log("Películas listadas después de filtro:", peliculasListadas);
        setPeliculas(peliculasListadas);
      })
      .catch((error) => {
        console.error("Error al obtener las películas de Firestore:", error);
        setError(
          "Error al cargar las películas. Inténtalo de nuevo más tarde."
        );
      })
      .finally(() => {
        setLoading(false); // Indicamos que la carga ha terminado
      });
  }, [categoriaId]);

  if (loading) {
    return <p>Cargando lista de películas / series...</p>;
  }
  if (error) {
    // Si hay un error, lo mostramos al usuario
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
