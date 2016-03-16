import HomePageModule from './HomePage'
import HomePageController from './HomePage.controller';
import HomePageComponent from './HomePage.component';
import HomePageTemplate from './HomePage.html';

describe('Home', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HomePageModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HomePageController();
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
      let component = HomePageComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(HomePageTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(HomePageController);
      });
  });
});
