import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// We will instruct the user to define these variables in the .env file
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyBa7WLwxXuPMoF0-lvj2dxwFNMk45Hpljk",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "food-surplus-e1eca.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "food-surplus-e1eca",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "food-surplus-e1eca.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "756649637036",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:756649637036:web:cdb60e46ba095a58cc1b09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Authentication and Firestore instances
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
