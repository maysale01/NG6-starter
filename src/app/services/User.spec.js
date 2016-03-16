import UserService from './User'

/*
  All of our Redux tests.
 */
describe('User Service', () => {
  let $rootScope;

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
  }));

  it("should return a singleton", () => {
    let refOne = require('./User');
    let refTwo = require('./User');
    expect(refOne).to.deep.equal(refTwo);
  });

  describe('constructor()', () => {
  });

  describe('login()', () => {
    it("should be callable", () => {
      UserService.login.call();
    })
  });

  describe('logout()', () => {
    it("should be callable", () => {
      UserService.logout.call();
    })
  });

  describe('isLoggedIn()', () => {
    it("should be callable", () => {
      UserService.isLoggedIn.call();
    })
  });
  
  describe('currentUser()', () => {
    it("should be callable", () => {
      UserService.currentUser.call();
    })
  });
});
