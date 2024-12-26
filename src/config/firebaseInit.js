// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiV4nEEC2bQKaHCOVqQaaxrC-BE4qFcIU",
  authDomain: "painting-shop-krasteva.firebaseapp.com",
  projectId: "painting-shop-krasteva",
  storageBucket: "painting-shop-krasteva.firebasestorage.app",
  messagingSenderId: "739641857163",
  appId: "1:739641857163:web:fe2670cc0fcb8f956d308e",
  measurementId: "G-R7V5ZPPNLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);

export default app;