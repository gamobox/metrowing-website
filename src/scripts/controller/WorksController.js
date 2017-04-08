export default class WorksController {
  constructor($resource) {
    this.history = [];

    $resource(
      'https://spreadsheets.google.com/feeds/list/1pJuCp9jajsVg07VddxMxRUwtezYnT2--MKcH744aio8/od6/public/values?alt=json',
      {}, {
        getWorks: {
          method: 'JSONP',
          isArray: false,
        },
      },
    ).getWorks().$promise.then( data => {
      const tmpWorks = {};
      const works = [];
      data.feed.entry.forEach((item) => {
        const year = this.getYear(item);
        if (!isNaN(Number(year))) {
          tmpWorks[year] = tmpWorks[year] ? tmpWorks[year] : [];
          tmpWorks[year].push(item);
        }
      });

      Object.keys(tmpWorks).forEach( (key) => {
        works.push({
          year: key,
          works: tmpWorks[key].reverse(),
        });
      });
      this.history = works.reverse();
    });
  }
  getYear(item) {
    return new Date(item.gsx$date.$t).getFullYear().toString();
  }
}

WorksController.$inject = ['$resource'];
