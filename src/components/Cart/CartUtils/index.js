// Cart/cartUtils/index.js

// Verifica si un ítem está en el carrito
export const isInCart = (cart, id) => {
  return cart.some((item) => item.id === id);
};

//  Agrega un ítem al carrito o actualiza su cantidad
export const addItemToCart = (cart, item, quantity) => {
  if (isInCart(cart, item.id)) {
    return cart.map((peli) =>
      peli.id === item.id
        ? { ...peli, quantity: peli.quantity + quantity }
        : peli
    );
  } else {
    return [...cart, { ...item, quantity }];
  }
};
// Elimina un ítem del carrito por ID
export const removeItemFromCart = (cart, id) => {
  return cart.filter((item) => item.id !== id);
};
// Calcula el total de unidades
export const totalItems = (cart) => {
  return cart.reduce((acc, item) => acc + item.quantity, 0);
};
//  Calcula el precio total
export const totalPrecio = (cart) => {
  return cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
};
