import { CheckEmail_2, CheckConfirmPassword, CheckField, CheckPassword, CheckUsername } from "./Jump.js"
const firebaseConfig = {
    apiKey: "AIzaSyB33TG5BAMtdDGgJoHXCuf_Wjt1uigZ4Fk",
    authDomain: "hocfirebase-ca43e.firebaseapp.com",
    databaseURL: "https://hocfirebase-ca43e-default-rtdb.firebaseio.com",
    projectId: "hocfirebase-ca43e",
    storageBucket: "hocfirebase-ca43e.appspot.com",
    messagingSenderId: "761765636414",
    appId: "1:761765636414:web:d36e2946ca363cfd1e246f"
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

//Initialze variables
const auth = firebase.auth()
const database = firebase.database()


function signUp() {
    username = document.getElementById("username").value
    email = document.getElementById("email").value
    password = document.getElementById("password").value
    cpassword = document.getElementById("cpassword").value

    // Validate input fields
    if (CheckPassword(password) == false || passowrd !== cpassword || CheckEmail_2(email) == false || CheckUsername(username) == false) {
        alert('Email or Password is In valid!!!');
        return;
        // Don't continue running the code
    }

    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            // Declare user variable
            var user = auth.currentUser;

            // Add this user to Firebase Database
            var database_ref = database.ref();

            // Create User data
            var user_data = {
                email: email,
                passowrd: password,
                last_login: Date.now()
            }

            // Push to Firebase Database
            database_ref.child('users/' + user.uid).set(user_data);

            // DOne
            alert('User Created!!!');
        })
        .catch((error) => {
            // Firebase will use this to alert of its errors
            var error_code = error.code;
            var error_message = error.message;

            alert(error_message);
        })
}



function LogIn() {
    // Get all our input fields
    email = document.getElementById('remail').value;
    password = document.getElementById('rpassword').value;

    // Validate input fields
    if (CheckEmail_2(email) == false || CheckPassword(password) == false) {
        alert('Email or Password is Invalid!!!');
        return; // bắt nhập lại
        // Don't continue running the code
    }

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            // Declare user variable
            var user = auth.currentUser;

            // Add this user to Firebase Database
            var database_ref = database.ref();

            // Create User data
            var user_data = {
                last_login: Date.now()
            };

            // Push to Firebase Database
            database_ref.child('users/' + user.uid).update(user_data);

            // DOne
            alert('User Logged In!!!');

        })
        .catch((error) => {
            // Firebase will use this to alert of its errors
            var error_code = error.code;
            var error_message = error.message;

            alert(error_message);
        })
}
const startUp = document.getElementById("btnsignup")
startUp.addEventListener("click", (event) => {
    event.preventDefault()
    signUp()
})

// function CheckEmail_2(email) {
//     // regex hỗ trợ kiểm tra tính hợp của email
//     expression = /(\W|^)[\w.+\-]*@mindx\.edu\.vn(\W|$)/
//     if (expression.test(email) == true) {
//         // email is good
//         return true
//     } else {
//         //email is bad
//         return false
//     }
// }

// function CheckPassword(password) {
//     // regex giúp hỗ trợ tính kiểm tra hợp lệ của password
//     expression = /^[A-Za-z]\w{7,14}$/
//     if (expression.test(password) == true) {
//         //password is good
//         return true
//     } else {
//         //password is bad
//         return false
//     }
// }

// function CheckConfirmPassword(passowrd, cpassword) {
//     if (passowrd == cpassword) {
//         return true
//     } else {
//         return false
//     }
// }

// function CheckField() {
//     // function kiểm tra không được để trống
//     if (field == null) {
//         return false
//     }
//     // Kiểm tra khoảng trống
//     if (field.length <= 0) {
//         return false
//     } else {
//         true
//     }
// }

// function CheckUsername(username) {
//     // Gồm chuỗi và số từ 3 đến 16 ký tự
//     expression = /^[a-z0-9_-]{5,16}$/
//     if (expression.test(username) == true) {
//         return true
//     } else {
//         return false
//     }
// }

