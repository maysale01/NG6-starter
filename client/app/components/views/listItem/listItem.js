import angular from 'angular';
import listItemComponent from './listItem.component';

let listItemModule = angular.module('listItem', [])
.component('listItem', listItemComponent);

export default listItemModule;
