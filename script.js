// Efecto Parallax para la imagen de fondo del hero
document.addEventListener('DOMContentLoaded', function() {
    const heroBackground = document.querySelector('.hero-background');
    const heroSection = document.querySelector('.hero-section');
    
    if (heroBackground && heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroHeight = heroSection.offsetHeight;
            const heroTop = heroSection.offsetTop;
            
            // Solo aplicar el efecto cuando el hero está visible
            if (scrolled < heroTop + heroHeight) {
                // Mueve la imagen más lento que el scroll (efecto parallax)
                const parallaxSpeed = 0.5;
                const yPos = -(scrolled * parallaxSpeed);
                heroBackground.style.transform = `translateY(${yPos}px)`;
            }
        });
    }
});
