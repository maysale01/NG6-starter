import angular from 'angular';
import ListItemComponent from './ListItem.component';

let ListItemModule = angular.module('ListItem', [])
.component('listItem', ListItemComponent);

export default ListItemModule;
