// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-oa-bU7xTtT8HJSh8xIf2oIPQI0TOjF8",
  authDomain: "teste-cb8d1.firebaseapp.com",
  projectId: "teste-cb8d1",
  storageBucket: "teste-cb8d1.appspot.com",
  messagingSenderId: "301269503411",
  appId: "1:301269503411:web:e9ae8a676d2a4415d1cfc6",
  measurementId: "G-NEGK60909B"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
