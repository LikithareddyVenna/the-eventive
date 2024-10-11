// Contact Form Submission
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you shortly.');
    // Here you can add code to handle form submission, e.g., send data to a server
    this.reset();
});

// Background Image Change on Scroll
const sections = document.querySelectorAll('section.background');
const backgroundImages = [
    'images/bg1.jpg',
    'images/bg2.jpg',
    'images/bg3.jpg',
    'images/bg4.jpg'
];
let currentIndex = 0;

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            section.style.backgroundImage = `url('${backgroundImages[currentIndex]}')`;
            currentIndex = (currentIndex + 1) % backgroundImages.length;
        }
    });
});
