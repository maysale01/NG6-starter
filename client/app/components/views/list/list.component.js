import template from './list.html';
import controller from './list.controller';

let listComponent = {
  restrict: 'E',
  bindings: {
    items: "<",
    removeItem: "<"
  },
  template,
  controller,
  controllerAs: 'ctrl',
};

export default listComponent;
