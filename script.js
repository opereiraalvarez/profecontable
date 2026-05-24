const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('navMenu');

if (toggle) {
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});
