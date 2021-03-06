import <%= upCaseName %>Module from './<%= upCaseName %>'
import <%= upCaseName %>Controller from './<%= upCaseName %>.controller';
import <%= upCaseName %>Component from './<%= upCaseName %>.component';
import <%= upCaseName %>Template from './<%= upCaseName %>.html';

describe('<%= upCaseName %>', () => {
  let $rootScope, makeController;

  beforeEach(window.module(<%= upCaseName %>Module.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new <%= upCaseName %>Controller();
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
      expect(<%= upCaseName %>Template).to.match(/{{\s?ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = <%= upCaseName %>Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal(<%= upCaseName %>Template);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(<%= upCaseName %>Controller);
      });
  });
});
