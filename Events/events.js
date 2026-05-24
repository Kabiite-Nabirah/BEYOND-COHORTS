const searchEvent = document.getElementById(
"searchEvent"
);

searchEvent.addEventListener(
"keyup",
function(){

    let filter =
    searchEvent.value.toLowerCase();

    let rows =
    document.querySelectorAll(
    "#eventTable tr"
    );

    rows.forEach((row)=>{

        let text =
        row.innerText.toLowerCase();

        row.style.display =
        text.includes(filter)
        ? ""
        : "none";

    });

});



/* APPROVE EVENTS */

const approveButtons =
document.querySelectorAll(
".approve-btn"
);

approveButtons.forEach((button)=>{

    button.addEventListener(
    "click",
    function(e){

        e.stopPropagation();

        let row =
        button.parentElement
        .parentElement;

        let status =
        row.querySelector(
        ".status"
        );

        status.innerHTML =
        "Approved";

        status.classList.remove(
        "pending",
        "rejected"
        );

        status.classList.add(
        "approved"
        );

        alert(
          "Event Approved"
        );

    });

});



/* REJECT EVENTS */

const rejectButtons = document.querySelectorAll(
".reject-btn"
);

rejectButtons.forEach((button)=>{

    button.addEventListener(
    "click",
    function(e){

        e.stopPropagation();

        let row =
        button.parentElement
        .parentElement;

        let status =
        row.querySelector(
        ".status"
        );

        status.innerHTML =
        "Rejected";

        status.classList.remove(
        "pending",
        "approved"
        );

        status.classList.add(
        "rejected"
        );

        alert(
          "Event Rejected"
        );

    });

});



/* EVENT PREVIEW */

const eventRows = document.querySelectorAll(
".event-row"
);

const previewTitle =
document.querySelector(
".event-preview h3"
);

const previewImg =
document.querySelector(
".preview-img"
);

const previewText =
document.querySelector(
".event-preview p"
);

eventRows.forEach((row)=>{

    row.addEventListener(
    "click",
    function(e){

        e.stopPropagation();

        let title =
        row.children[1].innerText;

        let category =
        row.children[2].innerText;

        let img =
        row.querySelector(
        ".event-img"
        ).src;

        previewTitle.innerHTML =
        title;

        previewText.innerHTML =
        category + " Event";

        previewImg.src =
        img;

    });

});
/* =========================================
   COUNTING ANIMATION
========================================= */

const counters =
document.querySelectorAll(".count");

counters.forEach((counter)=>{

    let start = 0;

    const target =
    +counter.getAttribute(
    "data-target"
    );

    const speed = 30;

    function updateCounter(){

        start += Math.ceil(
        target / 100
        );

        if(start < target){

            counter.innerHTML =
            start.toLocaleString();

            setTimeout(
            updateCounter,
            speed
            );

        }else{

            counter.innerHTML =
            target.toLocaleString();

        }

    }

    updateCounter();

});


/* =========================================
   CREATE EVENT BUTTON
========================================= */

const createEventBtn =
document.getElementById(
"createEventBtn"
);

createEventBtn.addEventListener(
"click",
function(){

    /* EVENT DETAILS */

    let eventName =
    prompt(
    "Enter Event Name"
    );

    let category =
    prompt(
    "Enter Category"
    );

    let date =
    prompt(
    "Enter Date"
    );

    let venue =
    prompt(
    "Enter Venue"
    );

    let organizer =
    prompt(
    "Enter Organizer"
    );



    /* CHECK EMPTY */

    if(
    !banner ||
    !eventName ||
    !category ||
    !registrations ||
    !status ||
    !Actions
    ){

        alert(
        "Fill all event details"
        );

        return;

    }



    /* TABLE */

    const table =
    document.getElementById(
    "eventTable"
    );



    /* NEW ROW */

    const row =
    document.createElement(
    "tr"
    );



    row.innerHTML = `

    <td>${Banner}</td>

    <td>${EventName}</td>

    <td>${Category}</td>

    <td>${date}</td>

    <td>${registrations}</td>

      <td>${Status}</td>

        <td>${Actions}</td>

    <td>
        <span class="status pending">
        Pending
        </span>
    </td>

    `;



    /* ADD TO TABLE */

    table.appendChild(row);

     /* UPDATE EVENTS COUNT */

    let totalEvents =
    Number(
    localStorage.getItem(
    "events"
    )) || 0;

    totalEvents++;

    localStorage.setItem(
    "events",
    totalEvents
    );


    alert(
    "Event Created Successfully"
    );

});

/* =========================================
   EXPORT EVENTS BUTTON
========================================= */

const exportBtn =
document.getElementById(
"exportBtn"
);

exportBtn.addEventListener(
"click",
function(){

    alert(
    "Events Exported Successfully"
    );

});


/* =========================================
   SEND REMINDER BUTTON
========================================= */

const reminderBtn =
document.getElementById(
"reminderBtn"
);

reminderBtn.addEventListener(
"click",
function(){

    alert(
    "Reminder Sent To Members"
    );

});


/* =========================================
   APPROVE ALL BUTTON
========================================= */

const approveAllBtn =
document.getElementById(
"approveAllBtn"
);

approveAllBtn.addEventListener(
"click",
function(){

    const statuses =
    document.querySelectorAll(
    ".status"
    );

    statuses.forEach((status)=>{

        status.innerHTML =
        "Approved";

        status.classList.remove(
        "pending",
        "rejected"
        );

        status.classList.add(
        "approved"
        );

    });

    alert(
    "All Events Approved"
    );

});