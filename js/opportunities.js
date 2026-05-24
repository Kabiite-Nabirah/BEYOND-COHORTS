/* ───────── MENU DROPDOWN ───────── */

const menuButton = document.querySelector(".menu-button");

const dropdownMenu = document.querySelector(".dropdown-menu");

menuButton.addEventListener("click", () => {

  dropdownMenu.classList.toggle("active");

});

/* ───────── APPLICATION MODAL ───────── */

const modal = document.getElementById("applicationModal");

const applyButtons = document.querySelectorAll(".course-card button");

const closeModal = document.querySelector(".close-modal");

/* OPEN MODAL */

applyButtons.forEach((button) => {

  button.addEventListener("click", () => {

    modal.classList.add("active");

  });

});

/* CLOSE MODAL */

closeModal.addEventListener("click", () => {

  modal.classList.remove("active");

});

/* CLOSE ON OUTSIDE CLICK */

window.addEventListener("click", (e) => {

  if(e.target === modal){

    modal.classList.remove("active");

  }

});

/* ───────── APPLICATION FORM ───────── */

const applicationForm = document.querySelector(".application-form");

const formMessage = document.querySelector(".form-message");

applicationForm.addEventListener("submit", (e) => {

  e.preventDefault();

  const fullName = document.getElementById("fullName").value;

  const email = document.getElementById("emailAddress").value;

  const phone = document.getElementById("phoneNumber").value;

  const cv = document.getElementById("cvFile").files[0];

  if(!fullName || !email || !phone || !cv){

    formMessage.textContent = "Please fill in all fields.";

    return;
  }

  formMessage.textContent = "Application submitted successfully 🚀";

  applicationForm.reset();

  setTimeout(() => {

    modal.classList.remove("active");

    formMessage.textContent = "";

  }, 2000);

});

/* ───────── SUBSCRIBE FORM ───────── */

const subscribeForm = document.querySelector(".subscribe-form");

subscribeForm.addEventListener("submit", (e) => {

  e.preventDefault();

  const email = document.getElementById("email").value;

  if(email === ""){

    alert("Please enter your email");

    return;
  }

  alert("Subscribed successfully 💜");

  subscribeForm.reset();

});