const buttonMailto = document.querySelector('.button-mailto');
const modalMailUs = document.querySelector('.modal-mail-us');
const modalClose = modalMailUs.querySelector('.modal-close');
const mailUsForm = modalMailUs.querySelector('.mail-us-form');
const nameInput = modalMailUs.querySelector('[name=name]');
const emailInput = modalMailUs.querySelector('[name=email]');
const textmessageInput =modalMailUs.querySelector('[name=message]')

let isStorageSupport = true;
let storageName = '';
let storageEmail = '';

try {
  storageName = localStorage.getItem('nameInput');
  storageEmail = localStorage.getItem('emailInput');
} catch (err) {
  isStorageSupport = false;
};

buttonMailto.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMailUs.classList.add('modal-show');
  if (storageName && storageEmail) {
    nameInput.value = storageName;
    emailInput.value = storageEmail;
    textmessageInput.focus();
  } else {
    nameInput.focus();
  }
});

modalClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMailUs.classList.remove('modal-show');
  modalMailUs.classList.remove('modal-error');
});

mailUsForm.addEventListener('submit', function (evt) {
  if (!nameInput.value || !emailInput.value) {
    evt.preventDefault();
    modalMailUs.classList.remove('modal-error');
    modalMailUs.offsetWidth = modalMailUs.offsetWidth;
    modalMailUs.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('email', emailInput.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modalMailUs.classList.contains('modal-show')) {
      evt.preventDefault();
      modalMailUs.classList.remove('modal-show');
      modalMailUs.classList.remove('modal-error');
   }
  }
});


