const hamburguerMenuBttn = document.querySelector('.header__hamburguer-menu');
const closeBttn = document.querySelector('.header__nav__close-icon');
const navBarMenu = document.querySelector('.header__nav__back');
const navMenu = document.querySelector('.header__nav__menu');

// Agregar event listener al botón del menú hamburguesa
hamburguerMenuBttn.addEventListener('click', toggleMenu);

closeBttn.addEventListener('click', toggleMenu);

// Agregar event listener para cambiar el menú en función del ancho de la ventana
window.addEventListener('resize', handleWindowResize);

// Función para mostrar el menú hamburguesa por defecto
function showHamburguerMenu() {
    hamburguerMenuBttn.style.display = 'block';
    closeBttn.style.display = 'none'; // Ocultar closeBttn
    navBarMenu.style.display = 'none';
}

// Función para ocultar el menú hamburguesa y mostrar el menú principal
function hideHamburguerMenu() {
    hamburguerMenuBttn.style.display = 'none';
    closeBttn.style.display = 'none'; // Ocultar closeBttn
    navBarMenu.style.display = 'block';
}

// Función para manejar el evento de clic en el menú hamburguesa
function toggleMenu() {
    if (window.innerWidth < 1200){
        if (navBarMenu.style.display === 'block') {
            navBarMenu.style.display = 'none';
            closeBttn.style.display = 'none'; // Ocultar closeBttn
        } else {
            navBarMenu.style.display = 'block';
            closeBttn.style.display = 'block'; // Mostrar closeBttn
        }
    }
    
}

// Agregar event listener para cambiar el menú en función del ancho de la ventana
function handleWindowResize() {
    if (window.innerWidth >= 1200) {
        hideHamburguerMenu();
    } else {
        showHamburguerMenu();
    }
}

// Llamar a handleWindowResize() cuando la página cargue para configurar el estado inicial
window.addEventListener('load', handleWindowResize);
