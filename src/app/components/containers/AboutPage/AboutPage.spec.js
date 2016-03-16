import AboutPageModule from './AboutPage'
import AboutPageController from './AboutPage.controller';
import AboutPageComponent from './AboutPage.component';
import AboutPageTemplate from './AboutPage.html';

describe('AboutPage', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AboutPageModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AboutPageController();
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
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(AboutPageTemplate).to.match(/{{\s?ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = AboutPageComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AboutPageTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AboutPageController);
      });
  });
});
