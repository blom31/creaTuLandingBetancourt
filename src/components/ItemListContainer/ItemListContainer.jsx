export function ItemListContainer({ greeting }) {
  greeting = "¡Bienvenido a nuestra tienda de películas y series!";

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <p>Explora nuestra colección de películas y series.</p>
      {/* Aquí podrías agregar más contenido, como una lista de productos */}
    </div>
  );
}
