const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const images = carousel.querySelectorAll('img');
let currentIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
    updateNavigationButtons();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
    updateNavigationButtons();
}

function updateNavigationButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === images.length - 1;
}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);
