function revealElements(entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('item--hidden');
    observer.unobserve(entry.target);
  });
}
export const lazyLoad = new IntersectionObserver(revealElements, {
  root: null,
  threshold: 0.15,
});
