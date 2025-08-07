import { subirPeliculas } from "../../firebase/peliculas";

export function FilmUploader() {
  const handleUploadClick = () => {
    subirPeliculas();
  };

  return (
    <div>
      <h2>Cargar Películas a Firebase</h2>
      <p>
        Haz clic en el botón para cargar las películas desde el mock API a tu
        base de datos de Firebase Firestore.
      </p>
      <button onClick={handleUploadClick} disabled>
        Cargar Datos Ahora
      </button>
      <p>
        (Abre la consola del navegador para ver el progreso de la carga. Solo
        haz clic una vez para evitar duplicados)
      </p>
    </div>
  );
}
