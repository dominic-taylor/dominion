
let navDropdown = document.getElementsByClassName('nav-dropdown-btn');

document.getElementById('menu-icon').addEventListener('click', function() {
	toggleFullScreenNav()
});

document.getElementById('close-fullscreen').addEventListener('click', function() {
	toggleFullScreenNav()
});

for (var i = navDropdown.length - 1; i >= 0; i--) {
	navDropdown[i].addEventListener('click', toggleDropDown, false)
}


function toggleDropDown(e) {
	e.target.nextElementSibling.classList.toggle('nav-links-open')
}

function toggleFullScreenNav(){
	let nav = document.getElementsByClassName('nav-menu')[0];
	nav.classList.toggle('fullscreen')

}