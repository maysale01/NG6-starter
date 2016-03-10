import template from './listItem.html';
import controller from './listItem.controller';

let listItemComponent = {
  restrict: 'E',
  bindings: {
    item: "<",
    removeItem: "<"
  },
  template,
  controller,
  controllerAs: 'ctrl'
};

export default listItemComponent;
