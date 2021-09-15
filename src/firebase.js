// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, googleAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDjYWmGOF24amiZBn9HmzCWg1LOQE5lqls",
  authDomain: "disney-plus-clone-85c02.firebaseapp.com",
  projectId: "disney-plus-clone-85c02",
  storageBucket: "disney-plus-clone-85c02.appspot.com",
  messagingSenderId: "372304877997",
  appId: "1:372304877997:web:221f1aeb2f7dc828c26924",
  measurementId: "G-K1TBXY6XKS"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider(); // add the social login of google (that little popuptells you to pick up which email you wanna log in with)

export {auth, provider, storage};
export default db;


