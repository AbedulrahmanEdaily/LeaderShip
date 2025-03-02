

let clickButton = document.querySelector(".bars");
let header = document.querySelector(".header");

clickButton.onclick = function () {
    header.classList.toggle("open");
};