/* --------------- Grab elements from DOM --------------- */

const header = document.querySelector('[data-header]');

/* --------------- Sticky Navbar --------------- */

const stickyNavbar = () => {
    header.classList.toggle('header__scrolled', window.pageYOffset > 0);
};

stickyNavbar();

window.addEventListener('scroll', e => {
    stickyNavbar();

    const element = document.querySelector('.showcase');
    const position = element.getBoundingClientRect();

    if (
		position.top < window.innerHeight &&
		position.bottom <= window.innerHeight
	) {
		console.log('Element is partially visible in screen');
	}
    console.log(position.top < window.innerHeight && position.bottom <= window.innerHeight);
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
sr.reveal('.showcase__image', {
    origin: 'top',
    delay: 891,
});

// // @ts-ignore
// ScrollReveal().reveal('.headline', {
//     origin: 'left',
//     duration: 2000
// });

/* --------------- Skills Progress Bar Animation --------------- */

/* --------------- Services Counter Animation --------------- */

/* --------------- Portfolio Filter Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Change Active Link On Scroll --------------- */

/* --------------- Change Page Theme --------------- */

/* --------------- Open & Close Navbar Menu --------------- */