import angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-resource';
import 'angular-loading-bar';
import 'angular-youtube-embed';
import 'plangular-3/dist/plangular';
import 'ngtweet';

// directive
import './directive/index';

// component
import './component/index';

// config and routing
import Config from './app/config';
import Router from './app/route';

// controllers
import MainController from './controller/MainController';
import IndexController from './controller/IndexController';
import WorksController from './controller/WorksController';
import ContactController from './controller/ContactController';

const app = angular.module('app', [
  'ui.router',
  'ngAnimate',
  'ngResource',
  'ngSanitize',
  'plangular',
  'youtube-embed',
  'angular-loading-bar',
  'ngtweet',
  'AppDirective',
  'AppComponents',
]).run(['$rootScope', '$state', '$stateParams', ($rootScope, $state, $stateParams) => {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.$on('$stateChangeSuccess', () => {
    global.document.body.scrollTop = 0;
    global.document.documentElement.scrollTop = 0;
  });
}]);

app.config(Config.activate);
app.config(Router.activate);
app.controller('MainController', MainController);
app.controller('IndexController', IndexController);
app.controller('WorksController', WorksController);
app.controller('ContactController', ContactController);
