import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AboutPageComponent from './AboutPage.component';

/**
 * @ngInject
 */
function configFn($stateProvider) {
  $stateProvider
    .state('AboutPage', {
      url: '/about',
      template: '<about-page></about-page>'
    });
}

let AboutPageModule = angular.module('AboutPage', [
  uiRouter
])
.config(configFn)
.component('aboutPage', AboutPageComponent);

export default AboutPageModule;
