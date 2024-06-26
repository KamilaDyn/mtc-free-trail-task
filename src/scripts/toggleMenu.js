export function toggleMenu() {
  const toggleButton = document.querySelector('#menu-toggle');
  const navbar = document.querySelector('.navbar');
  const body = document.querySelector('body');
  const menuLinks = document.querySelectorAll('.menu__item');

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

  menuLinks.forEach((element) => {
    element.addEventListener('click', () => {
      navbar.classList.remove('navbar--active');
      toggleButton.classList.remove('hamburger--active');
      body.classList.remove('no-scroll');
    });
  });

  window.addEventListener('resize', resizedWindow);
}
