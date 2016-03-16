import NavbarModule from './Navbar'
import NavbarController from './Navbar.controller';
import NavbarComponent from './Navbar.component';
import NavbarTemplate from './Navbar.html';

describe('Navbar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NavbarModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NavbarController();
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
      let component = NavbarComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(NavbarTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(NavbarController);
      });
  });
});
