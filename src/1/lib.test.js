const testRunner = require('../testRunner');

const tests = [{
  input: 12,
  res: 2,
}, {
  input: 14,
  res: 2,
}, {
  input: 1969,
  res: 654,
}, {
  input: 100756,
  res: 33583,
}];

const mod = require('./lib');

testRunner('1.1', tests, mod.calcFuel);
