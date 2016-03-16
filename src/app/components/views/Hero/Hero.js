import angular from 'angular';
import HeroComponent from './Hero.component';

let HeroModule = angular.module('Hero', [])
.component('hero', HeroComponent);

export default HeroModule;
