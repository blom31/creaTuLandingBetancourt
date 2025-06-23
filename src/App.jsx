import { NavBar } from "./components/NavBar/NavBar.jsx";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import "./css/styles.css";

const saludar = "¡Explora nuestra colección de películas y series.!";
function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greet={saludar} />
      <Footer />
    </>
  );
}

export default App;
