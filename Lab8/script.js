const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');


hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('show');
});


document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});


document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('show');
    }
});



let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;


function showSlide(index) {
    
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

   
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

 
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}


document.getElementById('nextBtn').addEventListener('click', () => {
    showSlide(currentSlide + 1);
    resetAutoPlay(); 
});

document.getElementById('prevBtn').addEventListener('click', () => {
    showSlide(currentSlide - 1);
    resetAutoPlay();
});


dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const index = parseInt(e.target.dataset.index);
        showSlide(index);
        resetAutoPlay();
    });
});


let autoPlayInterval = setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000); 


function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
}

// Ініціалізація першого слайда при завантаженні
showSlide(0);
