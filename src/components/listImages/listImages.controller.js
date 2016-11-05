export default class listImages {
  constructor(ImgGetter, $stateParams, $location) {
    'ngInject';
    this.ImgGetter = ImgGetter;
    this.photos = [];
    this.currentAlbum = ($location.path().search(/\/album\/\d/) !== -1) ? $stateParams.id : null;
  }
  $onInit() {
    this.quantityImg = 6;
    this.starImgPos = 0;
    this.init(this.starImgPos, this.quantityImg);
  }

  init(starImgPos, limitImg) {
    if (this.currentAlbum) {
      this.ImgGetter.getAlbum(this.currentAlbum).then((resp) => {
        this.photos = resp;
      });
    } else {
      this.ImgGetter.getImages(starImgPos, limitImg).then((resp) => {
        this.photos = this.photos.concat(resp);
      });
      this.starImgPos += limitImg;
    }
  }
  addItems() {
    this.init(this.starImgPos, 3);
  }
}
