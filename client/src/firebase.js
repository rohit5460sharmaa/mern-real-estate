// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-8afca.firebaseapp.com",
  projectId: "mern-estate-8afca",
  storageBucket: "mern-estate-8afca.appspot.com",
  messagingSenderId: "242188206910",
  appId: "1:242188206910:web:811bf822dc68d09e6b626f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

