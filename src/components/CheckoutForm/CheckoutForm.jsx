export function CheckoutForm() {
  return (
    <form action="" method="post">
      <label htmlFor="nombre">Nombre:</label>
      <input type="text" name="nombre" />

      <label htmlFor="email">Correo Electrónico:</label>
      <input type="email" name="email" />

      <label htmlFor="telefono">Teléfono:</label>
      <input type="text" name="telefono" />

      <button type="submit">Comprar</button>
    </form>
  );
}
