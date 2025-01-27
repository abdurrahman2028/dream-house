import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARactMXc6BGFErGVX4fq_iL4CeYo0LSP0",
  authDomain: "dream-house-482937.firebaseapp.com",
  projectId: "dream-house-482937",
  storageBucket: "dream-house-482937.firebasestorage.app",
  messagingSenderId: "930672614701",
  appId: "1:930672614701:web:368a39f829851284edc7a4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
