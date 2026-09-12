// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI7zKY4cNrsL3s20bEU_ekCJUApeNM0xA",
  authDomain: "assignment-09-category-rose.firebaseapp.com",
  projectId: "assignment-09-category-rose",
  storageBucket: "assignment-09-category-rose.firebasestorage.app",
  messagingSenderId: "939055842249",
  appId: "1:939055842249:web:2316a10ba851aa13c4de18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
