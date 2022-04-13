/** @format */

window.addEventListener('load', () => {
	setTimeout(() => {
		if (
			navigator.userAgent.toLowerCase().indexOf('firefox') > -1 &&
			!localStorage.getItem('firefoxywoxy')
		) {
			localStorage.setItem('firefoxywoxy', 'Leiloukou is best!');
			alert('Please do not use Firefox, or Microsoft Edge.');
		} else {
			localStorage.removeItem('firefoxywoxy');
		}
	}, 2500);
});

/* --------------- Grab elements from DOM --------------- */

const header = document.querySelector('[data-header]');

const firstSkill = document.querySelector('.skill:first-child');
const skCounters = document.querySelectorAll('.counter span');
const progressBars = document.querySelectorAll('.skills circle');

const ml = document.querySelector('.milestones');
const mlCounters = document.querySelectorAll('.number span');

const prt = document.querySelector('.portfolio');
const zoomIcons = document.querySelectorAll('.zoom-icon');
const modalOverlay = document.querySelector('.modal__overlay');
const images = document.querySelectorAll('.images img');
const prevBtn = document.querySelector('.prev__btn');
const nextBtn = document.querySelector('.next__btn');

window.addEventListener('scroll', (e) => {
	stickyNavbar();

	if (!skillsPlayed) skillsCounter();
	if (!mlPlayed) mlCounter();
});

const updateCount = (num, maxNum) => {
	let currentNum = +num.innerText;

	if (currentNum < maxNum) {
		num.innerText = currentNum + 1;
		setTimeout(() => {
			updateCount(num, maxNum);
		}, 12);
	}
};

/* --------------- Sticky Navbar --------------- */

const stickyNavbar = () => {
	header.classList.toggle('header__scrolled', window.pageYOffset > 0);
};

stickyNavbar();

setTimeout(() => {
	!skillsPlayed ? skillsCounter() : '';
	mlPlayed ? skillsCounter() : '';
}, 100);

/* --------------- Reveal Animation --------------- */

// @ts-ignore
let sr = ScrollReveal({
	duration: 2500,
	distance: '100px',
	delay: 345
});

sr.reveal('.showcase__info');

sr.reveal('.square', {
	origin: 'left',
	delay: 567
});

sr.reveal('.dots', {
	origin: 'right',
	delay: 567
});

sr.reveal('.showcase__image', {
	origin: 'top',
	delay: 891
});

sr.reveal('.srv__card', {
	origin: 'top',
	delay: 1000
});

sr.reveal('.srv__card:nth-of-type(2)', {
	origin: 'right',
	delay: 200
});

sr.reveal('.srv__card:nth-of-type(3)', {
	origin: 'left',
	delay: 0
});

sr.reveal('.srv__card:nth-of-type(4)', {
	origin: 'top',
	delay: 500
});

sr.reveal('.srv__card:last-of-type', {
	origin: 'bottom',
	delay: 1250
});

/* --------------- Skills Progress Bar Animation --------------- */

const hasReached = (el) => {
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

		progressBars.forEach(
			// @ts-ignore
			(p) => (p.style.animation = 'progress 2000ms ease-in-out forwards')
		);
	});
};

/* --------------- Services Counter Animation --------------- */

let mlPlayed = false;

const mlCounter = () => {
	if (!hasReached(ml)) return;

	mlPlayed = true;

	mlCounters.forEach((ctr) => {
		// @ts-ignore
		let target = +ctr.dataset.target;

		setTimeout(() => {
			updateCount(ctr, target);
		}, 500);
	});
};

/* --------------- Portfolio Filter Animation --------------- */

// @ts-ignore
const mixer = mixitup('.portfolio__gallery', {
	selectors: {
		target: '.prt__card'
	},
	animation: {
		duration: 500
	}
});

/* --------------- Modal Pop Up Animation Animation --------------- */

let currentIndex = 0;

zoomIcons.forEach((icon, i) =>
	icon.addEventListener('click', () => {
		prt.classList.add('open');
		document.body.classList.add('no-scroll');
		currentIndex = i;
		changeImage(currentIndex);
	})
);

modalOverlay.addEventListener('click', () => {
	prt.classList.remove('open');
	document.body.classList.remove('no-scroll');
});

prevBtn.addEventListener('click', () => {
	if (currentIndex === 0) {
		currentIndex = images.length - 1;
	} else {
		currentIndex--;
	}

	changeImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
	if (currentIndex === (images.length - 1)) {
		currentIndex = 0;
	} else {
		currentIndex++;
	}

	changeImage(currentIndex);
});

const changeImage = (index) => {
	images.forEach((img) => img.classList.remove('show-image'));
	images[index].classList.add('show-image');
};

/* --------------- Testimonials Swiper Functionality --------------- */

// @ts-ignore
const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 500,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/* --------------- Change Active Link On Scroll --------------- */

/* --------------- Change Page Theme --------------- */

/* --------------- Open & Close Navbar Menu --------------- */
