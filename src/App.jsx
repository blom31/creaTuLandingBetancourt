import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import "./css/styles.css";

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
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
