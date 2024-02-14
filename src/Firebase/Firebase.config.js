// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIMMseuiVuSeuZo-Fmg6lVRHg2g0auYPs",
  authDomain: "event-manegement-b6535.firebaseapp.com",
  projectId: "event-manegement-b6535",
  storageBucket: "event-manegement-b6535.appspot.com",
  messagingSenderId: "550403527068",
  appId: "1:550403527068:web:2653b3949b63904ed1b859",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
