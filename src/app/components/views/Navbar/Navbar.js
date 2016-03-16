import angular from 'angular';
import NavbarComponent from './Navbar.component';
import bootstrap from 'angular-ui-bootstrap';

let NavbarModule = angular.module('Navbar', [bootstrap])
.component('navbar', NavbarComponent);

export default NavbarModule;
