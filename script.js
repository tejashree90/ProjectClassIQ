function goTo(id, url) {
  var el = document.getElementById(id);
  if (el) {
    el.addEventListener('click', function () {
      window.location.href = url;
    });
  }
}

goTo('loginButton', 'Login.html');
goTo('signupButton', 'Signup.html');
goTo('brandLogo', 'Index.html');
goTo('course', 'EnrollCourse.html');
goTo('dashboard', 'Index.html');
goTo('exploreCoursesBtn', 'EnrollCourse.html');

function setFieldError(id, message) {
  var el = document.getElementById(id);
  if (!el) return;
  el.textContent = message;

  var input = el.previousElementSibling;
  if (input) {
    input.classList.toggle('input-invalid', Boolean(message));
  }
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function setupFormValidation(formId) {
  var form = document.getElementById(formId);
  if (!form) return;

  var fullnameInput = document.getElementById('fullname');
  var emailInput = document.getElementById('email');
  var passwordInput = document.getElementById('password');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var isValid = true;

    setFieldError('fullnameError', '');
    setFieldError('emailError', '');
    setFieldError('passwordError', '');

    if (fullnameInput && fullnameInput.value.trim().length < 2) {
      setFieldError('fullnameError', 'Please enter your full name.');
      isValid = false;
    }

    if (!emailInput || !isValidEmail(emailInput.value.trim())) {
      setFieldError('emailError', 'Please enter a valid email address.');
      isValid = false;
    }

    if (!passwordInput || passwordInput.value.length < 6) {
      setFieldError('passwordError', 'Password must be at least 6 characters.');
      isValid = false;
    }

    if (isValid) {
      form.reset();
      alert(formId === 'signupForm' ? 'Account created successfully!' : 'Logged in successfully!');
    }
  });
}

setupFormValidation('loginForm');
setupFormValidation('signupForm');
