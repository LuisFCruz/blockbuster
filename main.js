/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/blockbuster/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

class Header extends HTMLElement {
  constructor() {
    super();
  }

  static get name() {
    return 'b-header';
  }

  connectedCallback() {
    const template = `
      <header>
        <a href="">
          <h1>
            Block<span>buster</span>
          </h1>
        </a>
      </header>
    `;
    this.innerHTML = template;
  }
}

customElements.define(Header.name, Header);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

class InstallApp extends HTMLElement {
  constructor() {
    super();
    this._deferredPrompt;
  }

  static get name() {
    return 'b-install-app';
  }

  connectedCallback() {
    this.hiddenOptions();
    const template = `
      <section>
        <strong>Mantenha se atualizado</strong>
        <p>Nosso app é rápido, pequeno e funciona offline</p>
        <div>
          <button id="cancel-install">Não, obrigado</button>
          <button id="install-app">Aceito</button>
        </div>
      </section>
    `;

    this.innerHTML = template;

    window.addEventListener(
      'beforeinstallprompt',
      this.handlerBeforeInstallPrompt.bind(this)
    );
  }

  disconnectedCallback() {
    window.removeEventListener(
      'beforeinstallprompt',
      this.handlerBeforeInstallPrompt.bind(this)
    );

    const installApp = this.querySelector('#install-app');
    installApp.removeEventListener('click', this.handlerInstallApp.bind(this));

    const cancelInstall = this.querySelector('#cancel-install');
    cancelInstall.removeEventListener('click', this.hiddenOptions.bind(this));
  }

  handlerBeforeInstallPrompt(event) {
    this.style.display = 'block';
    event.preventDefault();
    this._deferredPrompt = event;

    const installApp = this.querySelector('#install-app');
    installApp.addEventListener('click', this.handlerInstallApp.bind(this));

    const cancelInstall = this.querySelector('#cancel-install');
    cancelInstall.addEventListener('click', this.hiddenOptions.bind(this));
  }

  async handlerInstallApp() {
    this._deferredPrompt.prompt();
    await this._deferredPrompt.userChoice;
    this.hiddenOptions();
  }

  hiddenOptions() {
    this.style.display = 'none';
  }
}

customElements.define(InstallApp.name, InstallApp);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class Rating extends HTMLElement {
  constructor() {
    super();
  }

  static get name() {
    return 'b-rating';
  }

  connectedCallback() {
    const value = this.getAttribute('value');
    const rating = parseFloat(value);

    const template = `
      <section>
        <h3 class="sub-title">Nota</h3>
        <div>
          <i class="i-star ${!rating ? 'empty' : ''}"></i>
          <span>${rating ? rating.toLocaleString() : ''}</span>
          <span>${this.ratingToText(rating)}</span>
        </div>
      </section>
    `;

    this.innerHTML = template;
  }

  ratingToText(rating = 0) {
    const values = ['Péssimo', 'Ruim', 'Bom', 'Ótimo', 'Excelente'];
    const index = Math.round(rating / 2) - 1;
    return values[index] || 'Nenhuma avaliação';
  }
}

customElements.define(Rating.name, Rating);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

class NotFound extends HTMLElement {
  constructor() {
    super();
  }

  static get name() {
    return 'b-not-found';
  }

  connectedCallback() {
    const template = `
        <div>
          <i class="i-sad-face"></i>
        </div>
        <p>Ops! Não encontramos o que você esta procurando.</p>
    `;

    this.innerHTML = template;
  }

}

customElements.define(NotFound.name, NotFound);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

class Spinner extends HTMLElement {
  constructor() {
    super();
  }

  static get name() {
    return 'b-spinner';
  }

  connectedCallback() {
   
    const template = `
      <div class="spinner-cube">
        <div class="cube1 cube"></div>
        <div class="cube2 cube"></div>
        <div class="cube4 cube"></div>
        <div class="cube3 cube"></div>
      </div>
    `;

    this.innerHTML = template;
  }
}

customElements.define(Spinner.name, Spinner);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/pwa-helpers/router.js
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
  Basic router that calls a callback whenever the location is updated.

  Example:

      import { installRouter } from 'pwa-helpers/router.js';

      installRouter((location) => handleNavigation(location));

  For example, if you're using this router in a Redux-connected component,
  you could dispatch an action in the callback:

      import { installRouter } from 'pwa-helpers/router.js';
      import { navigate } from '../actions/app.js';

      installRouter((location) => store.dispatch(navigate(location)))

  If you need to force a navigation to a new location programmatically, you can
  do so by pushing a new state using the History API, and then manually
  calling the callback with the new location:

      window.history.pushState({}, '', '/new-route');
      handleNavigation(window.location);

  Optionally, you can use the second argument to read the event that caused the
  navigation. For example, you may want to scroll to top only after a link click.

      installRouter((location, event) => {
        // Only scroll to top on link clicks, not popstate events.
        if (event && event.type === 'click') {
          window.scrollTo(0, 0);
        }
        handleNavigation(location);
      });
