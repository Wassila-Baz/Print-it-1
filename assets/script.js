// Variables tableau images,  C'est une constante qui stocke un tableau d'objets
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>" //Cette propriété contient une phrase ou un texte qui décrit le contenu ou le message de la diapositive.
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Variable pour suivre l'image actuelle
let currentSlide = 0;

const bannerImg = document.querySelector(".banner-img");
const dots = document.querySelectorAll(".dot");
const textSlide = document.querySelector("#banner p");

// Fonction pour changer de diapositive
function changeSlide(index) {

    currentSlide = index;

    bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`; // pour indiquer la source de l'image
    textSlide.innerHTML = slides[currentSlide].tagLine; // destiné à afficher le texte de la diapositive.

    dots.forEach(dot => dot.classList.remove("custom_dot_selected"));
    dots[currentSlide].classList.add("custom_dot_selected");
} 
 
// EventListeners sur les flèches
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");

leftArrow.addEventListener("click", () => {
    if (currentSlide > 0) {// Vérifie si la diapositive actuelle n'est pas la première
        changeSlide(currentSlide - 1);
    } else {
        changeSlide(slides.length - 1);  // Si ce n'est pas la première, passe à la diapositive précédente
    }
});

rightArrow.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) { // Vérifie si la diapositive actuelle n'est pas la dernière
        changeSlide(currentSlide + 1); // Si ce n'est pas la dernière, passe à la diapositive suivante
    } else {
        changeSlide(0);// Si c'est la dernière, passe à la première diapositive (boucle)
    }
});

// EventListeners pour les points indicateurs


dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        changeSlide(index);
    });
});

// Sélectionne le premier point indicateur et créer la classe "custom_dot_selected"
dots[0].classList.add("custom_dot_selected");
