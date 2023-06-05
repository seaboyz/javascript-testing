const _ = require('lodash');

const alwaysTrue = () => true;

legitString = o => _.isString(o) && o.length > 0;

module.exports = { alwaysTrue };
