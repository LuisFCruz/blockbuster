import Router from './utils/router';
import { Home } from './components/home/home';
import { Movie } from './components/movie/movie';
import { Header } from './components/header/header';
import './main.css';
import './components/index.js';

const router = new Router();

window.addEventListener('load', () => {
  const container = document.querySelector('.container');

  router.add('/', () => {
    container.innerHTML = '';
    const homeEl = new Home();
    container.appendChild(homeEl);
  });

  router.add('/movie/:id', movieId => {
    container.innerHTML = '';
    const el = new Movie(movieId);
    container.appendChild(el);
  });

  router.register();
});
