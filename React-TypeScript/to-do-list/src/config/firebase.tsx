import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCW9Mhuz2gSdSwloofiKrjAlMIYCVoL75k",
  authDomain: "to-do-list-39a8b.firebaseapp.com",
  projectId: "to-do-list-39a8b",
  storageBucket: "to-do-list-39a8b.appspot.com",
  messagingSenderId: "30289213484",
  appId: "1:30289213484:web:c93a13606af51c93cb7989",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
