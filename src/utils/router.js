import { installRouter } from 'pwa-helpers/router.js';
import constants from '../constants';

export default class Router {
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
    return `${constants.path}${uri}`;
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
