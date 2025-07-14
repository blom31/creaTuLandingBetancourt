import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPeliculas } from "../../fetchApi"; // Asegurate que esto devuelva un array
import { ItemDetail } from "../ItemDetail/ItemDetail";

export function ItemDetailContainer() {
  const { itemId } = useParams();
  const [pelicula, setPelicula] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getPeliculas()
      .then((data) => {
        const encontrada = data.find((peli) => peli.id === parseInt(itemId));
        setPelicula(encontrada || null);
      })
      .catch((error) => {
        console.error("Error al obtener detalle:", error);
        setPelicula(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) return <p>Cargando detalle...</p>;

  if (!pelicula) return <p>No se encontró la película.</p>;

  return <ItemDetail pelicula={pelicula} />;
}
