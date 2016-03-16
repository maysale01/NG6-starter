import template from './ListItem.html';
import controller from './ListItem.controller';

let ListItemComponent = {
  restrict: 'E',
  bindings: {
    item: "<",
    removeItem: "<"
  },
  template,
  controller,
  controllerAs: 'ctrl'
};

export default ListItemComponent;
