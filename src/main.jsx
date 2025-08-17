import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CustomCartProvider } from "./provider/CartProvider.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/*Envuelve la app y provee el estado del carrito a todos los componentes hijos*/}
      <CustomCartProvider>
        <App />
      </CustomCartProvider>
    </BrowserRouter>
  </StrictMode>
);
