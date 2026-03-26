
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-gQIn_lilTFzcw122fWiakpWajjBWpOM",
  authDomain: "thinktrail-9cd68.firebaseapp.com",
  projectId: "thinktrail-9cd68",
  storageBucket: "thinktrail-9cd68.firebasestorage.app",
  messagingSenderId: "",
  appId: "",

};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);