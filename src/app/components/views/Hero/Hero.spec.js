import HeroModule from './Hero'
import HeroController from './Hero.controller';
import HeroComponent from './Hero.component';
import HeroTemplate from './Hero.html';

describe('Hero', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HeroModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HeroController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
  });

  describe('Template', () => {
    // template specs
  });

  describe('Component', () => {
      // component/directive specs
      let component = HeroComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(HeroTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(HeroController);
      });
  });
});
