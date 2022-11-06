// Home page

let menuIcon = document.querySelector(".menu");
let closeIcon = document.querySelector(".close");
let nav = document.querySelector(".mob-nav");
let body = document.getElementsByTagName("BODY")[0];

menuIcon.addEventListener('click', () => {
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    closeIcon.style.position = "fixed"
    closeIcon.style.top = "6.5%"
    closeIcon.style.right = "8%"
    nav.classList.remove('closed');
    body.style.overflowY = "hidden";
});

closeIcon.addEventListener('click', () => {
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    closeIcon.style.position = "static"
    nav.classList.add('closed');
    body.style.overflowY = "scroll";
});

// Technology Page

let techOne = document.querySelector("#tech-one");
let techTwo = document.querySelector("#tech-two");
let techThree = document.querySelector("#tech-three");

let textOne = document.querySelector("#text-one");
let textTwo = document.querySelector("#text-two");
let textThree = document.querySelector("#text-three");

let imgOne = document.querySelector(".img-veh");
let imgTwo = document.querySelector(".img-port");
let imgThree = document.querySelector(".img-cap");

let imgOneMob = document.querySelector(".img-veh-mob ");
let imgTwoMob = document.querySelector(".img-port-mob");
let imgThreeMob = document.querySelector(".img-cap-mob");

techOne.addEventListener('click', () => {
    techOne.classList.add("tech-active");
    techTwo.classList.remove("tech-active");
    techThree.classList.remove("tech-active");
    
    textOne.classList.remove("hidden");
    textTwo.classList.add("hidden");
    textThree.classList.add("hidden");

    imgOne.classList.remove("hidden");
    imgTwo.classList.add("hidden");
    imgThree.classList.add("hidden");

    imgOneMob.classList.remove("hidden");
    imgTwoMob.classList.add("hidden");
    imgThreeMob.classList.add("hidden");
});

techTwo.addEventListener('click', () => {
    techOne.classList.remove("tech-active");
    techTwo.classList.add("tech-active");
    techThree.classList.remove("tech-active");

    textOne.classList.add("hidden");
    textTwo.classList.remove("hidden");
    textThree.classList.add("hidden");

    imgOne.classList.add("hidden");
    imgTwo.classList.remove("hidden");
    imgThree.classList.add("hidden");

    imgOneMob.classList.add("hidden");
    imgTwoMob.classList.remove("hidden");
    imgThreeMob.classList.add("hidden");
});

techThree.addEventListener('click', () => {
    techOne.classList.remove("tech-active");
    techTwo.classList.remove("tech-active");
    techThree.classList.add("tech-active");

    textOne.classList.add("hidden");
    textTwo.classList.add("hidden");
    textThree.classList.remove("hidden");

    imgOne.classList.add("hidden");
    imgTwo.classList.add("hidden");
    imgThree.classList.remove("hidden");

    imgOneMob.classList.add("hidden");
    imgTwoMob.classList.add("hidden");
    imgThreeMob.classList.remove("hidden");
});