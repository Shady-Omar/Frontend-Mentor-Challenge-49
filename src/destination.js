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
    body.style.position = "fixed";
});

closeIcon.addEventListener('click', () => {
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    closeIcon.style.position = "static"
    nav.classList.add('closed');
    body.style.position = "static";
});

// Destination page

let moonImg = document.querySelector("#moon-img");
let marsImg = document.querySelector("#mars-img");
let europaImg = document.querySelector("#europa-img");
let titanImg = document.querySelector("#titan-img");

let moonDest = document.querySelector("#moon-dest");
let marsDest = document.querySelector("#mars-dest");
let europaDest = document.querySelector("#europa-dest");
let titanDest = document.querySelector("#titan-dest");

let moonText = document.querySelector("#moon-text");
let marsText = document.querySelector("#mars-text");
let europaText = document.querySelector("#europa-text");
let titanText = document.querySelector("#titan-text");

let moonStats = document.querySelector("#moon-stats");
let marsStats = document.querySelector("#mars-stats");
let europaStats = document.querySelector("#europa-stats");
let titanStats = document.querySelector("#titan-stats");


moonDest.addEventListener('click', () => {
    moonImg.classList.remove("hidden");
    marsImg.classList.add("hidden");
    europaImg.classList.add("hidden");
    titanImg.classList.add("hidden");

    moonDest.classList.add("active-dest");
    marsDest.classList.remove("active-dest");
    europaDest.classList.remove("active-dest");
    titanDest.classList.remove("active-dest");

    moonText.classList.remove("hidden");
    marsText.classList.add("hidden");
    europaText.classList.add("hidden");
    titanText.classList.add("hidden");

    moonStats.classList.remove("hidden");
    marsStats.classList.add("hidden");
    europaStats.classList.add("hidden");
    titanStats.classList.add("hidden");
});

marsDest.addEventListener('click', () => {
    moonImg.classList.add("hidden");
    marsImg.classList.remove("hidden");
    europaImg.classList.add("hidden");
    titanImg.classList.add("hidden");

    moonDest.classList.remove("active-dest");
    marsDest.classList.add("active-dest");
    europaDest.classList.remove("active-dest");
    titanDest.classList.remove("active-dest");

    moonText.classList.add("hidden");
    marsText.classList.remove("hidden");
    europaText.classList.add("hidden");
    titanText.classList.add("hidden");

    moonStats.classList.add("hidden");
    marsStats.classList.remove("hidden");
    europaStats.classList.add("hidden");
    titanStats.classList.add("hidden");
});

europaDest.addEventListener('click', () => {
    moonImg.classList.add("hidden");
    marsImg.classList.add("hidden");
    europaImg.classList.remove("hidden");
    titanImg.classList.add("hidden");

    moonDest.classList.remove("active-dest");
    marsDest.classList.remove("active-dest");
    europaDest.classList.add("active-dest");
    titanDest.classList.remove("active-dest");

    moonText.classList.add("hidden");
    marsText.classList.add("hidden");
    europaText.classList.remove("hidden");
    titanText.classList.add("hidden");

    moonStats.classList.add("hidden");
    marsStats.classList.add("hidden");
    europaStats.classList.remove("hidden");
    titanStats.classList.add("hidden");
});

titanDest.addEventListener('click', () => {
    moonImg.classList.add("hidden");
    marsImg.classList.add("hidden");
    europaImg.classList.add("hidden");
    titanImg.classList.remove("hidden");

    moonDest.classList.remove("active-dest");
    marsDest.classList.remove("active-dest");
    europaDest.classList.remove("active-dest");
    titanDest.classList.add("active-dest");

    moonText.classList.add("hidden");
    marsText.classList.add("hidden");
    europaText.classList.add("hidden");
    titanText.classList.remove("hidden");

    moonStats.classList.add("hidden");
    marsStats.classList.add("hidden");
    europaStats.classList.add("hidden");
    titanStats.classList.remove("hidden");
});
