import { Plus } from "lucide-react";
import { useContext, useState } from "react";
import { CartContext } from "../../provider/CartProvider";
import { ItemCount } from "../ItemCount/ItemCount";

export function ItemDetail({ pelicula }) {
  const [count, setCount] = useState(1);
  const stock = pelicula.stock;

  const handleRestar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleSumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const result = useContext(CartContext);
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
        <div>
          <strong>Disponible:</strong> {pelicula.stock}{" "}
          {pelicula.stock > 1 ? "entradas" : "entrada"}
          <ItemCount
            onSumar={handleSumar}
            onRestar={handleRestar}
            contador={count}
          />
        </div>
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
