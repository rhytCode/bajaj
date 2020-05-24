document.getElementById('loginBtn').addEventListener('submit', signinUser)
const users_url= 'localhost:4000/users';

const login_url= 'localhost:4000/users/login';
localStorage.setItem('teamBAJAJ', data.token)

function loginUser(event) {
    event.preventDefault()
    let username = document.getElementById('login_username').nodeValue
    let password = document.getElementById('psw').nodeValue
    fetch(login_url, {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify ({username: username, password: password})
    })
    .then ((response) => response.json())
    .then((data) => {
        if(username === "liz" && password === "app123456"){
            localStorage.setItem('admin_token', data.token)
            window.location.replace('../dashboard/dashboard.html')
            alert("You have logged in succesfully as admin");
        }
        else if(data.message == "You have succesfully logged in"){
            alert(data.message)
            localStorage.setItem('token', data.token)
            localStorage.setItem('username', username)

            window.location.replace('../dashboard/dashboard.html')
        }
        else{
            alert(data.error);
        }
    })

}

// Trial Code
// const url = "mongodb://localhost:27017/authData";

// // When a user clicks login button, capture user data and validate it
// const login = [];
// loginBtn.addEventListener ("click", (e) => {
//     e.preventDefault() 
// function validatationEvent() {
// var username = document.getElementById("username").value;
// var password = document.getElementById("password").value;
// var staffId = document.getElementById("staffId").value; 
// // Should I change "staffId" to "role" to match userSchema variables ?
// // Do we really need the email value in the login form ?

// // If user data matches, redirect to dahboard else send alert
// if (username === "liz" && password === "app123456" && staffId === "staff") {
//     console.log("login user data match");
//     window.location = "../dashboard/Dashboard.html"; 
// return true;}
// else {
// alert ("Invalid username or password, please try again");
// return false;
// }
// }});

// // When a user clicks Register a rider button redirect them to rider registration
// const regAriderBtn = [];
// linkToReg.addEventListener ("click", (e) => {
//     e.preventDefault() 
//     window.location = "dashboard.html";
// });

// // Add remember me function ...?