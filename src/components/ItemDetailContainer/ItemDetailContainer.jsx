// src/components/ItemDetailContainer/ItemDetailContainer.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// Importamos las funciones necesarias de Firestore
import { doc, getDoc } from "firebase/firestore";
// Importamos la instancia de la base de datos
import { db } from "../../firebase/firebaseConfig"; // Asegúrate de que 'db' se exporta desde aquí

import { ItemDetail } from "../ItemDetail/ItemDetail";

export function ItemDetailContainer() {
  const { itemId } = useParams(); // Obtiene el ID del ítem de la URL
  const [pelicula, setPelicula] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Añadimos un estado para errores

  useEffect(() => {
    setLoading(true);
    setError(null); // Reseteamos cualquier error anterior

    // Verificamos si itemId existe antes de intentar la consulta a Firestore
    if (!itemId) {
      setError("No se proporcionó un ID de película.");
      setLoading(false);
      return; // Salimos de la función si no hay ID
    }

    // 1. Crear una referencia al documento específico en Firestore
    // doc(db, 'nombreColeccion', 'idDocumento')
    const docRef = doc(db, "peliculas", itemId); // 'peliculas' es el nombre de tu colección

    // 2. Obtener el documento desde Firestore
    getDoc(docRef)
      .then((respuesta) => {
        if (respuesta.exists()) {
          // Si el documento existe, extraemos sus datos y su ID
          setPelicula({ id: respuesta.id, ...respuesta.data() });
        } else {
          // Si el documento no existe
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
        setLoading(false); // La carga ha terminado, ya sea con éxito o con error
      });
  }, [itemId]); // El efecto se re-ejecutará cada vez que el itemId de la URL cambie

  if (loading) {
    return <p>Cargando detalle de película...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  // Si no hay película y no hay error, pero la carga ya terminó (por ejemplo, ID inválido)
  if (!pelicula) {
    return <p>No se encontró la película.</p>;
  }

  // Si todo está bien, pasamos la película a ItemDetail
  return <ItemDetail pelicula={pelicula} />;
}
// Asegúrate de que este componente se importe y use en tu aplicación donde sea necesario.
