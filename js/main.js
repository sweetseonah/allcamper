const carouselSlide = document.querySelector('.slide');
const carouselImages = document.querySelectorAll('.slideBox img');

const prevBtn = document.querySelector('#prevBtn');
const nextBrn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselslide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listeners

nextBtn.addEventlistner('click',()=>{
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'transl'
});
