// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDACn0f-i6BXWAkdcTTu1xi1B2FGQ0cpZI",
  authDomain: "taskminder-55837.firebaseapp.com",
  projectId: "taskminder-55837",
  storageBucket: "taskminder-55837.appspot.com",
  messagingSenderId: "354012822859",
  appId: "1:354012822859:web:21ec7495895e420027fcce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export auth = getAuth(app)