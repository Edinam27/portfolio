// Initialize Swiper with cube effect
var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

// Navigation Functionality
function Navigate(index) {
    swiper.slideTo(index);
    document.querySelectorAll('.Links li').forEach((li, i) => {
        if (i === index) {
            li.classList.add('activeLink');
        } else {
            li.classList.remove('activeLink');
        }
    });
}

// Auto-Type Effect
const professionSpan = document.querySelector('.proffesions');
const professions = ["Software Developer", "Web Developer", "Graphic Designer"];
let i = 0;
let j = 0;
let currentProfession = "";
let isDeleting = false;

function typeEffect() {
    if (i < professions.length) {
        if (!isDeleting && j <= professions[i].length) {
            currentProfession = professions[i].slice(0, ++j);
            professionSpan.textContent = currentProfession;
        }

        if (isDeleting && j <= professions[i].length) {
            currentProfession = professions[i].slice(0, j--);
            professionSpan.textContent = currentProfession;
        }

        if (j === professions[i].length) {
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            currentProfession = professions[i].slice(0, j);
            professionSpan.textContent = currentProfession;
            isDeleting = false;
            i++;
            if (i === professions.length) {
                i = 0;
            }
        }
    }
    setTimeout(typeEffect, isDeleting ? 100 : 200);
}

typeEffect();
