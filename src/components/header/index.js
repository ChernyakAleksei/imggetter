import ng from 'angular';
import headerMain from './header.component';

export default ng.module('app.components.header', [])
    .component('headerMain', headerMain).name;
