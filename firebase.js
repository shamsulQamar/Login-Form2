
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase, ref, set, push, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAyvn8Q8h2C5UYbEONP-e23znOMwTuOtcM",
    authDomain: "ebay-354f6.firebaseapp.com",
    databaseURL: "https://ebay-354f6-default-rtdb.firebaseio.com",
    projectId: "ebay-354f6",
    storageBucket: "ebay-354f6.appspot.com",
    messagingSenderId: "819561161293",
    appId: "1:819561161293:web:a7563fcc8dd98a69097204",
    measurementId: "G-MXPSRM8R0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);
const provider = new GoogleAuthProvider();
export {
    push,
    child,
    db,
    ref,
    set,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    provider,
    signInWithPopup
}