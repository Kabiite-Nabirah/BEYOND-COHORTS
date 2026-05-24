/* =========================================
   SEARCH USERS
========================================= */

const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", function () {

    let filter = searchUser.value.toLowerCase();

    let rows = document.querySelectorAll("#userTable tr");

    rows.forEach((row) => {

        let text = row.innerText.toLowerCase();

        row.style.display = text.includes(filter)
            ? ""
            : "none";

    });

});



/* =========================================
   VERIFY USERS
========================================= */

const verifyButtons =
document.querySelectorAll(".verify-btn");

verifyButtons.forEach((button) => {

    button.addEventListener("click", function (e) {

        e.stopPropagation();

        let row = button.closest("tr");

        let status =
        row.querySelector(".status");

        status.innerHTML = "Verified";

        status.classList.remove(
            "pending",
            "banned"
        );

        status.classList.add("verified");

        alert("User Verified");

    });

});


/* =========================================
   DELETE USERS
========================================= */

const deleteButtons =
document.querySelectorAll(".delete-btn");

deleteButtons.forEach((button) => {

    button.addEventListener("click", function (e) {

        e.stopPropagation();

        let confirmDelete = confirm(
            "Delete this user?"
        );

        if (confirmDelete) {

            button.closest("tr").remove();

        }

    });

});



/* =========================================
   USER PROFILE PREVIEW
========================================= */

const userRows =
document.querySelectorAll(".user-row");

const previewName =
document.querySelector(".profile-preview h3");

const previewBio =
document.querySelector(".profile-preview p");

const previewImg =
document.querySelector(".preview-img");

userRows.forEach((row) => {

    row.addEventListener("click", function () {

        if (
            previewName &&
            previewBio &&
            previewImg
        ) {

            let name =
            row.children[1].innerText;

            let email =
            row.children[2].innerText;

            let cohort =
            row.children[3].innerText;

            let img =
            row.querySelector(".profile-img").src;

            previewName.innerHTML = name;

            previewBio.innerHTML =
            email + " • " + cohort;

            previewImg.src = img;

        }

    });

});



/* =========================================
   QUICK ACTION BUTTONS
========================================= */

const quickButtons =
document.querySelectorAll(
".quick-actions button"
);

/* Add User */
quickButtons[0].addEventListener(
"click",
function () {

    alert("Add User Clicked");

});

/* Export Users */
quickButtons[1].addEventListener(
"click",
function () {

    alert("Export Users Started");

});

/* Send Announcement */
quickButtons[2].addEventListener(
"click",
function () {

    alert("Announcement Sent");

});

/* Verify Pending Users */
quickButtons[3].addEventListener(
"click",
function () {

    alert(
    "All Pending Users Verified"
    );

});



/* =========================================
   FILTER USERS BY STATUS
========================================= */

const filters =
document.querySelectorAll(
".filters select"
);

filters[1].addEventListener(
"change",
function () {

    let selected =
    this.value.toLowerCase();

    let rows =
    document.querySelectorAll(
    "#userTable tr"
    );

    rows.forEach((row) => {

        let status =
        row.querySelector(".status")
        .innerText.toLowerCase();

        if (selected === "all status") {

            row.style.display = "";

        }

        else if (
            status.includes(selected)
        ) {

            row.style.display = "";

        }

        else {

            row.style.display = "none";

        }

    });

});



function counter(id, start, end, duration) {

    let obj = document.getElementById(id);

    if (!obj) return;

    let range = end - start;

    let current = start;

    let increment = end > start ? 1 : -1;

    let stepTime =
    Math.abs(Math.floor(duration / range));

    let timer = setInterval(function () {

        current += increment;

        obj.innerHTML =
        current.toLocaleString();

        if (current == end) {

            clearInterval(timer);

        }

    }, stepTime);

}


/* =========================================
   RUN COUNTERS
========================================= */

window.onload = function () {

    counter("users", 0, 1250, 2000);

    counter("verified", 0, 920, 2000);

    counter("active", 0, 430, 2000);

};