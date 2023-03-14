import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaBrGcGyWhTc29LtP2EgjhSrGgFxggq1g",
  authDomain: "task-manager-25a2a.firebaseapp.com",
  projectId: "task-manager-25a2a",
  storageBucket: "task-manager-25a2a.appspot.com",
  messagingSenderId: "450147570494",
  appId: "1:450147570494:web:0811caef52f5944525126f",
  measurementId: "G-DHJ4JCN6TZ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
