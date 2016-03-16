import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components';
import AppComponent from './app.component';
import 'normalize.css';

/**
 * @ngInject
 */
function configFn($locationProvider) {
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
}

angular.module('app', [
    uiRouter,
    Components.name
  ])
  .config(configFn)
  .component('app', AppComponent);
