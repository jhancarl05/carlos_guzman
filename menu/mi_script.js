document.addEventListener('DOMContentLoaded', function() {
    // Añadimos evento click al botón del menú
    var toggleButton = document.querySelector('.navbar-toggler');
    toggleButton.addEventListener('click', function() {
        var overlay = document.querySelector('.overlay');
        overlay.classList.toggle('active'); // Alternar clase 'active' en overlay
    });
});