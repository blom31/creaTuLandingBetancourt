# CineApp 🎬

Aplicación web desarrollada en React para explorar, buscar y comprar entradas de películas y series. Incluye autenticación con Google, carrito de compras, integración con Firebase Firestore y carga de datos mockeados.

## Características

- Listado de películas y series con filtrado por categoría.
- Detalle de cada película/serie.
- Carrito de compras persistente.
- Finalización de compra y generación de ticket.
- Autenticación de usuarios con Google (Firebase Auth).
- Carga de datos mockeados a Firestore (botón deshabilitado para evitar duplicados).
- Estilos personalizados con SCSS y CSS.
- Navegación SPA con React Router.

## Estructura del proyecto

```
src/
  components/         # Componentes reutilizables (NavBar, Cart, Login, etc.)
  css/                # CSS generado desde SCSS
  scss/               # Archivos fuente SCSS (estilos)
  firebase/           # Configuración e integración con Firebase
  provider/           # Contexto global para el carrito
  services/           # Servicios para consumir APIs externas
  assets/             # Imágenes y recursos estáticos
public/
  vite.svg            # Ícono de la app
index.html            # HTML principal
vite.config.js        # Configuración de Vite
```

## Instalación

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/tuusuario/cineapp.git
   cd cineapp
   ```

2. **Instala las dependencias:**
   ```sh
   npm install
   ```

3. **Compila los estilos SCSS (opcional, si editas los .scss):**
   ```sh
   npm run sass
   ```

4. **Configura tu proyecto de Firebase:**
   - Crea un proyecto en [Firebase Console](https://console.firebase.google.com/).
   - Habilita Firestore y Authentication (Google).
   - Copia tu configuración en `src/firebase/firebaseConfig.js` (ya hay una de ejemplo).

5. **Inicia la aplicación en modo desarrollo:**
   ```sh
   npm run dev
   ```

6. **Abre en tu navegador:**  
   [http://localhost:5173](http://localhost:5173) (o el puerto que indique la terminal).

## Scripts disponibles

- `npm run dev` – Inicia el servidor de desarrollo.
- `npm run build` – Genera la versión de producción.
- `npm run preview` – Previsualiza la build de producción.
- `npm run lint` – Ejecuta ESLint.
- `npm run sass` – Compila los archivos SCSS a CSS.

## Dependencias principales

- [React](https://react.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Firebase](https://firebase.google.com/)
- [Lucide React](https://lucide.dev/)
- [SweetAlert2](https://sweetalert2.github.io/)
- [Vite](https://vitejs.dev/)

## Notas

- El botón de carga de películas a Firestore está deshabilitado para evitar duplicados.
- El login solo permite autenticación con Google.
- El carrito y las órdenes se almacenan en Firestore bajo la colección `orders`.

## Autor

Desarrollado por Olga Betancourt.

---

¡Gracias por visitar CineApp! Si tienes sugerencias o encuentras algún bug, no dudes en abrir un
