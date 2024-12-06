let slideshowRunning = false;

resourceMonitoring.addEventListener('dblclick', function () {
    if (!slideshowRunning) {
        slideshowRunning = true; // Marchează că slideshow-ul rulează
        const images = document.querySelectorAll('#imaginires img');
        let currentIndex = 0;

        function showNextImage() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }

        setInterval(showNextImage, 3000);
    }
});