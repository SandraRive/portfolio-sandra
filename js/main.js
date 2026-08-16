// Punto de entrada del JavaScript del portfolio
console.log('Portfolio cargado correctamente ✅');

// Menú hamburguesa (móvil)
const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks = document.getElementById('navbar-links');

navbarToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('navbar__links--open');
});

// Cerrar el menú al hacer clic en un enlace (útil en móvil)
navbarLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navbarLinks.classList.remove('navbar__links--open');
  });
});