/* ===================================
   USERS DATA
=================================== */

const users = [

    {name:"Peace", cohort:"Cohort 1"},
    {name:"Amina", cohort:"Cohort 1"},
    {name:"Sarah", cohort:"Cohort 2"},
    {name:"Kevin", cohort:"Cohort 2"},
    {name:"Brian", cohort:"Cohort 2"},
    {name:"Diana", cohort:"Cohort 3"}

];



/* ===================================
   COUNT COHORTS
=================================== */

let cohort1 = 0;
let cohort2 = 0;
let cohort3 = 0;

users.forEach((user)=>{

    if(user.cohort === "Cohort 1"){
        cohort1++;
    }

    else if(user.cohort === "Cohort 2"){
        cohort2++;
    }

    else if(user.cohort === "Cohort 3"){
        cohort3++;
    }

});



/* ===================================
   TOTAL USERS
=================================== */

const totalUsers =
users.length;



/* ===================================
   PERCENTAGES
=================================== */

const cohort1Percent =
(cohort1 / totalUsers) * 100;

const cohort2Percent =
(cohort2 / totalUsers) * 100;

const cohort3Percent =
(cohort3 / totalUsers) * 100;



/* ===================================
   UPDATE WHEEL
=================================== */

const wheel =
document.querySelector(
".analytics-wheel"
);

wheel.style.background =
`conic-gradient(

#65d300 0%
${cohort1Percent}%,

#2196f3 ${cohort1Percent}%
${cohort1Percent + cohort2Percent}%,

#d45b1c
${cohort1Percent + cohort2Percent}%
100%

)`;


/* ===================================
   UPDATE COUNTS
=================================== */

document.getElementById(
"cohort1Count"
).innerHTML = cohort1;

document.getElementById(
"cohort2Count"
).innerHTML = cohort2;

document.getElementById(
"cohort3Count"
).innerHTML = cohort3;

document.getElementById(
"totalUsers"
).innerHTML = totalUsers;