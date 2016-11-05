export default class ImgGetter {
  constructor($http, $state) {
    'ngInject';
    this.$http = $http;
    this.$state = $state;
  }

  getsingleImage(id) {
    const path = `${API}/photos/${id}`; // API global value from Webpack configuration
    return this.httpReq(path);
  }
  getAlbum(id) {
    const path = `${API}/album/${id}/photos`;
    return this.httpReq(path);
  }
  // This method return as photos from startImg position + countImg images
  getImages(startImg, countImg) {
    const path = `${API}/photos?_start=${startImg}&_limit=${countImg}`;
    return this.httpReq(path);
  }
  httpReq(path) {
    return this.$http.get(path).then(resp => resp.data)
    .catch(() => {
      this.$state.go('errorPage'); // Error: Not Found
    });
  }
}
