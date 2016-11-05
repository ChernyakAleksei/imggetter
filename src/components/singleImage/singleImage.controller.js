export default class singleImage {
  constructor(ImgGetter, $stateParams) {
    'ngInject';
    this.ImgGetter = ImgGetter;
    this.id = $stateParams.id;
  }
  $onInit() {
    this.init();
  }
  init() {
    this.ImgGetter.getsingleImage(this.id).then((resp) => { this.photo = resp; });
  }

}
