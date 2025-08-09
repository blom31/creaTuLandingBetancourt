import { useState, useContext } from "react";
import { CartContext } from "../../provider/CartProvider";
import { auth, db } from "../../firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { Checkout } from "../Checkout/Checkout";

export function CheckoutForm() {
  const [order, setOrder] = useState(null);
  const cartContext = useContext(CartContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = auth.currentUser;

    if (!user) {
      alert("Debes iniciar sesión para finalizar la compra.");
      return;
    }

    if (cartContext.cart.length === 0) {
      alert("El carrito está vacío. Agrega películas para continuar.");
      return;
    }

    const newOrder = {
      buyer: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      },
      items: cartContext.cart,
      total: cartContext.totalPrecio(),
      createdAt: new Date(),
    };

    try {
      const newOrderRef = doc(db, "orders", new Date().getTime().toString());
      await setDoc(newOrderRef, newOrder);

      setOrder({ ...newOrder, orderId: newOrderRef.id });
      cartContext.clearCart();

      console.log();
      `¡Compra realizada con éxito! Tu número de ticket es: ${newOrderRef.id}`;
    } catch (error) {
      console.error("Error al guardar la orden:", error);
      console.log();
      ("Hubo un error al procesar tu compra. Inténtalo de nuevo.");
    }
  };

  if (order) {
    return <Checkout orderId={order.orderId} newOrder={order} />;
  }

  return (
    <div className="cart_final">
      <button className="btn-primary" onClick={handleSubmit}>
        Finalizar Compra
      </button>
    </div>
  );
}
