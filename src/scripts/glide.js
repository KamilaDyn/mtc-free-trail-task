import Glide, { Controls } from '@glidejs/glide/dist/glide.modular.esm';

export const glide = new Glide('.hero.glide', {
  type: 'carousel',
  autoplay: 4000,
  peak: 300,
  startAt: 0,
  perView: 1,
  animationTimingFunc: 'linear',
});

export const testimonial = new Glide('.testimonial.glide', {
  type: 'carousel',
  autoplay: 4000,
  peak: 300,
  startAt: 0,
  perView: 1,
  animationTimingFunc: 'linear',
});
