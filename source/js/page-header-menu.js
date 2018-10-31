var menu = document.querySelector('.navigation--header');
var buttonOpen = document.querySelector('.page-header__menu-button--open');
var buttonClose = document.querySelector('.page-header__menu-button--close');

buttonOpen.addEventListener('click', function(evt) {
    evt.preventDefault();
    buttonOpen.classList.toggle('page-header__menu-button--js-hidden');
    buttonClose.classList.toggle('page-header__menu-button--js-hidden');
    menu.classList.toggle('navigation--js-closed');
    buttonClose.focus();
  });

buttonClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    buttonOpen.classList.toggle('page-header__menu-button--js-hidden');
    buttonClose.classList.toggle('page-header__menu-button--js-hidden');
    menu.classList.toggle('navigation--js-closed');
    buttonOpen.focus();
});


window.addEventListener('keydown', function(evt) {
    if ((evt.keyCode === 27) && (!menu.classList.contains('navigation--js-closed'))) {
        evt.preventDefault();
        menu.classList.toggle('navigation--js-closed');
        buttonOpen.classList.toggle('page-header__menu-button--js-hidden');
        buttonClose.classList.toggle('page-header__menu-button--js-hidden');
        buttonOpen.focus();
    }
});
