import { useContext } from "react";
import { CartContext } from "../../provider/CartProvider";

export function Cart() {
  const cantidad = useContext(CartContext);

  return (
    <div>
      <h3>Carrito´s Films</h3>
      <h5>Carrito vacío</h5>
      <h4>Tienes {cantidad.cantidad}</h4>
    </div>
  );
}
