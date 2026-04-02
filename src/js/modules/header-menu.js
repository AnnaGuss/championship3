const navMain = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const navWrapper = document.querySelector('.nav__wrapper');
const mainContainer = document.querySelector('.main-container');


navToggle.addEventListener ('click', () => {
    if (navMain.classList.contains('nav--closed')) {
        navMain.classList.remove('nav--closed');
        navMain.classList.add('nav--opened');
        navMain.classList.add('menuOpen');
        navWrapper.toggleAttribute('inert', false)
        mainContainer.toggleAttribute('inert', true)
        mainContainer.classList.add('glass-effect')
    } else {
        navMain.classList.add('nav--closed');
        navMain.classList.remove('nav--opened');
        navMain.classList.remove('menuOpen');
        navWrapper.toggleAttribute('inert', true)
        mainContainer.toggleAttribute('inert', false)
        mainContainer.classList.remove('glass-effect')
    }
});



const buttonHeader = document.querySelector('.header .button')
const media = window.matchMedia('(max-width: 768px)')

function updateTabIndex(e) {
    buttonHeader.tabIndex = e.matches ? 2 : 0
}

updateTabIndex(media)
media.addEventListener('change', updateTabIndex)
