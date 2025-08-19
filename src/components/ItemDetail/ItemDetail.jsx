import { useContext, useState } from "react";
import { CartContext } from "../../provider/CartProvider";
import { ItemCount } from "../ItemCount/ItemCount";

export function ItemDetail({ pelicula }) {
  // Estado local para controlar la cantidad seleccionada
  const [count, setCount] = useState(1);
  const stock = pelicula.stock;

  // Función para disminuir la cantidad, sin bajar de 1
  const handleRestar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // Función para aumentar la cantidad, sin superar el stock
  const handleSumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  // Accede al contexto del carrito para usar sus funciones
  const result = useContext(CartContext);
  // Función que agrega la película al carrito con la cantidad seleccionada
  const handleOnAdd = () => {
    result.addItem(pelicula, 1);
  };

  return (
    <section className="item_detail">
      <div className="item_img_container">
        <img
          src={pelicula.poster}
          alt={pelicula.title}
          className="item_detail_img"
        />
      </div>
      <div className="item_info">
        <h2>{pelicula.title}</h2>
        <div>
          <p>
            <strong>Descripción:</strong> {pelicula.resumen || "No disponible."}
          </p>
          <div className="item-date">
            <p>
              <strong>Fecha de estreno:</strong> {pelicula.release_date}
            </p>
            <p>
              <strong>Categoría:</strong> {pelicula.categoria}
            </p>
            <p>
              <strong>Precio:</strong>{" "}
              {Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
              }).format(pelicula.precio)}
            </p>
          </div>
        </div>
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
          {/* <button className="btn-primary">Comprar ahora</button> */}
          <button className="btn-primary" onClick={handleOnAdd}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </section>
  );
}
