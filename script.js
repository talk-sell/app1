document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carousel');
    const backgroundBlur = document.getElementById('backgroundBlur');
    const images = document.querySelectorAll('.carousel-image');

    images.forEach(image => {
        image.addEventListener('click', function() {
            const src = image.src;
            backgroundBlur.style.backgroundImage = `url(${src})`;
        });
    });
});
