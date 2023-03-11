// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmMW3_PRDRUIn9uH8Ip2bDpPO-4QdIq5I",
  authDomain: "floragenic-8d08b.firebaseapp.com",
  projectId: "floragenic-8d08b",
  storageBucket: "floragenic-8d08b.appspot.com",
  messagingSenderId: "618445016386",
  appId: "1:618445016386:web:753783fe3f809f3248ccdb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
