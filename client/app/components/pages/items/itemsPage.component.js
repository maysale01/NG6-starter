import template from './itemsPage.html';
import controller from './itemsPage.controller';
import './itemsPage.styl';

let itemsPageComponent = {
  restrict: 'E',
  template,
  controller,
  controllerAs: "ctrl"
};

export default itemsPageComponent;
