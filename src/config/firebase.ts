import { initializeApp, getApps } from "firebase/app";
import {
  updateProfile,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";
const googleProvider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyA04XpgdHIyFt4XVyH52E1mSjKmps1QWZk",
  authDomain: "clone-app-fd152.firebaseapp.com",
  projectId: "clone-app-fd152",
  storageBucket: "clone-app-fd152.appspot.com",
  messagingSenderId: "155263994096",
  appId: "1:155263994096:web:ec0050c9a4208aa6825a35",
};
// Initialize Firebase
const app = getApps().length > 0 ? getApps() : initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export {
  auth,
  db,
  GoogleAuthProvider,
  googleProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
};
