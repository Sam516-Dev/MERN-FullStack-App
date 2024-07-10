// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e4a15.firebaseapp.com",
  projectId: "mern-estate-e4a15",
  storageBucket: "mern-estate-e4a15.appspot.com",
  messagingSenderId: "556123471230",
  appId: "1:556123471230:web:6a63f66d1bf80d84aa872f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
