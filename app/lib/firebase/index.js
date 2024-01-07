// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries 


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLVJF3B07mvS_hinOTtgaNfowogTTFiq0",
  authDomain: "budgetmate-852c3.firebaseapp.com",
  projectId: "budgetmate-852c3",
  storageBucket: "budgetmate-852c3.appspot.com",
  messagingSenderId: "512096825885",
  appId: "1:512096825885:web:884ae9aa58f8b0feef4cf4",
  measurementId: "G-39PJVPZTV9"  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth }; 