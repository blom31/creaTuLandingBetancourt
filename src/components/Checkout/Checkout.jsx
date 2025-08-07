// src/components/Checkout.jsx
export function Checkout({ orderId, newOrder }) {
  // Recibimos el orderId como prop
  return (
    <section style={{ textAlign: "center", padding: "20px" }}>
      <h3>¡Compra realizada con éxito!</h3>
      <h3>nombre: {newOrder.buyer.displayName}</h3>
      <p>Gracias por tu compra. Tu número de ticket es:</p>
      <h2>{orderId}</h2>

      <p>Recibirás un correo electrónico con los detalles de tu pedido.</p>
    </section>
  );
}
