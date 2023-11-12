import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, MESUREMENT_ID } from "@env";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MESUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
//Tentei usar o firestore mas não consegui
//Algum tipo de erro com o firebase está me impedindo de usar os Hooks da firebase, sejam eles de autenticação ou de armazenamento