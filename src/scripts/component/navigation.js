export class NavigationController {
}

NavigationController.$inject = ['$rootScope'];

export const appNavigation = {
  templateUrl: 'partial/navigation.html',
  bindings: {
    current: '@',
  },
  controller: 'NavigationController',
};
