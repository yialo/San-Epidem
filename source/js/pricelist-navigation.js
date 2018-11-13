var priceNav = document.querySelector('.pricelist__navigation');
var priceNavButton = document.querySelector('.pricelist__navigation-button');
var priceNavItem_1 = document.querySelector('.pricelist__navigation-link--1');
var priceNavItem_2 = document.querySelector('.pricelist__navigation-link--2');
var priceNavItem_3 = document.querySelector('.pricelist__navigation-link--3');
var priceNavItem_4 = document.querySelector('.pricelist__navigation-link--4');
var priceNavItem_5 = document.querySelector('.pricelist__navigation-link--5');

priceNavButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    priceNav.classList.toggle('is-hidden');
});

window.addEventListener('keydown', function(evt) {
    if ((evt.keyCode === 27) && (!priceNav.classList.contains('is-hidden'))) {
        evt.preventDefault();
        priceNav.classList.toggle('is-hidden');
        priceNavButton.focus();
    }
});

priceNavItem_1.addEventListener('click', function(evt) {
    evt.preventDefault();
    priceNav.classList.toggle('is-hidden');
    priceNavButton.innerHTML = '';
    priceNavButton.innerHTML = priceNavItem_1.innerHTML;
});

priceNavItem_2.addEventListener('click', function(evt) {
    evt.preventDefault();
    priceNav.classList.toggle('is-hidden');
    priceNavButton.innerHTML = '';
    priceNavButton.innerHTML = priceNavItem_2.innerHTML;
});

priceNavItem_3.addEventListener('click', function(evt) {
    evt.preventDefault();
    priceNav.classList.toggle('is-hidden');
    priceNavButton.innerHTML = '';
    priceNavButton.innerHTML = priceNavItem_3.innerHTML;
});

priceNavItem_4.addEventListener('click', function(evt) {
    evt.preventDefault();
    priceNav.classList.toggle('is-hidden');
    priceNavButton.innerHTML = '';
    priceNavButton.innerHTML = priceNavItem_4.innerHTML;
});

priceNavItem_5.addEventListener('click', function(evt) {
    evt.preventDefault();
    priceNav.classList.toggle('is-hidden');
    priceNavButton.innerHTML = '';
    priceNavButton.innerHTML = priceNavItem_5.innerHTML;
});
