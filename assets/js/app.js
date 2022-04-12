/* --------------- Grab elements from DOM --------------- */

const header = document.querySelector('[data-header]');

const firstSkill = document.querySelector('.skill:first-child');
const skCounters = document.querySelectorAll('.counter span');
const progressBars = document.querySelectorAll('.skills circle');

/* --------------- Sticky Navbar --------------- */

const stickyNavbar = () => {
    header.classList.toggle('header__scrolled', window.pageYOffset > 0);
};

stickyNavbar();

setTimeout(() => !skillsPlayed ? skillsCounter() : '', 100);

window.addEventListener('scroll', e => {
    stickyNavbar();

    if (!skillsPlayed) skillsCounter();
});

/* --------------- Reveal Animation --------------- */

// @ts-ignore
let sr = ScrollReveal({
    duration: 2500,
    distance: '100px',
    delay: 345,
});

sr.reveal('.showcase__info');

sr.reveal('.square', {
    origin: 'left',
    delay: 567,
});

sr.reveal('.dots', {
    origin: 'right',
    delay: 567,
});

sr.reveal('.showcase__image', {
    origin: 'top',
    delay: 891,
});

/* --------------- Skills Progress Bar Animation --------------- */

const hasReached = el => {
    let topPosition = el.getBoundingClientRect().top;

    if (window.innerHeight >= topPosition + el.offsetHeight) return true;
    return false;
};

const updateCount = (num, maxNum) => {
    let currentNum = +num.innerText;

    if (currentNum < maxNum) {
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum);
        }, 12);
    };
};

let skillsPlayed = false;

const skillsCounter = () => {
    if (!hasReached(firstSkill)) return;

    skillsPlayed = true;

    skCounters.forEach((counter, i) => {
        // @ts-ignore
        let target = +counter.dataset.target;
        let strokeValue = 427 - 426 * (target / 100);

        // @ts-ignore
        progressBars[i].style.setProperty('--target', strokeValue);

        setTimeout(() => {
            updateCount(counter, target);
    }, 400);

    // @ts-ignore
    progressBars.forEach(p => p.style.animation = 'progress 2000ms ease-in-out forwards');
})};

/* --------------- Services Counter Animation --------------- */

/* --------------- Portfolio Filter Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Change Active Link On Scroll --------------- */

/* --------------- Change Page Theme --------------- */

/* --------------- Open & Close Navbar Menu --------------- */