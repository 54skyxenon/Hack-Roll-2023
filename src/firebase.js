// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw84Uz2vyhFwp1-X_8vm_A4ZfYTwuuVco",
  authDomain: "hack-and-roll-374715.firebaseapp.com",
  databaseURL: "https://hack-and-roll-374715-default-rtdb.firebaseio.com",
  projectId: "hack-and-roll-374715",
  storageBucket: "hack-and-roll-374715.appspot.com",
  messagingSenderId: "729748452606",
  appId: "1:729748452606:web:28f37daa3725edf9b721af",
  measurementId: "G-EKXDNPJQ9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
const db = getFirestore(app);
export {db};
export default app;