
//variables
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let imageActuel =0;

function changeSlide (){

	const bannerImg = document.querySelector(".banner-img");
	imageActuel = (imageActuel + 1) % slides.length ;
	bannerImg.src = `./assets/images/slideshow/${slides[imageActuel].image}`;

const ba
}


// EventListerner sur chacune des flèches //

const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

leftArrow.addEventListener("click",() =>{
console.log('Alert 1!');
	changeSlide();
});

rightArrow.addEventListener("click",() =>{
	console.log('Alert 2!');
	changeSlide();
});


//-------- dots
