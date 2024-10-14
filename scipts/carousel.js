function scrollCarousel(direction) {
    const carousel = document.querySelector('.carousel-images');
    const scrollAmount = carousel.clientWidth; // Adjust scroll amount as needed
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });  
}
