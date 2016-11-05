import ng from 'angular';
import listImg from './listImages';
import footerComponent from './footer';
import headerComponent from './header';
import singleImagePage from './singleImage';
import albumImages from './albumImages';
import errorPage from './errorPage';
import ImgGetter from '../services/imgGetter.service';

export default ng.module('app.components', [listImg, footerComponent,
headerComponent, singleImagePage, albumImages, errorPage])
.service('ImgGetter', ImgGetter).name;
