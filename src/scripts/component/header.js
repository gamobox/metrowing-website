export class HeaderController {
  constructor() {
    this.name = 'Metrowing';
  }
}

HeaderController.$inject = [];

export const appHeader = {
  templateUrl: 'partial/header.html',
  bindings: {},
  controller: 'HeaderController as header',
};
