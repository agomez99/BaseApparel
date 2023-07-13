const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmailFormat(emailAddress) {
  return emailRegex.test(emailAddress);
}

function signUp() {
  const emailInput = document.getElementById('email');
  const errorDisplay = document.getElementById('error-display');
  const successDisplay = document.getElementById('success-display');
  const email = emailInput.value;

  if (!isValidEmailFormat(email)) {
    errorDisplay.classList.add('visible');
    errorDisplay.textContent = 'Please provide a valid email';
    emailInput.style.border = '2px solid hsl(0, 93%, 68%)';
    document.getElementById('error-icon').style.visibility = 'visible';
    return;
  }

  errorDisplay.classList.remove('visible');
  errorDisplay.textContent = '';
  emailInput.value = '';
  const message = 'Successfully signed up newsletter for ';
  successDisplay.style.fontWeight = 'bold';
  successDisplay.textContent = message + email;
  successDisplay.classList.add('visible');
}

function clearError() {
  const errorDisplay = document.getElementById('error-display');
  const successDisplay = document.getElementById('success-display');
  const emailInput = document.getElementById('email');

  errorDisplay.textContent = '';
  successDisplay.textContent = '';
  emailInput.style = '';
  document.getElementById('error-icon').style.visibility = 'hidden';
}
