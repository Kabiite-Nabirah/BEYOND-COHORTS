/* =========================================
   DASHBOARD COUNTERS
========================================= */

function counter(id, start, end, speed){

    let obj =
    document.getElementById(id);

    if(!obj) return;

    let current = start;

    let timer = setInterval(function(){

        current++;

        obj.innerHTML = current;

        if(current >= end){

            clearInterval(timer);

        }

    }, speed);

}


/* =========================================
   RUN COUNTERS
========================================= */

window.onload = function(){

    counter("membersCount", 0, 120, 20);

    counter("activeUsers", 0, 8, 120);

    counter("jobPosts", 0, 5, 80);

    counter("eventsCreated", 0, 3, 120);

    counter("messagesSent", 0, 40, 30);

    counter("mentorsCount", 0, 2, 200);

    counter("newMembers", 0, 30, 40);

    counter("analyticsUsers", 0, 41, 35);

    counter("engagementRate", 0, 88, 20);

    counter("totalEvents", 0, 12, 70);

};



/* =========================================
   QUICK ACTION BUTTONS
========================================= */

const quickBtns =
document.querySelectorAll(".quick-btn");

quickBtns.forEach((btn)=>{

    btn.addEventListener(
    "click",
    function(){

        let action =
        btn.innerText;

        alert(action);

    });

});



/* =========================================
   CARD HOVER EFFECT
========================================= */

const cards =
document.querySelectorAll(
".dashboard-card"
);

cards.forEach((card)=>{

    card.addEventListener(
    "mouseenter",
    function(){

        card.style.transform =
        "translateY(-8px)";

    });

    card.addEventListener(
    "mouseleave",
    function(){

        card.style.transform =
        "translateY(0px)";

    });

});



/* =========================================
   LIVE DATE & TIME
========================================= */

function updateTime(){

    const timeBox =
    document.getElementById(
    "liveTime"
    );

    if(!timeBox) return;

    let now = new Date();

    timeBox.innerHTML =
    now.toLocaleString();

}

setInterval(updateTime,1000);



/* =========================================
   ANNOUNCEMENT BUTTON
========================================= */

const announceBtn =
document.getElementById(
"announcementBtn"
);

if(announceBtn){

    announceBtn.addEventListener(
    "click",
    function(){

        alert(
        "Announcement Sent Successfully"
        );

    });

}



/* =========================================
   VERIFY USERS BUTTON
========================================= */

const verifyBtn =
document.getElementById(
"verifyBtn"
);

if(verifyBtn){

    verifyBtn.addEventListener(
    "click",
    function(){

        alert(
        "All Users Verified"
        );

    });

}



/* =========================================
   ADD EVENT BUTTON
========================================= */

const addEventBtn =
document.getElementById(
"addEventBtn"
);

if(addEventBtn){

    addEventBtn.addEventListener(
    "click",
    function(){

        alert(
        "New Event Added"
        );

    });

}



/* =========================================
   POST JOB BUTTON
========================================= */

const postJobBtn =
document.getElementById(
"postJobBtn"
);

if(postJobBtn){

    postJobBtn.addEventListener(
    "click",
    function(){

        alert(
        "Job Opportunity Posted"
        );

    });

}