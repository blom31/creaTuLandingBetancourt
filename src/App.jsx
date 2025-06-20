import { NavBar } from "./components/NavBar/NavBar.jsx";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting />
    </>
  );
}

export default App;
