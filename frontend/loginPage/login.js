const url = "mongodb://localhost:27017/authData";

// When a user clicks login button, capture user data and validate it
const login = [];
loginBtn.addEventListener ("click", (e) => {
    e.preventDefault() 
function validatationEvent() {
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var staffId = document.getElementById("staffId").value; 
// Should I change "staffId" to "role" to match userSchema variables ?
// Do we really need the email value in the login form ?

// If user data matches, redirect to dahboard else send alert
if (username == " " && password == " " && staffId == " ") {
    console.log("login user data match");
    window.location = "dashboard.html"; 
return true;}
else {
alert ("Invalid username or password, please try again");
return false;
}
}});

// Add remember me function ...

// When a user clicks Register a rider button redirect them to rider registration
const regAriderBtn = [];
linkToReg.addEventListener ("click", (e) => {
    e.preventDefault() 
    window.location = "dashboard.html";
});
