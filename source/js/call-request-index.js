var headerModalCallButton = document.querySelector('.page-header__phone-button');
var footerModalCallButton = document.querySelector('.page-footer__button');
var problemsButton = document.querySelector('.problems__button');
var contactsButton = document.querySelector('.contacts__button');
var overlay = document.querySelector('.overlay');
var modalCallRequest = document.querySelector('.call-request');
var modalCloseButton = document.querySelector('.call-request__close-button');
var callRequestForm = document.querySelector('.call-request__form');
var callRequestFullname = document.querySelector('.call-request__field--fullname');
var callRequestPhone = document.querySelector('.call-request__field--phone');
var callRequestCheckbox = document.querySelector('.call-request__checkbox');

headerModalCallButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    overlay.classList.add('is-visible');
    modalCallRequest.classList.add('is-visible');
});

problemsButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    overlay.classList.add('is-visible');
    modalCallRequest.classList.add('is-visible');
});

footerModalCallButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    overlay.classList.add('is-visible');
    modalCallRequest.classList.add('is-visible');
});

contactsButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    overlay.classList.add('is-visible');
    modalCallRequest.classList.add('is-visible');
});

overlay.addEventListener('click', function(evt) {
    evt.preventDefault();
    overlay.classList.remove('is-visible');
    modalCallRequest.classList.remove('is-visible');
    modalCallRequest.classList.remove('is-error');
});

modalCloseButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    overlay.classList.remove('is-visible');
    modalCallRequest.classList.remove('is-visible');
    modalCallRequest.classList.remove('is-error');
});

callRequestForm.addEventListener('submit', function(evt) {
    if (!callRequestFullname.value || !callRequestPhone.value || !callRequestCheckbox.checked) {
      evt.preventDefault();
      modalCallRequest.classList.remove('is-error');
      modalCallRequest.offsetWidth = modalCallRequest.offsetWidth;
      modalCallRequest.classList.add('is-error');
    }
  });

window.addEventListener('keydown', function(evt) {
    if ((evt.keyCode === 27) && (modalCallRequest.classList.contains('is-visible'))) {
        evt.preventDefault();
        overlay.classList.remove('is-visible');
        modalCallRequest.classList.remove('is-visible');
        modalCallRequest.classList.remove('is-error');
    }
});
