import { auth, signInWithEmailAndPassword } from "./firebase.js"


const Email = document.getElementById("Email")
const pass = document.getElementById("pass")
const form = document.getElementById("form")

function Signed(e) {
    e.preventDefault()
    signInWithEmailAndPassword(auth, Email.value, pass.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            window.location.pathname = "./home.html"
            console.log("sucees", user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
            alert(errorMessage)
        });

}
form.addEventListener("submit", Signed)
