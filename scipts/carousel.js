function scrollCarousel(direction) {
    const carousel = document.getElementById('carouselImages');
    const scrollAmount = carouselImages.offsetwidth; // Adjust scroll amount as needed
    carouselImages.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });  
}
