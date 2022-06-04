const openMenu = document.querySelector('.open');
const closeMenu = document.querySelector('.close');
const hamburgerMenu = document.querySelector('.hamburger-menu');

openMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('add');
    openMenu.classList.toggle('add');
});

closeMenu.addEventListener('click', () => {
    hamburgerMenu.classList.remove('add');
    openMenu.classList.remove('add')
});