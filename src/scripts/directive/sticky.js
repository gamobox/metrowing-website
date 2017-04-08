export default class sticky {
  constructor($window) {
    this.restrict = 'EA';
    this.link = (scope, element) => {
      const fixedClassName = 'is-navigationFixed';
      let position;
      $window.addEventListener('scroll', () => {
        position = element[0].getBoundingClientRect().top;
        if (position <= 0) {
          element.addClass(fixedClassName);
          position = 0;
        } else {
          element.removeClass(fixedClassName);
        }
      });
    };
  }

  static activate($window) {
    sticky.instance = new sticky($window);
    return sticky.instance;
  }
}

sticky.$inject = ['$window'];
