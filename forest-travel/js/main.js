const button = document.querySelector('.header-nav-menu-btn');
const menu = document.querySelector('.hidden-menu')

button.addEventListener('click', function() {
    button.classList.toggle('header-nav-menu-btn--active');
    menu.classList.toggle('hidden-menu--active');
})