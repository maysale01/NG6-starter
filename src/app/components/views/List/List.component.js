import template from './List.html';
import controller from './List.controller';

let ListComponent = {
  restrict: 'E',
  bindings: {
    items: "<",
    remove: "<"
  },
  template,
  controller,
  controllerAs: 'ctrl',
};

export default ListComponent;
