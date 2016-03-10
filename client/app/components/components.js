import angular from 'angular'

// Pages are routable via the Angular UI Router
// They serve as  'smart views' (aka containers) and have access to the store
import HomePage from './pages/home/home'
import ItemsPage from './pages/items/itemsPage'

// Views are dumb, they render data passed in via attributes
// TODO: Figure out a coherent naming/organization schema
import ListItemView from './views/listItem/listItem'
import ListView from './views/list/list'
import HeroView from './views/hero/hero'
import NavbarView from './views/navbar/navbar'

// Register all the components by the name property defined in the controller
let componentModule = angular.module('app.components', [
  HomePage.name,
  ItemsPage.name,
  ListItemView.name,
  ListView.name,
  HeroView.name,
  NavbarView.name
]);

export default componentModule;
