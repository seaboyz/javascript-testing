const { expect } = require('chai');
const { alwaysTrue } = require('./index.js');

describe('#mocha basics', () => {
  it('true should be true', () => {
    expect(true).to.be.true;
  });
});

describe('#alwaysTrue', () => {
  it('always true should return true', () => {
    // act
    const result = alwaysTrue();
    // assert
    expect(result).to.be.true;
  });

  it('should not be false', () => {
    const result = alwaysTrue();
    expect(result).not.to.be.false;
  });
});
