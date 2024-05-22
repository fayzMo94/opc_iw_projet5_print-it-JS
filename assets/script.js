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

// functions
rightArrow.addEventListener("click", () => {
  nextSlide();
  updateBullet(currentIndex);
  updateImgAndText(currentIndex);
});

leftArrow.addEventListener("click", () => {
  previousSlide();
  updateBullet(currentIndex);
  updateImgAndText(currentIndex);
});

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
}
function previousSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
}

function updateBullet(index) {
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}
function updateImgAndText(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      bannerImg.src = `./assets/images/slideshow/${slide.image}`;
      bannerTxt.innerHTML = `${slide.tagLine}`;
    }
  });
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    updateBullet(currentIndex);
    updateImgAndText(currentIndex);
  });
});
