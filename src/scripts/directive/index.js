import angular from 'angular';
import sticky from './sticky';

export default angular.module('AppDirective', [])
  .directive('sticky', sticky.activate);
