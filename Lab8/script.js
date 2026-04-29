const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');


hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('show');
});

document.addEventListener('click', () => navMenu.classList.remove('show'));


let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
   
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

   
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    
    slides[currentSlide].classList.add('active');

    
    if (dots.length > 0) {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    }
}


document.getElementById('nextBtn').addEventListener('click', (e) => {
    e.preventDefault();
    showSlide(currentSlide + 1);
});

document.getElementById('prevBtn').addEventListener('click', (e) => {
    e.preventDefault();
    showSlide(currentSlide - 1);
});


setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);


showSlide(0);
