const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {

  e.preventDefault();

  const email = document.getElementById("loginEmail").value;

  const password = document.getElementById("loginPassword").value;

  try {

    const response = await fetch("http://localhost:5000/api/auth/login", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await response.json();

    if(response.ok){

      localStorage.setItem("token", data.token);

      localStorage.setItem("user", JSON.stringify(data));

      alert("Login successful");

      window.location.href = "home.html";

    } else {

      alert(data.message);
    }

  } catch(error){

    console.log(error);

    alert("Server error");
  }

});

// function logout(){

//   localStorage.removeItem("token");

//   localStorage.removeItem("user");

//   window.location.href = "login.html";
// }

// const token = localStorage.getItem("token");

// if(!token){

//   window.location.href = "login.html ";
// }


// const user = JSON.parse(localStorage.getItem("user"));

// console.log(user.fullName);