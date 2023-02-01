import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAr3GBCvVqYmY4QbsgtvA08GSRDI2QCUng",
  authDomain: "topstylewebstore.firebaseapp.com",
  databaseURL: "https://topstylewebstore-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "topstylewebstore",
  storageBucket: "topstylewebstore.appspot.com",
  messagingSenderId: "378210898010",
  appId: "1:378210898010:web:14e4867b7a0a2472ce8863"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = getFirestore(app);

