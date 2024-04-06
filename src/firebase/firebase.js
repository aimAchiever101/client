// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtlRaLEhklilBZpHCZJab8T6ILXsr60p4",
  authDomain: "gamini-768f9.firebaseapp.com",
  projectId: "gamini-768f9",
  storageBucket: "gamini-768f9.appspot.com",
  messagingSenderId: "368250633935",
  appId: "1:368250633935:web:ee796524a8cb73b59a81ba",
  measurementId: "G-DE3W79ZH6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider}