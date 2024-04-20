// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzt1eAjVM0lV-nXuW0-asGYAWz3kAE_YE",
  authDomain: "firsttodowebapp.firebaseapp.com",
  projectId: "firsttodowebapp",
  storageBucket: "firsttodowebapp.appspot.com",
  messagingSenderId: "782665222134",
  appId: "1:782665222134:web:b97fd777df16aae1c429d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)