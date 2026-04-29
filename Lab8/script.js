// --- МЕНЮ ГАМБУРГЕР ---
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// --- КАРУСЕЛЬ ---
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Автоматичне перемикання (п. 1.2.3)
let autoSlide = setInterval(() => showSlide(currentSlide + 1), 5000);

document.getElementById('nextBtn').addEventListener('click', () => {
    showSlide(currentSlide + 1);
    resetTimer();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    showSlide(currentSlide - 1);
    resetTimer();
});

// Перемикання через індикатори (dots)
dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        showSlide(parseInt(e.target.dataset.index));
        resetTimer();
    });
});

function resetTimer() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => showSlide(currentSlide + 1), 5000);
}
