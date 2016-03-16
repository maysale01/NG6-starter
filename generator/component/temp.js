import angular from 'angular';
import uiRouter from 'angular-ui-router';
import <%= upCaseName %>Component from './<%= upCaseName %>.component';

let <%= upCaseName %>Module = angular.module('<%= upCaseName %>', [
  uiRouter
])
.component('<%= lowerCaseName %>', <%= upCaseName %>Component);

export default <%= name %>Module;
