import template from './List.html';
import controller from './List.controller';

let ListComponent = {
  restrict: 'E',
  bindings: {
    items: "<",
    removeItem: "<"
  },
  template,
  controller,
  controllerAs: 'ctrl',
};

export default ListComponent;
