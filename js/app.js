window.onscroll = function(e){

	e.preventDefault();

	let scroll = window.scrollY;

	var Scroll = document.querySelector("#efec-scroll");
	var ulone = document.querySelector("#ulone");
	var ultwu = document.querySelector("#ultwu");
	var logo = document.getElementById("logo");

	if (scroll > 300) {
		Scroll.classList.add("bg-menu");
		ulone.classList.add("nav-scroll");
		ultwu.classList.add("nav-scroll");
		logo.classList.add("logo");
	}else{
		Scroll.classList.remove("bg-menu");
		ulone.classList.remove("nav-scroll");
		ultwu.classList.remove("nav-scroll");
		logo.classList.remove("logo");
	}
};