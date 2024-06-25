export function toggleMenu() {
  const toggleButton = document.querySelector('#menu-toggle');
  const navbar = document.querySelector('.navbar');
  const body = document.querySelector('body');

  function resizedWindow() {
    const bodyWidth = body.getBoundingClientRect().width;
    if (bodyWidth > 992) {
      navbar.classList.remove('navbar--active');
      toggleButton.classList.remove('hamburger--active');
      body.classList.remove('no-scroll');
    }
  }

  toggleButton.addEventListener('click', function () {
    navbar.classList.toggle('navbar--active');
    toggleButton.classList.toggle('hamburger--active');
    body.classList.toggle('no-scroll');
  });

  window.addEventListener('resize', resizedWindow);
}
