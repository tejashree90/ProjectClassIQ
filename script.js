
document.getElementById('loginButton').addEventListener('click', function () {
  window.location.href = 'Login.html';
});

document.getElementById('signupButton').addEventListener('click', function () {
  window.location.href = 'Signup.html';
});

document.getElementById('brandLogo').addEventListener('click', function () {
  window.location.href = 'index.html';
});

document.getElementById('course').addEventListener('click', function () {
  window.location.href = 'EnrollCourse.html';
});

document.getElementById('dashboard').addEventListener('click', function () {
  window.location.href = 'index.html';
});


  window.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.company-logos');
    let scrollAmount = 0;

    function autoScroll() {
      scrollAmount -= 1;
      if (Math.abs(scrollAmount) >= track.scrollWidth / 2) {
        scrollAmount = 0;
      }
      track.style.transform = `translateX(${scrollAmount}px)`;
      requestAnimationFrame(autoScroll);
    }

    autoScroll();
  });