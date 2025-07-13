export async function getPeliculas() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=a36a0107dd6b1ea8569d698315062324"
    );
    if (!response.ok) {
      throw new Error("Error al obtene las películas");
    }
    const getPeliculas = await response.json();
    const peliculas = getPeliculas.results;
    return peliculas;
  } catch (error) {
    console.error("Fallo en la petición:", error);
  }
}
export async function getPeliculasById(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=a36a0107dd6b1ea8569d698315062324`
  );
  if (!response.ok) {
    throw new Error("Error al obtener la película por ID");
  }
  const pelicula = await response.json();
  return pelicula;
}
