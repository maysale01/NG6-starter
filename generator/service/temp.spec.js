import { default as Service } from './<%= name %>'

describe('<%= upCaseName %> Service', () => {
  it("should return a singleton", () => {
    let refOne = require('./<%= name %>');
    let refTwo = require('./<%= name %>');
    expect(refOne).to.deep.equal(refTwo);
  });
});
