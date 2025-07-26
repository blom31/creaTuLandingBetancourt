import { initializeApp } from "firebase/app";
// ¡Necesitas importar getFirestore para interactuar con la base de datos!
import { getFirestore } from "firebase/firestore"; // <-- ¡IMPORTANTE!

const firebaseConfig = {
  apiKey: "AIzaSyCzq8_64Oidamlrf_1Ou8TOaRfz80aBhME",
  authDomain: "film-app-10f4e.firebaseapp.com",
  projectId: "film-app-10f4e",
  storageBucket: "film-app-10f4e.firebasestorage.app",
  messagingSenderId: "914146237740",
  appId: "1:914146237740:web:d07b65dd4f81df9dbfa089",
  measurementId: "G-45KLCLLKWW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// ¡Obtener una referencia a Firestore y exportarla!
export const db = getFirestore(app); // <-- ¡IMPORTANTE!
