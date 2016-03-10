import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject"; // Our build process will inject the proper dependencies for stateProvider and urlRouterProvider (ng-annotate)

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
    });
})

// Register the component with the module
.component('home', homeComponent);

export default homeModule;
