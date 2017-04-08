export default class AppConfig {
  constructor($locationProvider, plangularConfigProvider, $sceProvider, cfpLoadingBarProvider) {
    $locationProvider.html5Mode({
      enabled: false,
      requiredBase: false,
    });

    // soundcloud clientId
    plangularConfigProvider.clientId = '176ed02172bad0bb3a63584e6b6f1ee3';

    $sceProvider.enabled(false);
  }

  static activate($locationProvider, plangularConfigProvider, $sceProvider, cfpLoadingBarProvider) {
    AppConfig.instance = new AppConfig(
      $locationProvider,
      plangularConfigProvider,
      $sceProvider,
      cfpLoadingBarProvider);
    return AppConfig.instance;
  }
}

AppConfig.$inject = ['$locationProvider', 'plangularConfigProvider', '$sceProvider', 'cfpLoadingBarProvider'];
