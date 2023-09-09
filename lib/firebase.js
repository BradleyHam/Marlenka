import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCvo1lk-cOXScwFKCajzqi1443PeqLji4",
  authDomain: "marlenka-84178.firebaseapp.com",
  projectId: "marlenka-84178",
  storageBucket: "marlenka-84178.appspot.com",
  messagingSenderId: "971496351347",
  appId: "1:971496351347:web:88783e6a70f04daf8fac06",
  measurementId: "G-KL41JM4GQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);