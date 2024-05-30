// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnapbB2vfWkN2ee_1cbRQCuDUfx1swbu4",
  authDomain: "fir-auth-b907a.firebaseapp.com",
  projectId: "fir-auth-b907a",
  storageBucket: "fir-auth-b907a.appspot.com",
  messagingSenderId: "26963291233",
  appId: "1:26963291233:web:2c7c18afa79af17e284e20",
  measurementId: "G-W2G4YJFN0G"
};

// Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { app, auth };
