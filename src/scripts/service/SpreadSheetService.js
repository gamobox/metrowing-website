export default class SpreadSheetService {
  constructor($http) {
    this.http = $http;
  }
}

SpreadSheetService.$inject = ['$resource'];
