// Validation on input blur

var email = document.querySelector('input[type="email"]');
var emailWarning = document.querySelector('.section-4 .input-wrapper--email span');
var emailWarningLine = document.querySelector('.section-4 .input-wrapper--email .warning-line');

var userName = document.querySelector('.input-wrapper--user input');
var userNameWarning = document.querySelector('.section-4 .input-wrapper--user span');
var userNameWarningLine = document.querySelector('.section-4 .input-wrapper--user .warning-line');

var form = document.forms[0];

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateName(name) {
    var regex = /^[a-zA-Zа-яА-Я]{2,30}$/;
    return regex.test(name.value);
}

function checkEmail() {
  if ( !email.value ) {
    emailWarningLine.style.right = '100%';
    emailWarning.style.display = '';
    return false;
  } else if ( !validateEmail(email.value) ) {
    emailWarningLine.style.right = '0';
    emailWarning.style.display = 'block';
    return false;
  } else {
    emailWarningLine.style.right = '100%';
    emailWarning.style.display = '';
    return true;
  };
}

function checkUserName() {
  if ( !userName.value ) {
    userNameWarningLine.style.right = '100%';
    userNameWarning.style.display = '';
    return false;
  } else if ( !validateName(userName) ) {
    userNameWarningLine.style.right = '0';
    userNameWarning.style.display = 'block';
    return false;
  } else {
    userNameWarningLine.style.right = '100%';
    userNameWarning.style.display = '';
    return true;
  };
}

email.addEventListener('blur', checkEmail);
userName.addEventListener('blur', checkUserName);

// Validation on form submit

form.addEventListener('submit', function(e) {
  var emailCheck = true;
  var userNameCheck = true;
  if ( !checkEmail() ) {
    emailWarningLine.style.right = '0';
    emailWarning.style.display = 'block';
    e.preventDefault();
    emailCheck = false;
  }
  if ( !checkUserName() ) {
    userNameWarningLine.style.right = '0';
    userNameWarning.style.display = 'block';
    e.preventDefault();
    userNameCheck = false;
  }
  if ( !emailCheck && !userNameCheck ) {
    return false;
  }
});