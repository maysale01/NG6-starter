import angular from 'angular';
import listComponent from './list.component';

let listModule = angular.module('list', [])
.component('list', listComponent);

export default listModule;
