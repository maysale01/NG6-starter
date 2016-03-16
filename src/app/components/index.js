import angular from 'angular'

// Containers are routable via the Angular UI Router, they interact with services and compose dumb views
import * as containers from './containers'

// Views are dumb, they render data passed in via attributes
import * as views from './views'

// Register all the components by the name property defined in the controller
let componentModule = angular.module('app.components', [
  ...Object.keys(containers),
  ...Object.keys(views),
]);

export default componentModule;
