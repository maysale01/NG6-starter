import StoreService from './Store'

/*
  All of our Redux tests.
 */
describe('Store Service', () => {
  let $rootScope;

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
  }));

  it("should return a singleton", () => {
    let refOne = require('./Store');
    let refTwo = require('./Store');
    expect(refOne).to.deep.equal(refTwo);
  });
});
