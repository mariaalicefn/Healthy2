// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdO6OBuFMEvq5YdQJyZI-whgE84GhECMo",
  authDomain: "healthy-98226.firebaseapp.com",
  databaseURL: "https://healthy-98226-default-rtdb.firebaseio.com",
  projectId: "healthy-98226",
  storageBucket: "healthy-98226.appspot.com",
  messagingSenderId: "93174299432",
  appId: "1:93174299432:web:bb2c16022b99233b1eee1d",
  measurementId: "G-VWPB4J1NRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage, analytics};