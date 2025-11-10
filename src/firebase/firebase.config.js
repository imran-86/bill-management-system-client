// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzeneVR8whlIwQbEAQMD2HAvubBe9voY8",
  authDomain: "bill-management-system-51176.firebaseapp.com",
  projectId: "bill-management-system-51176",
  storageBucket: "bill-management-system-51176.firebasestorage.app",
  messagingSenderId: "226572979391",
  appId: "1:226572979391:web:9327ee6f58a82e967f0a0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);