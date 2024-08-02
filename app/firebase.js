// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk4g4dwVQnfkul3NK5QQGbitVwLdRPltY",
  authDomain: "pantry-8782a.firebaseapp.com",
  projectId: "pantry-8782a",
  storageBucket: "pantry-8782a.appspot.com",
  messagingSenderId: "547603609384",
  appId: "1:547603609384:web:8b802cb0ef5eb67725821d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const firestore = getFirestore(app);

export { firestore };
