const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const rightArrow = document.querySelector(".arrow_right");
const leftArrow = document.querySelector(".arrow_left");
const dots = document.querySelectorAll(".dot");
const bannerImg = document.querySelector(".banner-img");
const bannerTxt = document.querySelector("#banner p");
let currentIndex = 0;

//update slide
function updateSlide() {
  bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
  bannerTxt.innerHTML = slides[currentIndex].tagLine;
  dots.forEach((dot, i) => {
    dot.classList.toggle("dot_selected", i === currentIndex);
  });
}

// event listener
rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
});

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide();
});

// Event listeners for dots
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    updateSlide();
  });
});

// initialisation
updateSlide();