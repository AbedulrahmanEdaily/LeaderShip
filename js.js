

let clickButton = document.querySelector(".bars");
let header = document.querySelector(".header");

clickButton.onclick = function () {
    header.classList.toggle("open");
    clickButton.classList.toggle("x");
};

let clickday = document.querySelectorAll(".day");
let schedules = document.querySelectorAll(".schedule");
let dayConten = document.querySelectorAll(".day-content");


for (let i = 0; i < clickday.length; i++) {
    clickday[i].onclick = function () {
        if (!(clickday[i].classList.contains("active"))) {
            for (let j = 0; j < clickday.length; j++) {
                if (clickday[j].classList.contains("active")) {
                    clickday[j].classList.remove("active");
                    break;
                }
            }
            clickday[i].classList.add("active");
        }
        for (let j = 0; j < clickday.length; j++) {
            if (dayConten[j].getAttribute("day") == i + 1) {
                if (!(dayConten[i].classList.contains("shwo"))) {
                    for (let k = 0; k < clickday.length; k++) {
                        if (dayConten[k].classList.contains("shwo")) {
                            dayConten[k].classList.remove("shwo");
                            break;
                        }
                    }
                    dayConten[j].classList.add("shwo");
                }
            }
        }
    }
}


