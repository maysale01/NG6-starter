import angular from 'angular';
import uiRouter from 'angular-ui-router';
import itemsPageComponent from './itemsPage.component';

let itemsPageModule = angular.module('itemsPage', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('itemsPage', {
      url: '/items',
      template: '<items-page></items-page>'
    });
})

.component('itemsPage', itemsPageComponent);

export default itemsPageModule;
