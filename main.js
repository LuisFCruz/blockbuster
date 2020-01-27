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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports) {

class Link extends HTMLElement {
  constructor() {
    super();
  }

  static get name() {
    return 'b-link';
  }

  connectedCallback() {
    this.addEventListener('click', this.handlerClick.bind(this), false);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.handlerClick.bind(this), false);
  }

  handlerClick(event) {
    event.preventDefault();
    this.router.navigateTo(this.getAttribute('href'));
  }
}

customElements.define(Link.name, Link);


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
      <strong>Deseja installar nosso app?</strong>
      <div>
        <button id="cancel-install">Não</button>
        <button id="install-app">Sim</button>
      </div>
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

    const installApp = this.getElementById('install-app');
    installApp.removeEventListener('click', this.handlerInstallApp.bind(this));

    const cancelInstall = this.getElementById('cancel-install');
    cancelInstall.removeEventListener('click', this.hiddenOptions.bind(this));
  }

  handlerBeforeInstallPrompt(event) {
    this.style.display = 'block';
    event.preventDefault();
    this._deferredPrompt = event;

    const installApp = this.getElementById('install-app');
    installApp.addEventListener('click', this.handlerInstallApp.bind(this));

    const cancelInstall = this.getElementById('cancel-install');
    cancelInstall.addEventListener('click', this.hiddenOptions.bind(this));
  }

  async handlerInstallApp() {
    this._deferredPrompt.prompt();
    const choiceResult = await this._deferredPrompt.userChoice;
    this.hiddenOptions();

    if (choiceResult.outcome === 'accepted') {
      console.log('user accepted');
    } else {
      console.log('user dismissed');
    }
  }

  hiddenOptions() {
    this.style.display = 'none';
  }
}

customElements.define(InstallApp.name, InstallApp);


/***/ }),
/* 3 */,
/* 4 */
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

  applay() {
    const [route] = this.routes;
    this._handleNavigation({ pathname: route.uri });
  }

  navigateTo(uri) {
    installRouter(location => {
      window.history.pushState({}, '', this._getPath(uri));
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
    return [];
  }
};

const getMovieInfo = async (movieId) => {
  try {
    return await client.get(`${src_constants.baseUrl}/movies/${movieId}.json`);
  } catch {
    return {};
  }
}

const serviceMovies = { getMovies, getMovieInfo };

// CONCATENATED MODULE: ./src/components/movie-item/movie-item.js
class MovieItem extends HTMLElement {
  constructor(router, movie) {
    super();
    this.router = router;
    this.movie = movie;
  }

  static get name() {
    return 'b-movie-item';
  }

  connectedCallback() {
    const { title, image, release, rating, id } = this.movie;
    const [, year] = release.match(/(\d{4})$/);

    const template = `
      <b-image src="${image}" title="Poster ${title}"></b-image>
      <div>
        <h2>
          <b-link href="/movie/${id}" alt="Acessar ${title}" >${title}</b-link>
        </h2>
        <span>${year}</span>
        <span>Nota ${rating.toLocaleString()}</span>
      </div>
    `;
    this.innerHTML = template;

    const link = this.querySelector('b-link');
    link.router = this.router;
  }
}

customElements.define(MovieItem.name, MovieItem);

// CONCATENATED MODULE: ./src/components/home/home.js



class home_Home extends HTMLElement {
  constructor(router) {
    super();
    this.router = router;
  }

  static get name() {
    return 'b-home';
  }

  async connectedCallback() {
    const movies = await serviceMovies.getMovies();
    movies.forEach(movie => this.appendChild(new MovieItem(this.router, movie)));
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
    const {
      title,
      originalTitle,
      release,
      genre,
      duration,
      recommended,
      image,
      synopsis,
    } = await serviceMovies.getMovieInfo(this.movieId);

    const template = `
      <article>
        <h2>${title}</h2>
        <div>
          <b-image src="${image}" title="Poster ${title}"></b-image>
          <p>${synopsis}</p>
        </div>
        <b-datasheet
          originalTitle="${originalTitle}"
          release="${release}"
          genre="${genre}"
          duration="${duration}"
          recommended="${recommended}"
        ></b-datasheet>
      </article>
    `;

    this.innerHTML = template;
  }
}

customElements.define(movie_Movie.name, movie_Movie);

// CONCATENATED MODULE: ./src/components/header/header.js
class Header extends HTMLElement {
  constructor(router) {
    super();
    this.router = router;
  }

  static get name() {
    return 'b-header';
  }

  connectedCallback() {
    const template = `
      <header>
        <b-link href="/">
          <h1>
            Block<span>buster</span>
          </h1>
        </b-link>
      </header>
    `;
    this.innerHTML = template;

    const link = this.querySelector('b-link');
    link.router = this.router;
  }
}

customElements.define(Header.name, Header);
// EXTERNAL MODULE: ./src/main.css
var main = __webpack_require__(0);

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

    const recommendedDescritipion =
      recommended === 'L'
        ? 'Recomendado para todas as idades'
        : `Não recomendado para menores de ${recommended} anos`;

    const template = `
      <section>
        <h3>Ficha Técnica</h3>
        <b-datasheet-item label="Título Original" description="${originalTitle}" ></b-datasheet-item>
          <b-datasheet-item label="Data de Lançamento" description="${release}" ></b-datasheet-item>
          <b-datasheet-item label="Gênero" description="${genre}" ></b-datasheet-item>
          <b-datasheet-item label="Duração" description="${duration}" ></b-datasheet-item>
          <b-datasheet-item
            label="Recomendação"
            description="${recommendedDescritipion}"
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

    const template = `
        <div>
          <span>${label}:</span> ${description}
        </div>
    `;

    this.innerHTML = template;
  }
}

customElements.define(DatasheetItem.name, DatasheetItem);

// EXTERNAL MODULE: ./src/components/link/link.js
var link_link = __webpack_require__(1);

// EXTERNAL MODULE: ./src/components/install-app/install-app.js
var install_app = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/index.js










// CONCATENATED MODULE: ./src/app.js







const router = new router_Router();

window.addEventListener('load', () => {
  const container = document.querySelector('.container');

  router.add('/', () => {
    container.innerHTML = '';
    const headerEl = new Header(router);
    container.appendChild(headerEl);
    const homeEl = new home_Home(router);
    container.appendChild(homeEl);
  });

  router.add('/movie/:id', movieId => {
    container.innerHTML = '';
    const headerEl = new Header(router);
    container.appendChild(headerEl);
    const el = new movie_Movie(movieId);
    container.appendChild(el);
  });

  router.applay();
});


/***/ })
/******/ ]);