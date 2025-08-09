import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export function ItemDetailContainer() {
  const { itemId } = useParams();
  const [pelicula, setPelicula] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    if (!itemId) {
      setError("No se proporcionó un ID de película.");
      setLoading(false);
      return; // Salimos de la función si no hay ID
    }

    const docRef = doc(db, "peliculas", itemId);

    getDoc(docRef)
      .then((respuesta) => {
        if (respuesta.exists()) {
          setPelicula({ id: respuesta.id, ...respuesta.data() });
        } else {
          setError("La película no fue encontrada.");
          setPelicula(null);
        }
      })
      .catch((err) => {
        console.error("Error al obtener el detalle de la película:", err);
        setError(
          "Error al cargar el detalle de la película. Inténtalo de nuevo más tarde."
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return <p className="loading">Cargando detalle de película...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!pelicula) {
    return <p>No se encontró la película.</p>;
  }

  return <ItemDetail pelicula={pelicula} />;
}
