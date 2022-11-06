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

// Crew Page

let com = document.querySelector("#com");
let spec = document.querySelector("#spec");
let pilot = document.querySelector("#pilot");
let eng = document.querySelector("#eng");

let comText = document.querySelector("#text-com");
let specText = document.querySelector("#text-spec");
let pilotText = document.querySelector("#text-pilot");
let engText = document.querySelector("#text-eng");

let comImg = document.querySelector("#img-com");
let specimg = document.querySelector("#img-spec");
let pilotImg = document.querySelector("#img-pilot");
let engImg = document.querySelector("#img-eng");

com.addEventListener('click', () => {
    com.classList.add("active-crew");
    spec.classList.remove("active-crew");
    pilot.classList.remove("active-crew");
    eng.classList.remove("active-crew");

    comText.classList.remove("hidden");
    specText.classList.add("hidden");
    pilotText.classList.add("hidden");
    engText.classList.add("hidden");

    comImg.classList.remove("hidden");
    specimg.classList.add("hidden");
    pilotImg.classList.add("hidden");
    engImg.classList.add("hidden");
});

spec.addEventListener('click', () => {
    com.classList.remove("active-crew");
    spec.classList.add("active-crew");
    pilot.classList.remove("active-crew");
    eng.classList.remove("active-crew");

    comText.classList.add("hidden");
    specText.classList.remove("hidden");
    pilotText.classList.add("hidden");
    engText.classList.add("hidden");

    comImg.classList.add("hidden");
    specimg.classList.remove("hidden");
    pilotImg.classList.add("hidden");
    engImg.classList.add("hidden");
});

pilot.addEventListener('click', () => {
    com.classList.remove("active-crew");
    spec.classList.remove("active-crew");
    pilot.classList.add("active-crew");
    eng.classList.remove("active-crew");

    comText.classList.add("hidden");
    specText.classList.add("hidden");
    pilotText.classList.remove("hidden");
    engText.classList.add("hidden");

    comImg.classList.add("hidden");
    specimg.classList.add("hidden");
    pilotImg.classList.remove("hidden");
    engImg.classList.add("hidden");
});

eng.addEventListener('click', () => {
    com.classList.remove("active-crew");
    spec.classList.remove("active-crew");
    pilot.classList.remove("active-crew");
    eng.classList.add("active-crew");

    comText.classList.add("hidden");
    specText.classList.add("hidden");
    pilotText.classList.add("hidden");
    engText.classList.remove("hidden");

    comImg.classList.add("hidden");
    specimg.classList.add("hidden");
    pilotImg.classList.add("hidden");
    engImg.classList.remove("hidden");
});