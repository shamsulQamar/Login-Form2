import { db, ref, set, auth, createUserWithEmailAndPassword, push, child, signInWithPopup, provider } from "./firebase.js"

const fName = document.getElementById("fName")
const cnic = document.getElementById("cnic")
const Email = document.getElementById("Email")
const pass = document.getElementById("pass")
const form = document.getElementById("form")
const fatherName = document.getElementById("fatherName")
const Google = document.getElementById("Google")

function user(e) {
    e.preventDefault()
    const newPostKey = push(child(ref(db), 'user/')).key;
    set(ref(db, 'user/' + newPostKey), {
        FullName: fName.value,
        email: Email.value,
        FatherName: fatherName.value,
        CNIC: cnic.value,
    });
    createUserWithEmailAndPassword(auth, Email.value, pass.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("user", user);
            window.location.pathname = "./login.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
            alert(errorMessage)
        });
}

form.addEventListener("submit", user)

//++++++++++++++++++++++++google+++++++++++++++++++++++++++++++

function google(e) {
    e.preventDefault()
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            window.location.pathname = "./login.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            alert(errorMessage)
            alert(email)
        });
}
Google.addEventListener("click", google)
