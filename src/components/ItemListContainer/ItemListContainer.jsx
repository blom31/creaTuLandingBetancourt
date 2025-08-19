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
  //Obtiene el parámetro de la URL que indica la categoría seleccionada
  const { categoriaId } = useParams();

  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Hook que se ejecuta cada vez que cambia la categoría
  useEffect(() => {
    setLoading(true);
    const db = getFirestore(app); //Inicializa la instancia de Firestore
    const peliculasCollection = collection(db, "peliculas"); // Referencia a la colección "peliculas"
    // Crea una consulta para obtener las películas de la colección
    let q = categoriaId;

    // Si hay una categoría válida, se filtra por esa categoría
    if (typeof categoriaId === "string" && categoriaId.length > 0) {
      q = query(peliculasCollection, where("categoria", "==", categoriaId));
    } else {
      q = query(peliculasCollection);
    }
    // Realiza la consulta a Firestore
    const listaPeliculas = getDocs(q);

    listaPeliculas
      .then((respuesta) => {
        const peliculasListadas = [];
        // Recorre los documentos obtenidos y los transforma en objetos con id
        respuesta.docs.forEach((pelicula) => {
          peliculasListadas.push({ id: pelicula.id, ...pelicula.data() });
        });
        // Actualiza el estado con la lista de películas
        setPeliculas(peliculasListadas);
      })
      .catch((error) => {
        // Maneja errores en la consulta
        console.error("Error al obtener las películas de Firestore:", error);
        setError(
          "Error al cargar las películas. Inténtalo de nuevo más tarde."
        );
      })
      .finally(() => {
        // Finaliza la carga sin importar el resultado
        setLoading(false);
      });
  }, [categoriaId]); // Se ejecuta cada vez que cambia la categoría

  if (loading) {
    return <p className="loading">Cargando lista de películas / series...</p>;
  }
  if (error) {
    return <p className="error-message">{error}</p>;
  }
  // Renderiza la lista de películas o un mensaje si no hay resultados

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
