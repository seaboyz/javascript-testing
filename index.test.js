const { expect } = require('chai');
const _ = require('lodash');
const { getPerson } = require('./index.js');

describe('#basic mocha chai', () => {
  it('should be true', () => {
    expect(true).to.true;
  });
});

describe('#index initial conditions', () => {
  it('inital person is an object', () => {
    const person = getPerson();
    expect(_.isObject(person)).to.be.true;
  });

  it.only('armorBonus by default is 2 wearing leatherArmor', () => {
    const person = getPerson();
    expect(person.armorBonus).to.equal(2);
  });
});
