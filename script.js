/* ===========================================================
   THE ULTIMATE GYM & HEALTH CLUB
   AGENCY EDITION
   VERSION 2.0
=========================================================== */

/* ===========================================================
   PAGE LOADER
=========================================================== */

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

},1200);

});

/* ===========================================================
   STICKY NAVBAR
=========================================================== */

const header = document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.background="rgba(0,0,0,.92)";

header.style.backdropFilter="blur(20px)";

}else{

header.style.background="transparent";

}

});

/* ===========================================================
   BACK TO TOP
=========================================================== */

const backToTop=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backToTop.style.display="flex";

}else{

backToTop.style.display="none";

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ===========================================================
   MOBILE MENU
=========================================================== */

const menuBtn=document.querySelector(".menu-btn");

const navLinks=document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("showMenu");

});

/* ===========================================================
   ACTIVE NAV LINK
=========================================================== */

const sections=document.querySelectorAll("section");

const links=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.clientHeight;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

links.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/* ===========================================================
   COUNTER ANIMATION
=========================================================== */

const counters=document.querySelectorAll(".counter h2");

let counterStarted=false;

window.addEventListener("scroll",()=>{

const section=document.querySelector(".counter-section");

if(!section) return;

const trigger=section.offsetTop-500;

if(window.scrollY>trigger && !counterStarted){

counterStarted=true;

counters.forEach(counter=>{

const target=+counter.dataset.target;

let count=0;

const speed=target/120;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

});

}

});
/* ===========================================================
   BMI CALCULATOR
=========================================================== */

function calculateBMI(){

const height=document.getElementById("height");

const weight=document.getElementById("weight");

const result=document.getElementById("bmiResult");

if(!height || !weight || !result) return;

const h=parseFloat(height.value)/100;
const w=parseFloat(weight.value);

if(!h || !w){

result.innerHTML="Please enter valid values.";

return;

}

const bmi=(w/(h*h)).toFixed(1);

let status="";

if(bmi<18.5){

status="Underweight";

}else if(bmi<25){

status="Healthy";

}else if(bmi<30){

status="Overweight";

}else{

status="Obese";

}

result.innerHTML=`BMI: <strong>${bmi}</strong><br>${status}`;

}

/* ===========================================================
   WATER INTAKE CALCULATOR
=========================================================== */

function waterCalculator(){

const weight=document.getElementById("waterWeight");

const result=document.getElementById("waterResult");

if(!weight || !result) return;

const w=parseFloat(weight.value);

if(!w){

result.innerHTML="Enter your weight.";

return;

}

const litres=(w*0.035).toFixed(1);

result.innerHTML=`Recommended: <strong>${litres} Litres/day</strong>`;

}

/* ===========================================================
   CALORIE ESTIMATOR
=========================================================== */

function calorieCalculator(){

const weight=document.getElementById("caloriesWeight");

const result=document.getElementById("calorieResult");

if(!weight || !result) return;

const w=parseFloat(weight.value);

if(!w){

result.innerHTML="Enter your weight.";

return;

}

const calories=Math.round(w*30);

result.innerHTML=`Estimated: <strong>${calories} Calories/day</strong>`;

}

/* ===========================================================
   LUNG CHALLENGE
=========================================================== */

let lungStart=0;
let lungRunning=false;

function startLungTest(){

const result=document.getElementById("lungResult");

if(!result) return;

if(!lungRunning){

lungRunning=true;

lungStart=Date.now();

result.innerHTML="Hold your breath...";

return;

}

lungRunning=false;

const seconds=Math.floor((Date.now()-lungStart)/1000);

let message="";

if(seconds<20){

message="Needs Improvement";

}else if(seconds<40){

message="Average";

}else if(seconds<60){

message="Very Good";

}else{

message="Excellent";

}

result.innerHTML=`${seconds} Seconds<br>${message}`;

}

/* ===========================================================
   DAILY MOTIVATION
=========================================================== */

const quotes=[

"Discipline beats motivation.",

"Push yourself because nobody else will.",

"Every workout counts.",

"Your future body is created today.",

"Small progress is still progress.",

"Strong mind. Strong body.",

"Success begins with consistency.",

"One more rep. One more step.",

"Believe in your strength.",

"Dream big. Train bigger."

];