*/
const installRouter = (locationUpdatedCallback) => {
    document.body.addEventListener('click', e => {
        if (e.defaultPrevented || e.button !== 0 ||
            e.metaKey || e.ctrlKey || e.shiftKey)
            return;
        const anchor = e.composedPath().filter(n => n.tagName === 'A')[0];
        if (!anchor || anchor.target ||
            anchor.hasAttribute('download') ||
            anchor.getAttribute('rel') === 'external')
            return;
        const href = anchor.href;
        if (!href || href.indexOf('mailto:') !== -1)
            return;
        const location = window.location;
        const origin = location.origin || location.protocol + '//' + location.host;
        if (href.indexOf(origin) !== 0)
            return;
        e.preventDefault();
        if (href !== location.href) {
            window.history.pushState({}, '', href);
            locationUpdatedCallback(location, e);
        }
    });
    window.addEventListener('popstate', e => locationUpdatedCallback(window.location, e));
    locationUpdatedCallback(window.location, null /* event */);
};
//# sourceMappingURL=router.js.map
// CONCATENATED MODULE: ./src/constants.js
const path =  true ? `/${"blockbuster"}` : undefined;

const constants = {
  baseUrl: `${"https://luisfcruz.github.io"}${path}`,
  path
};

/* harmony default export */ var src_constants = (constants);

// CONCATENATED MODULE: ./src/utils/router.js



class router_Router {
  constructor() {
    this.routes = [];
  }

  add(uri, handler) {
    const path = this._getPath(uri);
    this.routes.push({
      uri: path,
      handler,
      rule: this._getRule(path),
    });
  }

  register() {
    installRouter(location => {
      this._handleNavigation(location);
    });
  }

  _getPath(uri) {
    return `${src_constants.path}${uri}`;
  }

  _getRule(uri) {
    const rule = uri.replace(/([\/])/g, '\\$1').replace(/\:id/g, '(\\d+)');
    return new RegExp('^' + rule + '$', 'i');
  }

  _handleNavigation({ pathname }) {
    const route = this.routes.find(r => this._testRoute(r, pathname));

    if (route) {
      const params = this._getParams(route, pathname);
      route.handler.apply(null, params);
    }
  }

  _testRoute({ rule }, pathname) {
    return rule.test(pathname);
  }

  _getParams({ rule }, pathname) {
    const match = pathname.match(rule);
    if (match) {
      match.shift();
      return match;
    }
  }
}

// CONCATENATED MODULE: ./src/services/client/index.js
const client = {
  get: async url => {
    const result = await fetch(url, {
      method: 'GET',
    });

    return result.json()

  }
};

// CONCATENATED MODULE: ./src/services/movies/index.js



const getMovies = async () => {
  try {
    return await client.get(`${src_constants.baseUrl}/movies.json`);
  } catch {
    return null;
  }
};

const getMovieInfo = async (movieId) => {
  try {
    return await client.get(`${src_constants.baseUrl}/movies/${movieId}.json`);
  } catch {
    return null;
  }
}

const serviceMovies = { getMovies, getMovieInfo };

// CONCATENATED MODULE: ./src/components/movie-item/movie-item.js
class MovieItem extends HTMLElement {
  constructor(movie) {
    super();
    this.movie = movie;
  }

  static get name() {
    return 'b-movie-item';
  }

  connectedCallback() {
    const { title, image, release, rating, id, type } = this.movie;
    const year = this._getReaseYear(release, type);
    const template = `
      <b-image src="${image}" title="Poster ${title}"></b-image>
      <div>
        <h2>
          <a href="movie/${id}" alt="Acessar ${title}" >${title}</a>
        </h2>
        <span>${year}</span>
        <span>${rating ? `Nota ${rating.toLocaleString()}` : ''}</span>
      </div>
    `;
    this.innerHTML = template;
  }

  _getReaseYear(release, type) {
    if (type === 'F') {
      const [,year] =  release.match(/(\d{4})$/);
      return year;
    }

    return release;
  }
}

customElements.define(MovieItem.name, MovieItem);

// CONCATENATED MODULE: ./src/components/home/home.js



class home_Home extends HTMLElement {
  constructor() {
    super();
  }

  static get name() {
    return 'b-home';
  }

  async connectedCallback() {
    this.innerHTML = '<b-spinner></b-spinner>';

    const movies = await serviceMovies.getMovies();

    if (movies) {
      this.innerHTML = '';

      movies.forEach(movie => this.appendChild(new MovieItem(movie)));
    } else {
      this.innerHTML = '<b-not-found></b-not-found>';
    }
  }
}

customElements.define(home_Home.name, home_Home);

// CONCATENATED MODULE: ./src/components/movie/movie.js


class movie_Movie extends HTMLElement {
  constructor(movieId) {
    super();
    this.movieId = movieId;
  }

  static get name() {
    return 'b-movie';
  }

