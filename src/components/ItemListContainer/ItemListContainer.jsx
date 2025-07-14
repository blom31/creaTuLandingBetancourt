import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPeliculas } from "../../fetchApi";
import { ItemList } from "../ItemList/ItemList";

export function ItemListContainer({ greet }) {
  const { categoriaId } = useParams(); // Ahora esperamos "series" o "peliculas"
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getPeliculas()
      .then((data) => {
        // Filtramos según la categoría artificial que vos generaste
        const filtradas = categoriaId
          ? data.filter((p) => p.categoria === categoriaId)
          : data;
        setPeliculas(filtradas);
      })
      .catch((error) => {
        console.error("Error al cargar películas:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoriaId]);

  if (loading) return <h3>Cargando películas...</h3>;

  return (
    <div className="item_list_container">
      <div className="saludo"></div>
      <ItemList peliculas={peliculas} />
    </div>
  );
}
