// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqtf6boVage9SfpczQdptB6FX4vjWBfVY",
  authDomain: "authentication-575e7.firebaseapp.com",
  projectId: "authentication-575e7",
  storageBucket: "authentication-575e7.appspot.com",
  messagingSenderId: "350578605540",
  appId: "1:350578605540:web:b3344b882de7e7b041dbf1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