function randomQuote(){

const text=document.getElementById("motivationText");

if(!text) return;

const random=Math.floor(Math.random()*quotes.length);

text.innerHTML=quotes[random];

}
/* ===========================================================
   SCROLL REVEAL ANIMATIONS
=========================================================== */

const revealElements=document.querySelectorAll(

".facility-card,.feature-box,.plan-card,.gallery-item,.testimonial-card,.tool-card,.contact-card,.social-card,.counter"

);

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

revealObserver.unobserve(entry.target);

}

});

},{

threshold:0.15

});

revealElements.forEach(element=>{

element.style.opacity="0";

element.style.transform="translateY(60px)";

element.style.transition="all .8s ease";

revealObserver.observe(element);

});

/* ===========================================================
   SMOOTH NAVIGATION
=========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});

/* ===========================================================
   GALLERY LIGHTBOX
=========================================================== */

const galleryImages=document.querySelectorAll(".gallery-item img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

lightbox.innerHTML="<img>";

document.body.appendChild(lightbox);

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("active");

lightbox.querySelector("img").src=image.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});

/* ===========================================================
   PARALLAX HERO
=========================================================== */

const heroImage=document.querySelector(".hero-background img");

window.addEventListener("scroll",()=>{

if(heroImage){

heroImage.style.transform=`translateY(${window.scrollY*0.2}px) scale(1.1)`;

}

});

/* ===========================================================
   NAVBAR SHADOW
=========================================================== */

window.addEventListener("scroll",()=>{

if(window.scrollY>20){

header.style.boxShadow="0 15px 40px rgba(0,0,0,.45)";

}else{

header.style.boxShadow="none";

}

});

/* ===========================================================
   PERFORMANCE
=========================================================== */

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

img.draggable=false;

});

/* ===========================================================
   CONSOLE SIGNATURE
=========================================================== */

console.log("%cThe Ultimate Gym & Health Club",

"color:#FFD54A;font-size:22px;font-weight:bold;");

console.log("%cPremium Website Developed by Agency Edition",

"color:white;font-size:14px;");
/* ===========================================================
   FLOATING BUTTON ANIMATION
=========================================================== */

const floatingButtons=document.querySelectorAll(

".floating-call,.floating-whatsapp,#backToTop"

);

floatingButtons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-6px) scale(1.08)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});

/* ===========================================================
   BUTTON RIPPLE EFFECT
=========================================================== */

document.querySelectorAll(

".primary-btn,.secondary-btn,.plan-card a,.contact-card a,.tool-card button"

).forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";

ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.style.position="absolute";

ripple.style.borderRadius="50%";

ripple.style.background="rgba(255,255,255,.4)";

ripple.style.transform="scale(0)";

ripple.style.animation="ripple .6s linear";

ripple.style.pointerEvents="none";

this.style.position="relative";

this.style.overflow="hidden";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/* ===========================================================
   RIPPLE KEYFRAME
=========================================================== */

const rippleStyle=document.createElement("style");

rippleStyle.innerHTML=`

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

`;

document.head.appendChild(rippleStyle);

/* ===========================================================
   CURRENT YEAR
=========================================================== */

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

/* ===========================================================
   PREVENT EMPTY LINKS
=========================================================== */

document.querySelectorAll('a[href="#"]').forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

});

});

/* ===========================================================
   WEBSITE READY
=========================================================== */

console.log("Website Loaded Successfully ✅");

/* ===========================================================
   Counter Animation 
=========================================================== */

#loader{

position:fixed;

top:0;

left:0;

width:100%;

height:100%;

background:#000;

display:flex;

justify-content:center;

align-items:center;

z-index:999999;

transition:1s;

}

.loader-logo{

text-align:center;

}

.loader-logo img{

width:120px;

margin-bottom:20px;

animation:spinLogo 3s linear infinite;

}

.loader-logo h2{

color:#FFD54A;

letter-spacing:3px;

}

@keyframes spinLogo{

100%{

transform:rotate(360deg);

}

}

/* ===========================================================
   LOADING SCREEN 
=========================================================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

document.getElementById("loader").style.visibility="hidden";

},1800);

});


   
const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};
