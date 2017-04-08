export default class MainController {
  constructor($rootScope) {
    this.state = $rootScope.$state;
  }

}

MainController.$inject = ['$rootScope'];
