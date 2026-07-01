/* ==========================================
   THE ULTIMATE GYM & HEALTH CLUB
   SCRIPT.JS - PART 1
========================================== */

/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1500);

});

/* ==========================================
   LUNG HOLD CHALLENGE
========================================== */

let lungStartTime = 0;

function startLungTest() {

    const result = document.getElementById("lungResult");

    if (lungStartTime === 0) {

        lungStartTime = Date.now();

        result.innerHTML = "Hold your breath... Click again when finished.";

    } else {

        let seconds = Math.floor((Date.now() - lungStartTime) / 1000);

        lungStartTime = 0;

        if (seconds >= 60) {

            result.innerHTML = "🔥 Excellent! " + seconds + " seconds";

        }

        else if (seconds >= 40) {

            result.innerHTML = "💪 Very Good! " + seconds + " seconds";

        }

        else if (seconds >= 20) {

            result.innerHTML = "🙂 Average! " + seconds + " seconds";

        }

        else {

            result.innerHTML = "⚠ Needs Improvement! " + seconds + " seconds";

        }

    }

}

/* ==========================================
   BMI CALCULATOR
========================================== */

function calculateBMI() {

    let height = document.getElementById("height").value;

    let weight = document.getElementById("weight").value;

    let result = document.getElementById("bmiResult");

    if (height === "" || weight === "") {

        result.innerHTML = "Please enter both values.";

        return;

    }

    height = height / 100;

    let bmi = weight / (height * height);

    bmi = bmi.toFixed(1);

    if (bmi < 18.5) {

        result.innerHTML = "BMI: " + bmi + " (Underweight)";

    }

    else if (bmi < 25) {

        result.innerHTML = "BMI: " + bmi + " (Healthy)";

    }

    else if (bmi < 30) {

        result.innerHTML = "BMI: " + bmi + " (Overweight)";

    }

    else {

        result.innerHTML = "BMI: " + bmi + " (Obese)";

    }

}

/* ==========================================
   WATER INTAKE CALCULATOR
========================================== */

function waterCalculator() {

    let weight = document.getElementById("waterWeight").value;

    let result = document.getElementById("waterResult");

    if (weight === "") {

        result.innerHTML = "Enter your weight.";

        return;

    }

    let litres = (weight * 0.033).toFixed(1);

    result.innerHTML =

        "Drink approximately " + litres + " Litres/day";

}

/* ==========================================
   CALORIE CALCULATOR
========================================== */

function calorieCalculator() {

    let weight = document.getElementById("caloriesWeight").value;

    let result = document.getElementById("calorieResult");

    if (weight === "") {

        result.innerHTML = "Enter your weight.";

        return;

    }

    let calories = weight * 30;

    result.innerHTML =

        "Estimated Daily Calories: " + calories + " kcal";

}
/* ==========================================
   SMOOTH SCROLL FOR LINKS
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================================
   ANIMATED STATS COUNTER
========================================== */

const counters=document.querySelectorAll(".stats h2");

let counterStarted=false;

function startCounters(){

if(counterStarted) return;

counterStarted=true;

counters.forEach(counter=>{

const targetText=counter.innerText;

const target=parseInt(targetText.replace(/\D/g,"")) || 100;

let count=0;

const speed=25;

const update=()=>{

count+=Math.ceil(target/80);

if(count<target){

counter.innerText=count+

(targetText.includes("+")?"+":

targetText.includes("%")?"%":

targetText.includes("★")?"★":"");

setTimeout(update,speed);

}else{

counter.innerText=targetText;

}

};

update();

});

}

window.addEventListener("scroll",()=>{

const stats=document.querySelector(".stats");

if(stats){

const top=stats.getBoundingClientRect().top;

if(top<window.innerHeight-100){

startCounters();

}

}

});

/* ==========================================
   RANDOM MOTIVATION QUOTES
========================================== */

const quotes=[

"Discipline beats motivation.",

"One more rep.",

"Success starts with consistency.",

"Push yourself because no one else will.",

"Pain is temporary. Pride is forever.",

"Train hard. Stay humble.",

"The body achieves what the mind believes."

];

function randomQuote(){

const quote=document.querySelector(".quote h2");

if(!quote) return;

quote.innerHTML=

quotes[Math.floor(Math.random()*quotes.length)];

}

setInterval(randomQuote,8000);

/* ==========================================
   WORKOUT STREAK
========================================== */

let streak=localStorage.getItem("gymStreak") || 0;

function completeWorkout(){

streak++;

localStorage.setItem("gymStreak",streak);

alert(

"🔥 Great Job!\n\nCurrent Workout Streak: "+streak+" Days"

);

}

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topButton";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";

topBtn.style.bottom="30px";

topBtn.style.right="30px";

topBtn.style.width="55px";

topBtn.style.height="55px";

topBtn.style.borderRadius="50%";

topBtn.style.border="none";

topBtn.style.background="#FFD54A";

topBtn.style.color="#000";

topBtn.style.fontSize="24px";

topBtn.style.cursor="pointer";

topBtn.style.display="none";

topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

progress.style.position="fixed";

progress.style.top="0";

progress.style.left="0";

progress.style.height="5px";

progress.style.background="#FFD54A";

progress.style.width="0%";

progress.style.zIndex="9999";

window.addEventListener("scroll",()=>{

const winScroll=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const scrolled=(winScroll/height)*100;

progress.style.width=scrolled+"%";

});

/* ==========================================
   GALLERY IMAGE ZOOM
========================================== */

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";

overlay.style.top="0";

overlay.style.left="0";

overlay.style.width="100%";

overlay.style.height="100%";

overlay.style.background="rgba(0,0,0,.95)";

overlay.style.display="flex";

overlay.style.justifyContent="center";

overlay.style.alignItems="center";

overlay.style.cursor="pointer";

overlay.style.zIndex="99999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";

image.style.maxHeight="90%";

image.style.borderRadius="20px";

overlay.appendChild(image);

document.body.appendChild(overlay);

overlay.onclick=()=>overlay.remove();

});

});

console.log("Ultimate Gym Premium Website Loaded Successfully.");
/* ===========================
MOBILE MENU
=========================== */

const menu=document.querySelector(".menu-toggle");

const links=document.querySelector(".nav-links");

if(menu){

menu.onclick=()=>{

links.classList.toggle("active");

};

}
