import { useState, useContext } from "react";
import { CartContext } from "../../provider/CartProvider";
import { auth } from "../../firebase/firebaseConfig";
import { Checkout } from "../Checkout/Checkout";
import {
  createOrderObject,
  saveOrderToFirestore,
} from "../../services/orderService";
import { isUserLoggedIn, isCartEmpty } from "../../services/orderValidation";
import { toast } from "react-toastify";

export function CheckoutForm() {
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const cartContext = useContext(CartContext);

  // Se ejecuta al hacer clic en "Finalizar Compra"
  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = auth.currentUser; // Obtenemos el usuario actual

    if (!isUserLoggedIn(user)) {
      toast.warn("Debes iniciar sesión para finalizar la compra.");
      return;
    }
    // Validamos si el carrito está vacío
    if (isCartEmpty(cartContext.cart)) {
      toast.info("El carrito está vacío. Agrega películas para continuar.");
      return;
    }
    setIsLoading(true); // Activamos el estado de carga

    // Creamos el objeto de orden con los datos del usuario y del carrito
    const newOrder = createOrderObject(
      user,
      cartContext.cart,
      cartContext.totalPrecio()
    );

    try {
      const orderId = await saveOrderToFirestore(newOrder);
      setOrder({ ...newOrder, orderId });
      cartContext.clearCart();
      toast.success(`¡Compra realizada! Tu número de pedido es: ${orderId}`);
    } catch (error) {
      console.error("Error al guardar la orden:", error);
      toast.error("Hubo un error al procesar tu compra. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  if (order) {
    return <Checkout orderId={order.orderId} newOrder={order} />;
  }

  return (
    <div className="cart_final">
      <button
        className="btn-primary"
        onClick={handleSubmit}
        disabled={isLoading}
        aria-label="Finalizar compra"
      >
        {isLoading ? "Procesando..." : "Finalizar Compra"}
      </button>
    </div>
  );
}
