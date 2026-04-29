const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});


document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('show'));
});


let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
    
    if (index >= totalSlides) currentSlide = 0;
    else if (index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index;

    
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}


document.getElementById('nextBtn').addEventListener('click', () => {
    showSlide(currentSlide + 1);
    resetTimer();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    showSlide(currentSlide - 1);
    resetTimer();
});


dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        showSlide(parseInt(e.target.dataset.index));
        resetTimer();
    });
});


let autoTimer = setInterval(() => showSlide(currentSlide + 1), 5000);

function resetTimer() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => showSlide(currentSlide + 1), 5000);
}
