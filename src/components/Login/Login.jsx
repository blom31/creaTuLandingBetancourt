import { useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, db } from "../../firebase/firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export function Login() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("User:", currentUser);
    });
    return () => unsubscribe();
  }, []);

  // --- Nueva función para iniciar sesión con Google ---
  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      // 1. Iniciar sesión con una ventana emergente de Google
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;

      // 2. Verificar si el usuario ya existe en Firestore
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      // Si el documento no existe, lo creamos
      if (!userDoc.exists()) {
        await setDoc(userDocRef, {
          email: user.email,
          displayName: user.displayName, // El nombre del usuario de Google
          photoURL: user.photoURL, // La URL de la foto de perfil de Google
          provider: userCredential.providerId,
          createdAt: new Date(),
        });
      }

      toast.success(`¡Bienvenido, ${user.displayName}!`, {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (err) {
      toast.error("Error al iniciar sesión: " + err.message, {
        position: "bottom-center",
        autoClose: 5000,
      });
    }
  };
  // Función para cerrar la sesión del usuario
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast.info("Has cerrado la sesión.", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (err) {
      console.error(err);
      toast.error("Error al cerrar sesión: " + err.message, {
        position: "bottom-center",
        autoClose: 5000,
      });
    }
  };

  return (
    <section className="login_container">
      <h1>Inicia Sesión con Google</h1>

      {user ? (
        // UI para usuario autenticado
        <div>
          <h3>Bienvenido, {user.displayName || user.email}</h3>

          <button className="btn-primary" onClick={handleSignOut}>
            Cerrar Sesión
          </button>
        </div>
      ) : (
        // UI para usuario no autenticado
        <div>
          <button className="btn-primary" type="button" onClick={handleSignIn}>
            Iniciar Sesión con Google
          </button>
        </div>
      )}
    </section>
  );
}
