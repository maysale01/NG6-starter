import { default as reducer } from './<%= name %>'
import { Map } from 'immutable';

describe('<%= upCaseName %> Reducer', () => {
  it("should return passed in state when no matching action", () => {
    let aState = { a: true };
    let product = reducer(aState, {
      type: 'NON_EXISTENT_TYPE',
    });
    expect(product).to.equal(aState);
  });

  it("default initial state should be an immutable map", () => {
    let product = reducer(undefined, {
      type: 'NON_EXISTENT_TYPE',
    });
    expect(Map.isMap(product)).to.be.true;
  })
});
