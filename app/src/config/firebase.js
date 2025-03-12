// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKsDw93LHqoLrSgxjD95G4lR8EUUYrh88",
    authDomain: "portfl-47804.firebaseapp.com",
    projectId: "portfl-47804",
    storageBucket: "portfl-47804.firebasestorage.app",
    messagingSenderId: "986663322231",
    appId: "1:986663322231:web:fde08531dc30cf925dbc72",
    measurementId: "G-ETCL5MBMW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };