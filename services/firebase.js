// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu1aWudUNTF5uD1ukOE3PzTyPMZdZPHWk",
  authDomain: "floragenic-999b7.firebaseapp.com",
  projectId: "floragenic-999b7",
  storageBucket: "floragenic-999b7.appspot.com",
  messagingSenderId: "735695415103",
  appId: "1:735695415103:web:87a2772a9f3a58f6b4958a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
