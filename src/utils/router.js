import { installRouter } from 'pwa-helpers/router.js';

export default class Router {
  constructor() {
    this.routes = [];
  }

  add(uri, handler) {
    this.routes.push({
      uri,
      handler,
      rule: this._getRule(uri),
    });
  }

  applay() {
    this.navigateTo("/");
  }

  navigateTo(uri) {
    installRouter(location => {
      window.history.pushState({}, '', uri);
      this._handleNavigation(location);
    });
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
