

let clickButton = document.querySelector(".bars");
let header = document.querySelector(".header");

clickButton.onclick = function () {
    header.classList.toggle("open");
    clickButton.classList.toggle("x");
};

let clickday = document.querySelectorAll(".day");
let dayConten = document.querySelectorAll(".day-content");

clickday.forEach((day, i) => {
    day.addEventListener("click", function () {
        document.querySelector(".day.active")?.classList.remove("active");
        day.classList.add("active");
        document.querySelector(".day-content.show")?.classList.remove("show");
        dayConten.forEach((content) => {
            if (Number(content.getAttribute("day")) === i + 1) {
                content.classList.add("show");
            }
        });
    });
});


const navLinks = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let currentSection = '';
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('data-target'));
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight) {
            currentSection = link.getAttribute('data-target');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    if (currentSection) {
        const currentLink = Array.from(navLinks).find(link => link.getAttribute('data-target') === currentSection);
        if (currentLink) {
            currentLink.classList.add('active');
        }
    }
});
