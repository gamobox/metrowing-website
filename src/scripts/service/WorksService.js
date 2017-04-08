const SPREADSHEET_URL = 'https://spreadsheets.google.com/feeds/list/18LE0Vb6IGvVxlQCQqGgufQgGc2bPak7Aqv9peb_INR4/od6/public/values?alt=json'

export default class WorksService {

  constructor($resource, $sce) {
    console.log($sce);
    return $resource(
      $sce.trustAsResourceUrl(SPREADSHEET_URL),
      {}, {
        jsonpquery: {
          method: 'JSONP',
          params: {
            callback: 'JSON_CALLBACK',
          },
          isArray: true,
        },
      },
    );
  }

  static activate($resource, $sce) {
    WorksService.instance = new WorksService($resource, $sce);
    return WorksService.instance;
  }
}

WorksService.activate.$inject = ['$resource', '$sce'];
