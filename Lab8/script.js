/**
 * Лабораторна робота №8
 */

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Гамбургер
hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('show');
});

document.addEventListener('click', () => navMenu.classList.remove('show'));

// Карусель
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    // Коректний індекс
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    // Скидаємо всі слайди
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Активуємо потрібний
    slides[currentSlide].classList.add('active');

    // Оновлюємо крапки (якщо вони є в HTML)
    if (dots.length > 0) {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    }
}

// Кнопки
document.getElementById('nextBtn').addEventListener('click', (e) => {
    e.preventDefault();
    showSlide(currentSlide + 1);
});

document.getElementById('prevBtn').addEventListener('click', (e) => {
    e.preventDefault();
    showSlide(currentSlide - 1);
});

// Автоперемикання
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Старт
showSlide(0);
