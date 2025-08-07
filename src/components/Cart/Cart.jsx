import { useContext } from "react";
import { CartContext } from "../../provider/CartProvider";
import { CheckoutForm } from "../CheckoutForm/CheckoutForm";

export function Cart() {
  const result = useContext(CartContext);

  return (
    <div className="cart-container">
      <h1>Tu Carrito</h1>
      {result.cart.map((pelicula) => (
        <div className="cart-item" key={pelicula.id}>
          <img src={pelicula.poster} alt={pelicula.title} />
          <div className="cart-item-details">
            <h2>{pelicula.title}</h2>
            <p>Cantidad: {pelicula.quantity}</p>
            <p>Precio unitario: ${pelicula.precio}</p>
            <p>Subtotal: ${pelicula.precio * pelicula.quantity}</p>
          </div>
          <button
            onClick={() => result.removeItem(pelicula.id)}
            className="button-danger"
          >
            Eliminar
          </button>
        </div>
      ))}

      <div className="cart-summary">
        <h3>Total de la compra: ${result.totalPrecio().toFixed(2)}</h3>
        <CheckoutForm />
        <button onClick={() => result.clearCart()} className="button-secondary">
          Limpiar Carrito
        </button>
      </div>
    </div>
  );
}
