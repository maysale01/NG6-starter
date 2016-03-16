import template from './HomePage.html';
import controller from './HomePage.controller';
import './HomePage.styl';

let HomePageComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'ctrl'
};

export default HomePageComponent;
