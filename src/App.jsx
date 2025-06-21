import { NavBar } from "./components/NavBar/NavBar.jsx";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import "./App.css";

const name = "Olga";
function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer nombre={name} />
    </>
  );
}

export default App;
