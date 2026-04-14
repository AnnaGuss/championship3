const navMain = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const navWrapper = document.querySelector('.nav__wrapper');
const mainContainer = document.querySelector('.main-container');
const footer = document.querySelector('footer');
const buttonHeader = document.querySelector('.header .button');
const mediaDesktop = window.matchMedia('(min-width: 970px)');

const media = window.matchMedia('(max-width: 969px)');


navToggle.addEventListener('click', () => {
  const isMobile = media.matches;

  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
    navMain.classList.add('menu-open');

    if (isMobile) {
      navWrapper.removeAttribute('inert');
      mainContainer.setAttribute('inert', '');
      mainContainer.classList.add('glass-effect');
      footer.setAttribute('inert', '');
      footer.classList.add('glass-effect');
    }

  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
    navMain.classList.remove('menu-open');

    if (isMobile) {
      navWrapper.setAttribute('inert', '');
      mainContainer.removeAttribute('inert');
      mainContainer.classList.remove('glass-effect');
      footer.removeAttribute('inert');
      footer.classList.remove('glass-effect');
    }
  }
});


function updateTabIndex(e) {
  buttonHeader.tabIndex = e.matches ? 2 : 0;
}

updateTabIndex(media);
media.addEventListener('change', updateTabIndex);


function updateInert(e) {
  if (e.matches) {
    navWrapper.removeAttribute('inert');
  } else {
    navWrapper.setAttribute('inert', '');
  }
}

updateInert(mediaDesktop);
mediaDesktop.addEventListener('change', updateInert);
