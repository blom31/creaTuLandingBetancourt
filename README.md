# 🎬 creaTuLandingBetancourt

Aplicación web desarrollada en React para explorar, buscar y comprar películas y series. Permite autenticación con Google, gestión de carrito, finalización de compra y almacenamiento de órdenes en Firebase Firestore.

## Características

- **Listado de películas y series** con filtrado por categoría.
- **Detalle de cada película/serie**.
- **Carrito de compras** persistente y gestión de productos.
- **Finalización de compra** con generación de ticket y guardado en Firestore.
- **Autenticación de usuarios con Google** (Firebase Auth).
- **Carga de películas mockeadas** a Firestore (protegido para evitar duplicados).
- **Notificaciones** con react-toastify.
- **SPA** con React Router.
- **Estilos personalizados** con CSS/SCSS.

## Estructura del proyecto

```
src/
  components/         # Componentes reutilizables (NavBar, Cart, Login, Checkout, etc.)
  css/                # Estilos CSS
  firebase/           # Configuración de Firebase
  provider/           # Contexto global (Carrito)
  assets/             # Imágenes y recursos estáticos
public/
  index.html
```

## Instalación y uso

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/tuusuario/creaTuLandingBetancourt.git
   cd creaTuLandingBetancourt
   ```

2. **Instala las dependencias:**
   ```sh
   npm install
   ```

3. **Configura Firebase:**
   - Crea un proyecto en [Firebase Console](https://console.firebase.google.com/).
   - Habilita Firestore y Authentication (Google).
   - Copia tu configuración en `src/firebase/firebaseConfig.js`.

4. **Inicia la aplicación:**
   ```sh
   npm run dev
   ```

5. **Abre en tu navegador:**  
   [http://localhost:5173](http://localhost:5173)

## Scripts disponibles

- `npm run dev` – Servidor de desarrollo.
- `npm run build` – Build de producción.
- `npm run preview` – Previsualización de la build.
- `npm run lint` – Linter.

## Dependencias principales

- [React](https://react.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Firebase](https://firebase.google.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [SweetAlert2](https://sweetalert2.github.io/)
- [Vite](https://vitejs.dev/)

## Notas

- El botón de carga de películas a Firestore está deshabilitado para evitar duplicados.
- El login solo permite autenticación con Google.
- El carrito y las órdenes se almacenan en Firestore bajo la colección `orders`.
- Al finalizar la compra, se genera un ticket con el número de pedido.

## Autor

Desarrollado por Olga Betancourt.

---

¡Gracias por visitar el proyecto! Si tienes sugerencias o encuentras algún bug, abre un issue o
