import { db } from "../services/firebase";
import { collection, addDoc } from "firebase/firestore";

export const cadastrarUsuario = async (user) => {
  try {
    const docRef = await addDoc(collection(db, "usuarios"), user);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e; // re-throw the error so it can be caught and handled elsewhere
  }
};

export const getUsuarioLogado = async (email, senha) => {
  try {
    const user = await db
      .collection("usuarios")
      .where("email", "==", email)
      .where("senha", "==", senha)
      .get();
    return user;
  } catch (error) {
    console.log(error);
  }
};
