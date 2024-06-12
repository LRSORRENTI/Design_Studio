
// BEGIN NAVBAR RELATED JS
function toggleNav() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        document.addEventListener('click', closeNavOnClickOutside);
    } else {
        document.removeEventListener('click', closeNavOnClickOutside);
    }
}

function closeNavOnClickOutside(event) {
    const navLinks = document.getElementById('nav-links');
    const navToggle = document.getElementById('nav-toggle');
    if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
        navLinks.classList.remove('active');
        document.removeEventListener('click', closeNavOnClickOutside);
    }
}
// END NAVBAR RELATED JS

// BEGIN TESTIMONIALS JS SLIDER 
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    const prevSlideButton = document.querySelector('.prev-slide');
    const nextSlideButton = document.querySelector('.next-slide');
    let currentSlide = 0;

    const updateSlider = () => {
        const offset = -currentSlide * 100;
        slides.style.transform = `translateX(${offset}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    };

    nextSlideButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % 2;
        updateSlider();
    });

    prevSlideButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + 2) % 2;
        updateSlider();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });

    updateSlider();
});

// END TESTIMONIALS JS SLIDER 