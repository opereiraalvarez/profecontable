const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('navMenu');
if(toggle) toggle.addEventListener('click', () => menu.classList.toggle('active'));
