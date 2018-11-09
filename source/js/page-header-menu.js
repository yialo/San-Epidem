var menu = document.querySelector('.navigation--header');
var buttonOpen = document.querySelector('.page-header__menu-button--open');
var buttonClose = document.querySelector('.page-header__menu-button--close');

buttonOpen.addEventListener('click', function(evt) {
    evt.preventDefault();
    buttonOpen.classList.toggle('is-hidden');
    buttonClose.classList.toggle('is-hidden');
    menu.classList.toggle('is-hidden');
    buttonClose.focus();
  });

buttonClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    buttonOpen.classList.toggle('is-hidden');
    buttonClose.classList.toggle('is-hidden');
    menu.classList.toggle('is-hidden');
    buttonOpen.focus();
});


window.addEventListener('keydown', function(evt) {
    if ((evt.keyCode === 27) && (!menu.classList.contains('is-hidden'))) {
        evt.preventDefault();
        menu.classList.toggle('is-hidden');
        buttonOpen.classList.toggle('is-hidden');
        buttonClose.classList.toggle('is-hidden');
        buttonOpen.focus();
    }
});
