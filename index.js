

document.getElementById('menu-icon').addEventListener('click', function() {
	toggleFullScreenNav();
});

document.getElementById('close-fullscreen').addEventListener('click', function() {
	toggleFullScreenNav();
});

let navDropdown = document.getElementsByClassName('nav-dropdown-btn');

for (var i = navDropdown.length - 1; i >= 0; i--) {
	navDropdown[i].addEventListener('click', toggleDropDown, false);
}


function toggleDropDown(e) {
	e.target.nextElementSibling.classList.toggle('nav-links-open');
}

function toggleFullScreenNav(){
	let nav = document.getElementsByClassName('nav-menu')[0];
	// nav.classList.toggle('fullscreen');

	if (nav.classList.contains('fullscreen')) {
		let navLinks = document.getElementsByClassName('nav-links');
		for (var i = navLinks.length - 1; i >= 0; i--) {
			if(navLinks[i].classList.contains('nav-links-open')){
				navLinks[i].classList.remove('nav-links-open');
			}
		}
		nav.classList.remove('fullscreen');
	}else{
		nav.classList.add('fullscreen');
	}


	// if nav is open{
	// 	if(one of the navlinks is open) close it
	// 	then close nav
	// }else{
	// 	open nav fs
	// }	
}