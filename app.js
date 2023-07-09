const openMobileMenu = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMobileMenu = document.querySelector('.mobile-menu-close');

openMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.add('show');
});

closeMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('show');
});
