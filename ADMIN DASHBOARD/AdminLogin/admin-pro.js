// dashboard-protection.js

if(localStorage.getItem("adminLoggedIn") !== "true"){

    window.location.href = "../adminlogin/adminlogin.html";

}

/* LOGOUT FUNCTION */
function logout(){

    localStorage.removeItem("adminLoggedIn");

    window.location.href = "../adminlogin/adminlogin.html";

}