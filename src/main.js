import { advantages } from './assets/js/advantages.js';
import { animationOfFooter, animationOfImage } from './assets/js/animations.js';
import { gallery } from './assets/js/gallery.js';
import { burger } from './assets/js/menu.js';

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 1200) {
    advantages();
  }
  burger();
  gallery();
  animationOfImage();
  animationOfFooter();
});
