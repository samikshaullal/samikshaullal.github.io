var overlays = Array.from(document.getElementsByClassName('overlay-text visible'));
overlays.forEach(overlay => {
    overlay.addEventListener('click', () => {
        overlay.classList.remove('visible');
        
        
    });
});