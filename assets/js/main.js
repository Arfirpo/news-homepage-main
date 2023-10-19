const hamburguerMenuBttn = document.querySelector('.header__hamburguer-menu');

const closeBttn = document.querySelector('.header__nav__close-icon');

const navBarMenu = document.querySelector('.header__nav__back');

hamburguerMenuBttn.addEventListener('click', (e)=>{
    toggleMenu();
});

closeBttn.addEventListener('click', ()=>{
    toggleMenu();
});


function toggleMenu() {
    if (navBarMenu.style.display === 'block') {
        navBarMenu.style.display = 'none';
    } else {
        navBarMenu.style.display = 'block';
    }
}