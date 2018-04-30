document.getElementById('menu-icon').addEventListener('click', function() {
	toggleFullScreenNav();
});

document.getElementById('close-fullscreen').addEventListener('click', function() {
	toggleFullScreenNav();
});
document.getElementById('next-button').addEventListener('click', function() {
	navigateRight();
});

document.getElementById('prev-button').addEventListener('click', function() {
	navigateLeft();
});


const toggleFullScreenNav = () => {
	let nav = document.getElementsByClassName('nav-menu')[0];
	if (nav.classList.contains('fullscreen')) {
		closeNavLinks();
		nav.classList.remove('fullscreen');
	}else{
		nav.classList.add('fullscreen');
	}
}
const closeNavLinks = () => {
	let navLinks = document.getElementsByClassName('nav-links');
	for (var i = navLinks.length - 1; i >= 0; i--) {
		if(navLinks[i].classList.contains('nav-links-open')){
			navLinks[i].classList.remove('nav-links-open');
		}
	}
}

const toggleDropDown = (e) => {
	e.target.nextElementSibling.classList.toggle('nav-links-open');
};

const attachDropdownListeners = () =>{
	let navDropdown = document.getElementsByClassName('nav-dropdown-btn');
	for (var i = navDropdown.length - 1; i >= 0; i--) {
		navDropdown[i].addEventListener('click', toggleDropDown, false);
	}
};
attachDropdownListeners();


const navigateRight = () => {
	let slides = document.getElementsByClassName('product-card');
	let indicators = document.getElementsByClassName('indicator');
	let current = document.getElementsByClassName('active')[0];

	for (var i = slides.length - 1; i >= 0; i--) {
		if(slides[i].classList.contains('active') ){
			slideOut(slides[i], indicators[i]);
			i === slides.length-1 ? i = 0 : i = i+1;
			slideIn(slides[i], indicators[i]);
			break;
		}
	}
}
const navigateLeft = () => {
	let slides = document.getElementsByClassName('product-card');
	let indicators = document.getElementsByClassName('indicator');
	let current = document.getElementsByClassName('active')[0];

	for (var i = slides.length - 1; i >= 0; i--) {
		if(slides[i].classList.contains('active') ){
			slideOut(slides[i], indicators[i]);
			i === 0 ? i = slides.length-1 : i = i-1;
			slideIn(slides[i], indicators[i]);
			break;
		}
	}
}
const slideOut = (slider, indicator)  => {
	slider.classList.remove('active');			
	indicator.classList.remove('current');
}

const slideIn = (slider, indicator) => {
	slider.classList.add('active');
	indicator.classList.add('current');
}

