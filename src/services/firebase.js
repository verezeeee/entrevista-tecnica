import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };