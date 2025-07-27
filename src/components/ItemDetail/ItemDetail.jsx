import { Plus } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../../provider/CartProvider";

export function ItemDetail({ pelicula }) {
  const result = useContext(CartContext);
  console.log("Objeto pelicula en ItemDetail:", pelicula);
  const handleOnAdd = () => {
    result.addItem(pelicula, 1);
  };

  return (
    <div className="item_detail">
      <div className="item_img_container">
        <img
          src={pelicula.poster}
          alt={pelicula.title}
          className="item_detail_img"
        />
      </div>
      <div className="item_info">
        <h2>{pelicula.title}</h2>
        <p>
          <strong>Descripción:</strong> {pelicula.resumen || "No disponible."}
        </p>
        <p>
          <strong>Fecha de estreno:</strong> {pelicula.release_date}
        </p>
        <p>
          <strong>Categoría:</strong> {pelicula.categoria}
        </p>
        <p>
          <strong>$:</strong> {pelicula.precio}
        </p>
        <div className="item_actions">
          <button className="btn-primary">Comprar ahora</button>
          <button className="btn-primary" onClick={handleOnAdd}>
            <Plus />
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
