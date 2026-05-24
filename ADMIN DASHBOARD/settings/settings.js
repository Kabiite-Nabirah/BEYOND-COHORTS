/* =========================
   SETTINGS PAGE JS
========================= */


/* TOGGLE DROPDOWNS */

function toggleDropdown(button){

    const dropdown =
    button.parentElement;

    dropdown.classList.toggle(
    "active"
    );

}


/* DARK MODE */

const darkBtn =
document.getElementById(
"darkModeBtn"
);

darkBtn.addEventListener(
"click",
function(){

    document.body.classList.toggle(
    "dark-mode"
    );

});


/* BUTTON ALERTS */

const buttons =
document.querySelectorAll(
"button"
);

buttons.forEach(button => {

    button.addEventListener(
    "click",
    function(){

        if(
        this.id !==
        "darkModeBtn"
        ){

            alert(
            this.innerText +
            " successful!"
            );

        }

    });

});