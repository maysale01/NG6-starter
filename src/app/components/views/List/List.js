import angular from 'angular';
import ListComponent from './List.component';

let listModule = angular.module('List', [])
.component('list', ListComponent);

export default listModule;
