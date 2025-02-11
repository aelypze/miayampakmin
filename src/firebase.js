// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYHWTv8LdTzleAMnYIz0NvGRgznjx6fAU",
  authDomain: "be-miayam-abf7d.firebaseapp.com",
  projectId: "be-miayam-abf7d",
  storageBucket: "be-miayam-abf7d.firebasestorage.com",
  messagingSenderId: "991666959497",
  appId: "1:991666959497:web:ce4957d67d349b03ba8258",
  measurementId: "G-LC0N5DRJPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};
export const storage = getStorage();