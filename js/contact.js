const submit = document.getElementById('submitBtn');
const fullNameError = document.querySelector('.fullNameError');
const contactError = document.querySelector('.contactError');
const emailError = document.querySelector('.emailError');
const messageError = document.querySelector('.messageError');

const postsUrl = '';

submit.onclick = function (event) {
  event.preventDefault();

  const fullName = document.querySelector('#fullName').value.trim();
  const contact = document.querySelector('#contact').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();

  if (fullName.length > 5) {
    fullNameError.classList.add('hide');
    fullNameError.classList.remove('show');
  } else {
    fullNameError.classList.add('show');
    fullNameError.classList.remove('hide');
  }

  if (contact.length >= 5) {
    contactError.classList.add('hide');
    contactError.classList.remove('show');
  } else {
    contactError.classList.add('show');
    contactError.classList.remove('hide');
  }

  if (validateEmail(email)) {
    emailError.classList.add('hide');
    emailError.classList.remove('show');
  } else {
    emailError.classList.add('show');
    emailError.classList.remove('hide');
  }

  if (message.length > 15) {
    messageError.classList.add('hide');
    messageError.classList.remove('show');
  } else {
    messageError.classList.add('show');
    messageError.classList.remove('hide');
  }
};

function validateEmail(emailAddress) {
  const emailExpression =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const isEmailValid = emailExpression.test(emailAddress);
  return isEmailValid;
}
