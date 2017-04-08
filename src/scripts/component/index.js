import angular from 'angular';
import { appHeader, HeaderController } from './header';
import { appFooter, FooterController } from './footer';
import { appNavigation, NavigationController } from './navigation';

export default angular.module('AppComponents', [])
  .controller('HeaderController', HeaderController)
  .component('appHeader', appHeader)
  .controller('FooterController', FooterController)
  .component('appFooter', appFooter)
  .controller('NavigationController', NavigationController)
  .component('appNavigation', appNavigation);
