var overlay = document.querySelector('.overlay');
var modalCallRequest = document.querySelector('.call-request');
var contactsButton = document.querySelector('.contacts__button');

contactsButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    overlay.classList.add('is-visible');
    modalCallRequest.classList.add('is-visible');
});

overlay.addEventListener('click', function(evt) {
    evt.preventDefault();
    overlay.classList.remove('is-visible');
    modalCallRequest.classList.remove('is-visible');
});

window.addEventListener('keydown', function(evt) {
    if ((evt.keyCode === 27) && (modalCallRequest.classList.contains('is-visible'))) {
        evt.preventDefault();
        overlay.classList.remove('is-visible');
        modalCallRequest.classList.remove('is-visible');
    }
});
