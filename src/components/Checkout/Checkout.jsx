export function Checkout({ orderId, newOrder }) {
  return (
    <section className="ticket">
      <h3>¡Compra realizada con éxito!</h3>
      <h3>Nombre: {newOrder.buyer.displayName}</h3>
      <p>Gracias por tu compra. Tu número de ticket es:</p>
      <h2>{orderId}</h2>
    </section>
  );
}
