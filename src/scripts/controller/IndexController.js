export default class IndexController {
  constructor($resource) {
    this.isLoading = true;
    this.works = [];
    $resource(
      'https://spreadsheets.google.com/feeds/list/1pJuCp9jajsVg07VddxMxRUwtezYnT2--MKcH744aio8/od6/public/values?alt=json',
      {
        // alt: 'json',
        // callback: 'JSON_CALLBACK',
      }, {
        getWorks: {
          method: 'JSONP',
          isArray: false,
        },
      },
    ).getWorks().$promise.then( data => {
      this.works = data.feed.entry.reverse();
      this.isLoading = false;
    });
  }
}

IndexController.$inject = ['$resource'];
