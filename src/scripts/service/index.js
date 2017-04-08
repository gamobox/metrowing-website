import angular from 'angular';
import 'angular-resource';
import 'angular-sanitize';

import WorksService from './WorksService';

export var app = angular.module('AppDataServices', [
  'ngResource',
  'ngSanitize',
]);

app.factory('WorksService', WorksService.activate);
