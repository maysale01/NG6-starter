import template from './Hero.html';
import controller from './Hero.controller';
import './Hero.styl';

let HeroComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'ctrl',
  transclude: true
};

export default HeroComponent;
