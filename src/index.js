import 'bootstrap/less/bootstrap.less';
import 'font-awesome/less/font-awesome.less';
import 'open-sans-fontface/open-sans.less';
import ng from 'angular';
import 'ng-infinite-scroll/build/ng-infinite-scroll.js';
import ngRoute from 'angular-ui-router';
import './style/main.scss';
import NgComponents from './components';

ng.module('app', [ngRoute, NgComponents, 'infinite-scroll'])
.config(($locationProvider, $stateProvider, $urlRouterProvider) => {
  'ngInject';
  $locationProvider.html5Mode(false);
  const states = [
    {
      name: 'home',
      url: '/',
      template: '<list-images></list-images>'
    },
    {
      name: 'singleImage',
      url: '/photo/:id',
      template: '<single-image></single-image>'
    },
    {
      name: 'albumImages',
      url: '/album/:id',
      template: '<album-images></album-images>'
    },
    {
      name: 'errorPage',
      url: '/error',
      template: '<error-page></error-page>'
    },
  ];
  states.forEach(state => $stateProvider.state(state));
  $urlRouterProvider.otherwise('/');
});
