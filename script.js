/* =====================================
        TYPING ANIMATION
===================================== */

const words = [
    "Java Learner",
    "DSA Enthusiast",
    "Problem Solver",
    "Engineering Student"
];


let wordIndex = 0;
let charIndex = 0;
let deleting = false;


const typing = document.getElementById("typing");


function type(){

    const current = words[wordIndex];


    if(!deleting){

        typing.textContent =
        current.substring(0,charIndex++);

    }
    else{

        typing.textContent =
        current.substring(0,charIndex--);

    }


    let speed = deleting ? 60 : 120;


    if(!deleting && charIndex === current.length + 1){

        deleting = true;
        speed = 1200;

    }


    if(deleting && charIndex === 0){

        deleting = false;

        wordIndex =
        (wordIndex + 1) % words.length;

    }


    setTimeout(type,speed);

}


type();





/* =====================================
        SCROLL REVEAL
===================================== */


const observer = new IntersectionObserver(entries=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }


    });


},{
    threshold:0.15
});



document.querySelectorAll("section")
.forEach(section=>{


    section.classList.add("hidden");

    observer.observe(section);


});





/* =====================================
        ACTIVE NAVBAR
===================================== */


const sections =
document.querySelectorAll("section");


const navLinks =
document.querySelectorAll("nav a");



window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        const top =
        section.offsetTop - 180;


        if(window.scrollY >= top){

            current =
            section.getAttribute("id");

        }


    });



    navLinks.forEach(link=>{


        link.style.color="white";


        if(link.getAttribute("href")
        === "#" + current){

            link.style.color="#38bdf8";

        }


    });


});





/* =====================================
        SCROLL TO TOP
===================================== */


const scrollBtn =
document.getElementById("scrollTop");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){

        scrollBtn.style.display="block";

    }

    else{

        scrollBtn.style.display="none";

    }


});



scrollBtn.onclick=()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


};





/* =====================================
        NAVBAR SHADOW
===================================== */


const nav =
document.querySelector("nav");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 80){


        nav.style.boxShadow =
        "0 10px 40px rgba(0,0,0,.35)";


    }

    else{


        nav.style.boxShadow="none";


    }


});