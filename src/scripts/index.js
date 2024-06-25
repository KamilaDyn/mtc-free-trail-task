import '../style/index.scss';
import { toggleMenu } from './toggleMenu';
import Glide, {
  Autoplay,
  Controls,
  Breakpoints,
  Swipe,
} from '@glidejs/glide/dist/glide.modular.esm';

import { glide, testimonial } from './glide';
import { headerObserver } from './stickyNav';
import { lazyLoad } from './lazyload';
const imagesContext = require.context('../assets', false, /\.(jpg|png|svg)$/);

const imageFilenames = imagesContext.keys();

imageFilenames.forEach((filename) => {
  const imagePath = imagesContext(filename);
});

document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');
  const selectorLazy = document.querySelectorAll('.lazy');

  toggleMenu();
  glide.mount({ Autoplay, Controls, Breakpoints, Swipe });
  testimonial.mount({ Controls, Breakpoints, Swipe });

  headerObserver.observe(header);
  selectorLazy.forEach((item) => {
    lazyLoad.observe(item);
  });
});
