/* --------------- Grab elements from DOM --------------- */

const header = document.querySelector('[data-header]');

const firstSkill = document.querySelector('.skill:first-child');
const skCounters = document.querySelectorAll('.counter span');
const progressBars = document.querySelectorAll('.skills circle');

const ml = document.querySelector('.milestones')
const mlCounters = document.querySelectorAll('.number span')

const updateCount = (num, maxNum) => {
    let currentNum = +num.innerText;
    
    if (currentNum < maxNum) {
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum);
        }, 12);
    };
};

/* --------------- Sticky Navbar --------------- */

const stickyNavbar = () => {
    header.classList.toggle('header__scrolled', window.pageYOffset > 0);
};

stickyNavbar();

setTimeout(() => {!skillsPlayed ? skillsCounter() : '';mlPlayed ? skillsCounter() : '';}, 100);

window.addEventListener('scroll', e => {
    stickyNavbar();
    
    if (!skillsPlayed) skillsCounter();
    if (!mlPlayed) mlCounter();
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

sr.reveal('.srv__card', {
    origin: 'top',
    delay: 1000,
});

sr.reveal(
	'.srv__card:nth-of-type(2)',
	{
		origin: 'right',
		delay: 200
	}
);

sr.reveal(
	'.srv__card:nth-of-type(3)',
	{
		origin: 'left',
		delay: 0
	}
);

sr.reveal(
	'.srv__card:nth-of-type(4)',
	{
		origin: 'top',
		delay: 500
	}
);

sr.reveal(
	'.srv__card:last-of-type',
	{
		origin: 'bottom',
		delay: 1250
	}
);

/* --------------- Skills Progress Bar Animation --------------- */

const hasReached = el => {
    let topPosition = el.getBoundingClientRect().top;

    if (window.innerHeight >= topPosition + el.offsetHeight) return true;
    return false;
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

let mlPlayed = false;

const mlCounter = () => {
    if (!hasReached(ml)) return;

    mlPlayed = true;

    mlCounters.forEach(ctr => {
        // @ts-ignore
        let target = +ctr.dataset.target;
        
        setTimeout(() => {
            updateCount(ctr, target);
        }, 500);
    });
};


/* --------------- Portfolio Filter Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Change Active Link On Scroll --------------- */

/* --------------- Change Page Theme --------------- */

/* --------------- Open & Close Navbar Menu --------------- */