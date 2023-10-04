// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_dvai4Zr6GNmceNfj4J21x6xsyaK2M5Y",
  authDomain: "tally-counter-14147.firebaseapp.com",
  projectId: "tally-counter-14147",
  storageBucket: "tally-counter-14147.appspot.com",
  messagingSenderId: "135785943936",
  appId: "1:135785943936:web:b8b6e84eb0a3684820e765",
  measurementId: "G-TNHV1ZW82M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};