  async connectedCallback() {
    this.innerHTML = '<b-spinner></b-spinner>';

    const movie = await serviceMovies.getMovieInfo(this.movieId);

    if (!movie) {
      this.innerHTML = '<b-not-found></b-not-found>';
      return;
    }

    const {
      title,
      originalTitle,
      release,
      image,
      synopsis,
      rating,
      genre = '',
      duration = '',
      recommended = '',
      seasons = '',
      episodes = '',
    } = movie;

    const template = `
      <article>
        <h2>${title}</h2>
        <div>
          <b-image src="${image}" title="Poster ${title}"></b-image>
          <p>${synopsis}</p>
        </div>
        <b-rating value="${rating}"></b-rating>
        <b-datasheet
          originalTitle="${originalTitle}"
          release="${release}"
          genre="${genre}"
          duration="${duration}"
          recommended="${recommended}"
          seasons="${seasons}"
          episodes="${episodes}"
        ></b-datasheet>
      </article>
    `;

    this.innerHTML = template;
  }
}

customElements.define(movie_Movie.name, movie_Movie);

// EXTERNAL MODULE: ./src/components/header/header.js
var header = __webpack_require__(0);

// EXTERNAL MODULE: ./src/main.css
var main = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/image/image.js


class image_Image extends HTMLElement {
  constructor() {
    super();
  }

  static get name() {
    return 'b-image';
  }

  connectedCallback() {
    const image = this.getAttribute('src');
    const title = this.getAttribute('title');

    const template = `
      <figure>
        <img src="${src_constants.baseUrl}/images/${image}" alt=${title} />
      </figure>
    `;
    this.innerHTML = template;
  }
}

customElements.define(image_Image.name, image_Image);

// CONCATENATED MODULE: ./src/components/datasheet/datasheet.js
class Datasheet extends HTMLElement {
  constructor(movieId) {
    super();
    this.movieId = movieId;
  }

  static get name() {
    return 'b-datasheet';
  }

  async connectedCallback() {
    const originalTitle = this.getAttribute('originalTitle');
    const release = this.getAttribute('release');
    const genre = this.getAttribute('genre');
    const duration = this.getAttribute('duration');
    const recommended = this.getAttribute('recommended');
    const seasons = this.getAttribute('seasons');
    const episodes = this.getAttribute('episodes');

    const recommendedDescritipion =
      recommended === 'L'
        ? 'Recomendado para todas as idades'
        : `Não recomendado para menores de ${recommended} anos`;

    const template = `
      <section>
        <h3 class="sub-title">Ficha Técnica</h3>
          <b-datasheet-item label="Título Original" description="${originalTitle}" ></b-datasheet-item>
          <b-datasheet-item label="Lançamento" description="${release}" ></b-datasheet-item>
          <b-datasheet-item label="Gênero" description="${genre}" ></b-datasheet-item>
          <b-datasheet-item label="Duração" description="${duration}" ></b-datasheet-item>
          <b-datasheet-item
            label="Recomendação"
            description="${recommendedDescritipion}"
          ></b-datasheet-item>
          <b-datasheet-item
            label="Temporadas"
            description="${seasons}"
          ></b-datasheet-item>
          <b-datasheet-item
            label="Episódios"
            description="${episodes}"
          ></b-datasheet-item>
      </section>
    `;

    this.innerHTML = template;
  }
}

customElements.define(Datasheet.name, Datasheet);

// CONCATENATED MODULE: ./src/components/datasheet-item/datasheet-item.js
class DatasheetItem extends HTMLElement {
  constructor() {
    super();
  }

  static get name() {
    return 'b-datasheet-item';
  }

  async connectedCallback() {
    const label = this.getAttribute('label');
    const description = this.getAttribute('description');

    if (description) {
      const template = `
            <div>
              <span>${label}:</span> ${description}
            </div>
        `;

      this.innerHTML = template;
    }
  }
}

customElements.define(DatasheetItem.name, DatasheetItem);

// EXTERNAL MODULE: ./src/components/install-app/install-app.js
var install_app = __webpack_require__(2);

// EXTERNAL MODULE: ./src/components/rating/rating.js
var rating_rating = __webpack_require__(3);

// EXTERNAL MODULE: ./src/components/not-found/not-found.js
var not_found = __webpack_require__(4);

// EXTERNAL MODULE: ./src/components/spinner/spinner.js
var spinner = __webpack_require__(5);

// CONCATENATED MODULE: ./src/components/index.js












// CONCATENATED MODULE: ./src/app.js







const router = new router_Router();

window.addEventListener('load', () => {
  const container = document.querySelector('.container');

  router.add('/', () => {
    container.innerHTML = '';
    const homeEl = new home_Home();
    container.appendChild(homeEl);
  });

  router.add('/movie/:id', movieId => {
    container.innerHTML = '';
    const el = new movie_Movie(movieId);
    container.appendChild(el);
  });

  router.register();
});


/***/ })
/******/ ]);