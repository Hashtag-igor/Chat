import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCtNfXGncdZLMUkq9CBHlwBckig7vt_Drc",
  authDomain: "chat-22bcf.firebaseapp.com",
  projectId: "chat-22bcf",
  storageBucket: "chat-22bcf.appspot.com",
  messagingSenderId: "405557235188",
  appId: "1:405557235188:web:4af52545af0d7305bdbda1"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();