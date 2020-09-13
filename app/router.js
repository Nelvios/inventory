import EmberRouter from '@ember/routing/router';
import config from 'inventory/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('laptop', function () {
    this.route('item', { path: '/:id' });
  });
});
