export default class Router {

  constructor($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('root', {
      views: {
        '': {
          abstract: true,
          templateUrl: 'pages/master.html',
          controller: 'MainController',
          controllerAs: 'main',
        },
        'sidebar@root': {
          templateUrl: 'partial/sidebar.html',
          controller: '',
        },
      },
    })
    .state('root.index', {
      url: '/',
      views: {
        main: {
          templateUrl: 'pages/index.html',
          controller: 'IndexController',
          controllerAs: 'top',
        },
      },
      data: {
        title: 'Top',
      },
    })
    .state('root.profile', {
      url: '/profile',
      views: {
        main: {
          templateUrl: 'pages/profile.html',
          controller: '',
        },
      },
      data: {
        title: 'Profile',
        description: 'Metrowingは楽曲制作を中心に活動している制作チームです。',
      },
    })
    .state('root.works', {
      url: '/works',
      views: {
        main: {
          templateUrl: 'pages/works.html',
          controller: 'WorksController',
          controllerAs: 'works',
        },
      },
      data: {
        title: 'Works',
      },
    })
    .state('root.contact', {
      url: '/contact',
      views: {
        main: {
          templateUrl: 'pages/contact.html',
          controller: 'ContactController',
          controllerAs: 'contact',
        },
      },
      data: {
        title: 'Contact',
      },
    });
  }

  static activate($stateProvider, $urlRouterProvider) {
    Router.instance = new Router($stateProvider, $urlRouterProvider);
    return Router.instance;
  }
}

Router.$inject = ['$stateProvider'];
