export async function getPeliculas() {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=a36a0107dd6b1ea8569d698315062324&language=es-ES&page=1"
    );
    if (!response.ok) {
      throw new Error("Error al obtene las películas");
    }
    const getPeliculas = await response.json();
    const peliculas = getPeliculas.results.map((pelicula) => ({
      ...pelicula,
      precio: generarPrecio(),
      hora: generarHorario(),
      categoria: generaCategorias(),
    }));
    return peliculas;
  } catch (error) {
    console.error("Fallo en la petición:", error);
  }
}
export async function getPeliculasById(id) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=a36a0107dd6b1ea8569d698315062324&language=es-ES&page=1`
    );
    if (!response.ok) throw new Error("Error al obtener la película por ID");
    const pelicula = await response.json();
    return {
      ...pelicula,
      precio: generarPrecio(),
      hora: generarHorario(),
      categoria: generaCategorias(),
    };
  } catch (error) {
    console.error("Fallo en la petición del detalle:", error);
    return null;
  }
}

export function generarPrecio() {
  const precios = [1500, 1800, 2000, 2200, 2500]; // precios posibles
  const indice = Math.floor(Math.random() * precios.length);
  return precios[indice];
}

export function generarHorario() {
  const horarios = ["14:00", "16:30", "19:00", "21:15", "23:00"]; // horarios posibles
  const indice = Math.floor(Math.random() * horarios.length);
  return horarios[indice];
}
export function generaCategorias() {
  const categorias = ["series", "peliculas"];
  const indice = Math.floor(Math.random() * categorias.length);
  return categorias[indice];
}
