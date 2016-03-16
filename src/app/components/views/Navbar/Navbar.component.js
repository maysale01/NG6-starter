import template from './Navbar.html';
import controller from './Navbar.controller';
import './Navbar.styl';

let NavbarComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'ctrl'
};

export default NavbarComponent;
