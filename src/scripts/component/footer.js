export class FooterController {
  constructor() {
    this.copyright = `© ${new Date().getFullYear()} Metrowing`;
  }
}

FooterController.$inject = [];

export const appFooter = {
  templateUrl: 'partial/footer.html',
  bindings: {},
  controller: 'FooterController',
};
