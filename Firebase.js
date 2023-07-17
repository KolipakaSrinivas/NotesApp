import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyDgPtuISqjrnZ_yRpokv04uK094LuFu11I",
  authDomain: "notes-app-f629b.firebaseapp.com",
  projectId: "notes-app-f629b",
  storageBucket: "notes-app-f629b.appspot.com",
  messagingSenderId: "866532138390",
  appId: "1:866532138390:web:50d6c8fdc6ff4d8a0851b7",
  measurementId: "G-CW4LT2ZBK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const notesCollection = collection(db,'notes')