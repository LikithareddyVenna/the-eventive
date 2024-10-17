// Scroll Carousel Function
function scrollCarousel(direction) {
    const carouselImages = document.getElementById('carouselImages');
    const imageWidth = carouselImages.querySelector('img').offsetWidth; // Get width of one image
    const currentScrollPosition = carouselImages.scrollLeft; // Current scroll position

    // Calculate the new scroll position
    const newScrollPosition = currentScrollPosition + (direction * imageWidth);

    // Scroll to the new position
    carouselImages.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
    });
}

