import { AN_ACTION_TYPE, action } from './<%= name %>'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

// Create a mockStore configuration with the thunk middleware
const mockStore = configureMockStore([thunk])

describe('<%= upCaseName %> Actions', () => {
  let $rootScope;

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
  }));

  it("should create an action", () => {
    const expectedAction = {
      type: AN_ACTION_TYPE,
      data: 5
    }

    // Create mock instance with no initial state
    const store = mockStore({});

    // Dispatch the action to the store
    action(5)(store.dispatch);

    // Check the action sent to the store
    expect(store.getActions()[0]).to.deep.equal(expectedAction);
  });

});
