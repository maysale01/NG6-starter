import angular from 'angular';
import uiRouter from 'angular-ui-router';
import HomePageComponent from './HomePage.component';

/**
 * @ngInject
 */
function configFn($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('HomePage', {
      url: '/',
      template: '<home-page></home-page>'
    });
}


let homeModule = angular.module('HomePage', [
  uiRouter
])
.config(configFn)
.component('homePage', HomePageComponent); // Register the component with the module

export default homeModule;
