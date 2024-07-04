import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-b84b9.firebaseapp.com",
  projectId: "reactchat-b84b9",
  storageBucket: "reactchat-b84b9.appspot.com",
  messagingSenderId: "136243456318",
  appId: "1:136243456318:web:c96eda808340fe1f61246f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
