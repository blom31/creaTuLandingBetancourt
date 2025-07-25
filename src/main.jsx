import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CustomCartProvider } from "./provider/CartProvider.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CustomCartProvider>
        <App />
      </CustomCartProvider>
    </BrowserRouter>
  </StrictMode>
);
