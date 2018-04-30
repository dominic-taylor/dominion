

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

}


document.getElementById('next-button').addEventListener('click', function() {
    navigate(1);
  });

document.getElementById('prev-button').addEventListener('click', function() {
    navigate(-1);
  });

function navigate(direction) {
	let sliderItems = document.getElementsByClassName('product-card');
	let indicators = document.getElementsByClassName('indicator');
	let current = document.getElementsByClassName('active')[0];
	// if(current == sliderItems[0] && direction === -1){
	// 	// give active to last element in sliderItems
	// 	sliderItems[sliderItems.length].classList.add('active');

	// loop thru sliderItems
	// if sliderItems[i] contains active, check if last or first, remove active
	// 	pass current to inidicator with same index. 
	if (direction === -1) {
		for (var i = sliderItems.length - 1; i >= 0; i--) {
			if(sliderItems[i].classList.contains('active') ){
				sliderItems[i].classList.remove('active');		
				indicators[i].classList.remove('current');
				if(i === 0){
					i = sliderItems.length-1;
				}else{
					i = i-1;
				}
				indicators[i].classList.add('current');
				sliderItems[i].classList.add('active');
				break;
			}
		}
	}
	if (direction === 1) {
		for (var i = sliderItems.length - 1; i >= 0; i--) {
			if(sliderItems[i].classList.contains('active') ){
				sliderItems[i].classList.remove('active');			
				indicators[i].classList.remove('current');
				if(i === sliderItems.length-1){
					i = 0;
				}else{
					i = i+1;
				}
				indicators[i].classList.add('current');
				sliderItems[i].classList.add('active');
				break;
			}
		}
	}
}

function slide(current, index) {
		console.log('slide', current.previousElementSibling)
		let indicators = document.getElementsByClassName('indicator');

	current.classList.remove('active')			
	indicators[index].classList.remove('current')
	indicators[index].previousElementSibling.classList.add('current')
	current.previousElementSibling.classList.add('active')
}