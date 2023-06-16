import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEG84N7zcYDtsF9e9o4fZpZscsODY6C2M",
  authDomain: "moni-wraps.firebaseapp.com",
  projectId: "moni-wraps",
  storageBucket: "moni-wraps.appspot.com",
  messagingSenderId: "1006207278197",
  appId: "1:1006207278197:web:98ec4cb3d9895e06302c3c"
};


const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);
