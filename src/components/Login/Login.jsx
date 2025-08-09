import { useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, db } from "../../firebase/firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";

export function Login() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("User:", currentUser);
    });
    return () => unsubscribe();
  }, []);

  // --- Nueva función para iniciar sesión con Google ---
  const handleSignIn = async () => {
    setError("");
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

      alert("¡Inicio de sesión con Google exitoso!");
    } catch (err) {
      console.error(err);
      setError("Error al iniciar sesión con Google: " + err.message);
    }
  };
  // Función para cerrar la sesión del usuario
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
      setError("Error al cerrar sesión: " + err.message);
    }
  };

  return (
    <section
      className="login_container"
      style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}
    >
      <h1>Inicia Sesión con Google</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

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
