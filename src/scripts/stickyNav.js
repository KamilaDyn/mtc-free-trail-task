const nav = document.querySelector('.navbar');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
export const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.5,
  rootMargin: `-${navHeight}px`,
});
