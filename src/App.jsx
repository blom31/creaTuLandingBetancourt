import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { Cart } from "./components/Cart/Cart.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { FilmUploader } from "./components/FilmUpLoader/FilmUploader.jsx";
import "./css/styles.css";
import { Login } from "./components/Login/Login.jsx";

function App() {
  const saludar = "¡Explora nuestra colección de películas y series.!";
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greet={saludar} />} />
        <Route
          path="/categoria/:categoriaId"
          element={<ItemListContainer greet={saludar} />}
        />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/uploader" element={<FilmUploader />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
