const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

function updateSlidePosition() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlidePosition();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlidePosition();
});

// Mobile Swipe Support
let startX = 0;
let endX = 0;

slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
}, false);

slider.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
}, false);

function handleSwipe() {
  const swipeThreshold = 50; // Minimum distance in px to trigger a swipe

  if (endX < startX - swipeThreshold) {
    // Swiped left (next)
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
  } else if (endX > startX + swipeThreshold) {
    // Swiped right (prev)
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
  }
}
