// Variables des diapositives
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
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
let imageActuel = 0;

// Fonction pour changer de diapositive
function changeSlide(direction, index) {
    const bannerImg = document.querySelector(".banner-img");
    const dots = document.querySelectorAll(".dot");
    const tagLine = document.querySelector(".banner-tagLine");

    if (direction === "right") {
        imageActuel = (imageActuel + 1) % slides.length;
    } else if (direction === "left") {
        imageActuel = (imageActuel - 1 + slides.length) % slides.length;
    } else if (direction === "dot") {
        imageActuel = index;
    }

    bannerImg.src = `./assets/images/slideshow/${slides[imageActuel].image}`;
    tagLine.innerHTML = slides[imageActuel].tagLine;

    // Mettez à jour la classe "dot_selected" pour les points indicateurs
    dots.forEach(dot => dot.classList.remove("custom_dot_selected"));
    dots[imageActuel].classList.add("custom_dot_selected");
}

// EventListeners sur les flèches
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

leftArrow.addEventListener("click", () => {
    changeSlide("left");
});

rightArrow.addEventListener("click", () => {
    changeSlide("right");
});

// EventListeners pour les points indicateurs
const dots = document.querySelectorAll(".dot");

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        changeSlide("dot", index);
    });
});

// EventListeners pour les points indicateurs
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        changeSlide("dot", index);
        // Supprimer la classe "custom_dot_selected" de tous les points
        dots.forEach(dot => dot.classList.remove("custom_dot_selected"));
        // Ajouter la classe "custom_dot_selected" uniquement au point cliqué
        dot.classList.add("custom_dot_selected");
    });
});
