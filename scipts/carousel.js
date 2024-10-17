function scrollCarousel(direction) {
    const carousel = document.querySelector('carouselImages');
    const scrollAmount = carouselImages.offsetwidth; // Adjust scroll amount as needed
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });  
}
