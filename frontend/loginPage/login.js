const login_url= 'http://localhost:4000/users/login';
const loginBtn = document.getElementById("loginBtn");

	loginBtn.addEventListener("click",(event) =>{
		event.preventDefault()
		console.log(event)
		event.preventDefault()

		    let username = document.getElementById('login_username').value
		    let password = document.getElementById('pwd').value
		    fetch(login_url, {
		        method: 'POST',
		        mode: 'cors',
		        headers: {'Content-Type': 'application/json'},
		        body: JSON.stringify ({username: username, password: password})
		    })
		    .then ((response) => response.json())
		    .then((data) => {
				console.log(data)
				const {user}= data

				localStorage.setItem('token', data.token)
				localStorage.setItem('user', JSON.stringify (user))
				window.location.replace('../dashboard/dashboard.html')

			})
			.catch((error)=>{
				console.log(error)
			})
		
		});

    // TRIAL CODE 3
    // function login()
	// {
	// 	var uname = document.getElementById("email").value;
	// 	var pwd = document.getElementById("pwd1").value;
	// 	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    //     if(uname =='')
	// 	{
	// 		alert("please enter user name.");
	// 	}
	// 	else if(pwd=='')
	// 	{
    //     	alert("enter the password");
	// 	}
	// 	else if(!filter.test(uname))
	// 	{
	// 		alert("Enter valid email id.");
	// 	}
	// 	else if(pwd.length < 6 || pwd.length > 6)
	// 	{
	// 		alert("Password min and max length is 6.");
	// 	}
	// 	else
	// 	{
	// alert('Thank You for Login & You are Redirecting to Campuslife Website');
  //Redirecting to other page or webste code or you can set your own html page.
    //    window.location = "http://www.campuslife.co.in";
	// 		}
    // }	
    



// TRIAL CODE 2


// const loginFeature = document.getElementById('loginBtn')
// loginFeature.addEventListener('submit', loginUser)
// const users_url= 'localhost:4000/users';

// const login_url= 'localhost:4000/users/login';
// localStorage.setItem('teamBAJAJ', data.token)

// function loginUser(event) {
//     event.preventDefault()
//     let username = document.getElementById('login_username').value
//     let password = document.getElementById('psw').value
//     fetch(login_url, {
//         method: 'POST',
//         mode: 'cors',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify ({username: username, password: password})
//     })
//     .then ((response) => response.json())
//     .then((data) => {
// 		console.log(data)
//         // if(username === "liz" && password === "app123456"){
//         //     // localStorage.setItem('admin_token', data.token)
//         //     window.location.replace('../dashboard/dashboard.html')
//         //     alert("You have logged in succesfully as admin");
        
//         // }else if(data.message == "You have succesfully logged in"){
//         //     alert(data.message)
//         //     // localStorage.setItem('token', data.token)
//         //     localStorage.setItem('username', username)

//         //     window.location.replace('../dashboard/dashboard.html')
        
//         // }
//         // else{
//         //     alert(data.error);
//         // }
// 	})
// 	.catch((error)=>{
// 		console.log(error)
// 	})

// }

// TRIAL CODE 1
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
