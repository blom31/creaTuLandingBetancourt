import { db } from "../firebase/firebaseConfig.js";
import { doc, collection, writeBatch } from "firebase/firestore";

export const fetchPeliculas = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1087192,
          resumen:
            "En la escarpada isla de Mema, donde vikingos y dragones han sido enemigos acérrimos durante generaciones, Hipo se desmarca desafiando siglos de tradición cuando entabla amistad con Desdentao, un temido dragón Furia Nocturna. Su insólito vínculo revela la verdadera naturaleza de los dragones y desafía los cimientos de la sociedad vikinga.",
          popularidad: 904.7178,
          release_date: "2025-06-06",
          title: "Cómo entrenar a tu dragón",
          vote_average: 8.09,
          poster:
            "https://res.cloudinary.com/dv9yjyclh/image/upload/v1753491942/dragon_ukpeeo.png",
          categoria: "series",
          precio: 4000,
        },
        {
          id: 1071585,
          resumen:
            "Con el futuro de la existencia humana en juego, Gemma se da cuenta de que la única opción es resucitar a M3GAN y darle unas cuantas mejoras, haciéndola más rápida, más fuerte y más letal.",
          popularidad: 608.4451,
          release_date: "2025-06-25",
          title: "M3GAN 2.0",
          vote_average: 7.652,
          poster:
            "https://res.cloudinary.com/dv9yjyclh/image/upload/v1753491941/megan_mmgl4f.png",
          categoria: "pelicula",
          precio: 4500,
        },
        {
          id: 552524,
          resumen:
            "La conmovedora y divertidísima historia de una solitaria niña hawaiana y el extraterrestre fugitivo que la ayuda a reparar su desestructurada familia.",
          popularidad: 565.4793,
          release_date: "2025-05-17",
          title: "Lilo y Stitch",
          vote_average: 7.297,
          poster:
            "https://res.cloudinary.com/dv9yjyclh/image/upload/v1753491942/lilo_stitch_ghqj3b.png",
          categoria: "series",
          precio: 6000,
        },
        {
          id: 1311031,
          resumen:
            "El Cuerpo de Cazadores de Demonios se enfrenta a los Doce Kizuki restantes antes de enfrentarse a Muzan en el Castillo del Infinito para derrotarlo de una vez por todas.",
          popularidad: 508.5982,
          release_date: "2025-07-18",
          title:
            "Guardianes de la noche: Kimetsu no Yaiba - La fortaleza infinita",
          vote_average: 6.646,
          poster:
            "https://res.cloudinary.com/dv9yjyclh/image/upload/v1753491939/guardianes_ebp8n0.png",
          categoria: "pelicula",
          precio: 8000,
        },
        {
          id: 1315986,
          resumen:
            "Al despertar en una ciudad desconocida, un hombre que no recuerda quién es debe enfrentarse a los misterios de su propia identidad. Pero su desesperada búsqueda por descubrir su pasado le enfrenta a un poderoso enemigo, lo que le llevará a un enfrentamiento que sellará su destino y revelará finalmente su verdadera identidad.",
          popularidad: 382.1417,
          release_date: "2025-01-13",
          title: "Man with No Past",
          vote_average: 6.703,
          poster:
            "https://res.cloudinary.com/dv9yjyclh/image/upload/v1753491938/hombre-sin-memoria_c0qswo.png",
          categoria: "series",
          precio: 5000,
        },
        {
          id: 1061474,
          resumen:
            "En un mundo que ha perdido la fe en la bondad, Superman lucha por reconciliar su herencia kryptoniana con los valores humanos que moldearon su carácter. Criado en la Tierra, representa la verdad, la justicia y el estilo americano, pero debe enfrentarse a un mundo cínico que cuestiona sus ideales. Entre el deber de proteger a la humanidad y la búsqueda de su identidad, Superman demuestra que la esperanza y la bondad nunca pasan de moda, incluso en los tiempos más oscuros, inspirando a otros a creer en un futuro mejor.",
          popularidad: 333.5035,
          release_date: "2025-07-09",
          title: "Superman",
          vote_average: 7.431,
          poster:
            "https://res.cloudinary.com/dv9yjyclh/image/upload/v1753491937/superman_ftktnp.png",
          categoria: "pelicula",
          precio: 5500,
        },
        {
          id: 1011477,
          resumen:
            "Tras una tragedia familiar, el prodigio del kung fu Li Fong se ve obligado a abandonar su hogar en Pekín y trasladarse a Nueva York con su madre. Cuando un nuevo amigo necesita su ayuda, Li se presenta a una competición de kárate, pero sus habilidades no son suficientes. El profesor de kung fu de Li, el Sr. Han, pide ayuda al Karate Kid original, Daniel LaRusso, y Li aprende una nueva forma de luchar, fusionando sus dos estilos en uno solo para el enfrentamiento definitivo de artes marciales.",
          popularidad: 317.8487,
          release_date: "2025-05-08",
          title: "Karate Kid: Legends",
          vote_average: 7.223,
          poster:
            "https://res.cloudinary.com/dv9yjyclh/image/upload/v1753491937/karate-kid_zizohz.png",
          categoria: "series",
          precio: 6000,
        },
        {
          id: 1124619,
          resumen:
            "Cuando un grupo de mercenarios toma como rehén a una lujosa boda, no tienen idea de lo que les espera, ya que la Dama de Honor es en realidad una agente secreta lista para hacer llover fuego del infierno sobre cualquiera que arruine la boda de su mejor amiga.",
          popularidad: 315.3122,
          release_date: "2025-06-19",
          title: "Bride Hard",
          vote_average: 5.897,
          poster:
            "https://res.cloudinary.com/dv9yjyclh/image/upload/v1753491936/bride-hard_laetbg.png",
          categoria: "pelicula",
          precio: 7500,
        },
        {
          id: 1119878,
          resumen:
            "Mike viaja a Nepal para esparcir las cenizas de su hermano en el Everest. Cuando Mike y su guía se topan con mercenarios mientras viajan en un autobús se ven obligados a luchar para salvarse a sí mismos, a los pasajeros y al país.",
          popularidad: 296.3004,
          release_date: "2025-06-27",
          title: "Ice Road: Venganza",
          vote_average: 6.965,
          poster:
            "https://res.cloudinary.com/dv9yjyclh/image/upload/v1753491934/ice-road_o2iynd.png",
          categoria: "series",
          precio: 7000,
        },
        {
          id: 617126,
          resumen:
            "Con un mundo retrofuturista inspirado en los años 60 como telón de fondo, la Primera Familia de Marvel deberá hacer frente a su mayor desafío hasta la fecha. Obligados a buscar el equilibrio entre su papel de héroes y sus fuertes vínculos familiares, tendrán que defender la Tierra de un hambriento dios espacial llamado Galactus y su intrigante heraldo, Estela Plateada.",
          popularidad: 279.4076,
          release_date: "2025-07-23",
          title: "Los Cuatro Fantásticos: Primeros pasos",
          vote_average: 7.296,
          poster:
            "https://res.cloudinary.com/dv9yjyclh/image/upload/v1753491933/los-fantasticos_mkwlmf.png",
          categoria: "pelicula",
          precio: 5000,
        },
        {
          id: 541671,
          resumen:
            "Eve Macarro es una asesina entrenada por la Ruska Roma desde su infancia, la misma organización criminal encargada del adiestramiento de John Wick. En esta violenta historia de venganza, Eve intentará por todos los medios averiguar quién está detrás del asesinato de su padre. En su lucha por conocer la verdad, tendrá que atenerse a las normas de la Alta Mesa y, por supuesto, a las del Hotel Continental, donde descubrirá que existen secretos ocultos sobre su pasado.",
          popularidad: 252.489,
          release_date: "2025-06-04",
          title: "Bailarina",
          vote_average: 7.49,
          poster:
            "https://res.cloudinary.com/dv9yjyclh/image/upload/v1753491932/ballerina_bybcvr.png",
          categoria: "series",
          precio: 6000,
        },
        {
          id: 1234821,
          resumen:
            'Cinco años después de los eventos de "Dominion", la ecología del planeta ha demostrado ser insoportable para los dinosaurios, donde los pocos que quedan viven aislados en las regiones ecuatoriales. Zora Bennett es contratada para dirigir a un equipo de especialistas cuyo objetivo es conseguir el material genético de las tres criaturas más grandes, las cuales tienen en su ADN la clave para fabricar un medicamento que aportará grandes beneficios a la humanidad. Pero la operación se cruzará con una familia cuyo barco volcó y todos acabarán en una isla prohibida ocupada por dinosaurios de numerosas especies, donde tendrán que hacer lo imposible para sobrevivir.',
          popularidad: 237.1881,
          release_date: "2025-07-01",
          title: "Jurassic World: El renacer",
          vote_average: 6.353,
          poster:
            "https://res.cloudinary.com/dv9yjyclh/image/upload/v1753491932/jurassi_ne1vnb.png",
          categoria: "pelicula",
          precio: 4000,
        },
        {
          id: 1058537,
          resumen:
            "Cuando un veterano de la guerra de Irak recibe la llamada de un poder superior, se embarca en una misión para impedir que un ángel caído levante un ejército de muertos que se apodere del mundo.",
          popularidad: 235.2762,
          release_date: "2024-07-09",
          title: "Angels Fallen: Warriors of Peace",
          vote_average: 5.4,
          poster:
            "https://res.cloudinary.com/dv9yjyclh/image/upload/v1753491931/angels-fallen_lpzhem.png",
          categoria: "series",
          precio: 4500,
        },
        {
          id: 1374534,
          resumen:
            "Un entregado policía municipal y un exagente temerario se ven obligados a colaborar. Juntos desatarán el caos por las calles de Róterdam.",
          popularidad: 219.4051,
          release_date: "2025-07-10",
          title: "Almost Cops",
          vote_average: 5.9,
          poster:
            "https://res.cloudinary.com/dv9yjyclh/image/upload/v1753491929/almost-cop_ucruh1.png",
          categoria: "pelicula",
          precio: 8000,
        },
        {
          id: 803796,
          resumen:
            "Cuando no están llenando estadios, las superestrellas del K-pop Rumi, Mira y Zoey usan sus poderes secretos para proteger a sus fans de una amenaza sobrenatural.",
          popularidad: 211.4319,
          release_date: "2025-06-20",
          title: "Las guerreras k-pop",
          vote_average: 8.522,
          poster:
            "https://res.cloudinary.com/dv9yjyclh/image/upload/v1753491929/las-guerreras_g4dd5y.png",
          categoria: "series",
          precio: 7000,
        },
        {
          id: 986056,
          original_language: "en",
          resumen:
            "Un grupo de supervillanos poco convencional es reclutado para hacer misiones para el gobierno: Yelena Belova, Bucky Barnes, Red Guardian, Ghost, Taskmaster y John Walker. Después de verse atrapados en una trampa mortal urdida por Valentina Allegra de Fontaine, estos marginados deben embarcarse en una peligrosa misión que les obligará a enfrentarse a los recovecos más oscuros de su pasado.",
          popularidad: 201.3352,
          release_date: "2025-04-30",
          title: "Thunderbolts*",
          vote_average: 7.413,
          poster:
            "https://res.cloudinary.com/dv9yjyclh/image/upload/v1753491929/thunderbolts_sdpjmu.png",
          categoria: "pelicula",
          precio: 7500,
        },
        {
          id: 574475,
          resumen:
            "Acosada por una violenta pesadilla recurrente, la estudiante universitaria Stefanie se dirige a casa para localizar a la única persona que podría ser capaz de romper el ciclo y salvar a su familia de la espeluznante muerte que inevitablemente les espera a todos.",
          popularidad: 195.4472,
          release_date: "2025-05-14",
          title: "Destino final: Lazos de sangre",
          vote_average: 7.18,
          poster:
            "https://res.cloudinary.com/dv9yjyclh/image/upload/v1753491928/destine-final_uzorly.png",
          categoria: "series",
          precio: 6000,
        },
        {
          id: 846422,
          resumen:
            "Andy y su equipo de guerreros inmortales luchan con un propósito renovado y se enfrentan a un nuevo y poderoso enemigo que amenaza su misión de proteger a la humanidad.",
          popularidad: 167.3005,
          release_date: "2025-07-01",
          title: "La vieja guardia 2",
          vote_average: 6.1,
          poster:
            "https://res.cloudinary.com/dv9yjyclh/image/upload/v1753491928/la-vieja-guardia_lff3zl.png",
          categoria: "pelicula",
          precio: 6500,
        },
        {
          id: 749170,
          resumen:
            "El primer ministro del Reino Unido y el presidente de EE. UU. tienen una rivalidad pública que pone en riesgo la alianza entre sus países. Pero cuando se convierten en el blanco de un poderoso enemigo, se ven obligados a confiar el uno en el otro. Aliados con Noel, una agente del MI6, intenta frustrar una conspiración que amenaza al mundo libre.",
          popularidad: 156.9191,
          release_date: "2025-07-02",
          title: "Jefes de Estado",
          vote_average: 6.908,
          poster:
            "https://res.cloudinary.com/dv9yjyclh/image/upload/v1753491926/jefes-de-estado_qpgmrv.png",
          categoria: "series",
          precio: 4000,
        },
        {
          id: 911430,
          resumen:
            "El mítico piloto Sonny Hayes vuelve de su retiro, persuadido para liderar un equipo de Fórmula 1 en apuros y guiar a su joven promesa, en busca de una nueva oportunidad de éxito.",
          popularidad: 144.233,
          release_date: "2025-06-25",
          title: "F1 la película",
          vote_average: 7.617,
          poster:
            "https://res.cloudinary.com/dv9yjyclh/image/upload/v1753491828/formula-uno_dnv6vt.png",
          categoria: "pelicula",
          precio: 4500,
        },
      ]);
    }, 1000);
  });
};

const peliculasCollection = collection(db, "peliculas");
export const subirPeliculas = async () => {
  try {
    const peliculas = await fetchPeliculas();
    const batch = writeBatch(db);

    peliculas.forEach((pelicula) => {
      const docRef = doc(peliculasCollection, String(pelicula.id));
      batch.set(docRef, pelicula);
    });

    await batch.commit();
    console.log("Películas subidas correctamente a Firebase Firestore.");
  } catch (error) {
    console.error("Error al subir las películas a Firebase:", error);
  }
};
