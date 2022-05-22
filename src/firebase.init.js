// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdkkVhDQpfCP5mLxjdH3cora5x863YCFQ",
    authDomain: "bicyles-manufracture.firebaseapp.com",
    projectId: "bicyles-manufracture",
    storageBucket: "bicyles-manufracture.appspot.com",
    messagingSenderId: "101299854931",
    appId: "1:101299854931:web:1aa5868f89e999f42db0a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;