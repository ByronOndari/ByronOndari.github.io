document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
  
    function showSlides() {
      slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
      });
      slideIndex = (slideIndex + 1) % totalSlides;
    }
  
    setInterval(showSlides, 3000); // Change slide every 3 seconds
  });
  