import template from './<%= upCaseName %>.html';
import controller from './<%= upCaseName %>.controller';
import './<%= upCaseName %>.styl';

let <%= upCaseName %>Component = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'ctrl'
};

export default <%= upCaseName %>Component;
