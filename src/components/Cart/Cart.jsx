import { useContext } from "react";
import { CartContext } from "../../provider/CartProvider";
import { CheckoutForm } from "../CheckoutForm/CheckoutForm";

export function Cart() {
  const result = useContext(CartContext);

  return (
    <section className="cart_container">
      <h1>Tu Carrito</h1>
      <div className="cart">
        <div className="cart_info">
          {result.cart.map((pelicula) => (
            <div className="cart_item" key={pelicula.id}>
              <div className="cart_img_container">
                <img
                  className="cart_detail_img"
                  src={pelicula.poster}
                  alt={pelicula.title}
                />
              </div>
              <div className="cart_item_details">
                <h2>{pelicula.title}</h2>
                <div className="cart_detail">
                  <p>Cantidad: {pelicula.quantity}</p>
                  <p>Precio unitario: ${pelicula.precio}</p>
                  <p>Subtotal: ${pelicula.precio * pelicula.quantity}</p>
                </div>
              </div>

              <div className="cart_button_eliminar">
                <button
                  className="btn-primary"
                  onClick={() => result.removeItem(pelicula.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart_summary">
          <h3 className="cart_total">
            Total de la compra: ${result.totalPrecio().toFixed(2)}
          </h3>
          <CheckoutForm />
          <button onClick={() => result.clearCart()} className="btn-primary">
            Limpiar Carrito
          </button>
        </div>
      </div>
    </section>
  );
}
