// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu1HFhKjG3tHOqi8hzRTLxjo8iA989Nl4",
  authDomain: "bagnahandbags.firebaseapp.com",
  projectId: "bagnahandbags",
  storageBucket: "bagnahandbags.appspot.com",
  messagingSenderId: "610802216468",
  appId: "1:610802216468:web:98a3f713c52d30e5e94101"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)