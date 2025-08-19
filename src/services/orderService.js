import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export const createOrderObject = (user, cart, total) => ({
  buyer: {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
  },
  items: cart,
  total,
  createdAt: new Date(),
});

export const saveOrderToFirestore = async (order) => {
  const orderId = crypto.randomUUID(); // o new Date().getTime().toString()
  const orderRef = doc(db, "orders", orderId);
  await setDoc(orderRef, order);
  return orderId;
};
