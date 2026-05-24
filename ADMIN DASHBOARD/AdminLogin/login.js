const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

const adminUsername = "admin";
const adminPassword = "12345";

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === adminUsername && password === adminPassword){

        message.style.color = "lightgreen";
        message.textContent = "Login Successful";

        localStorage.setItem("adminLoggedIn", "true");

        setTimeout(() => {

            window.location.href = "../dashboard/dashboard.html";

        }, 1000);

    }else{

        message.style.color = "#ce1515";
        message.textContent = "Invalid Username or Password";

    }

});