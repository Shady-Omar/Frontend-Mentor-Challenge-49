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