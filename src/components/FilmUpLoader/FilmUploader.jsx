import { subirPeliculas } from "../../firebase/peliculas";

export function FilmUploader() {
  const handleUploadClick = () => {
    subirPeliculas();
  };

  return (
    <section className="uploader_container">
      <h2>Cargar Películas a Firebase</h2>
      <div className="uploaderInfo">
        <p>
          Haz clic en el botón para cargar las películas desde el mock API a tu
          base de datos de Firebase Firestore.
        </p>
        <button onClick={handleUploadClick} disabled>
          Cargar Datos Ahora
        </button>
        <p>(Botón inhabilitado para evitar duplicados)</p>
      </div>
    </section>
  );
}
