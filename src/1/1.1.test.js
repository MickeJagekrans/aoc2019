const { expect } = require('chai');

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

const { calcFuel } = require('./1.1');

describe('calcFuel', () => {
  tests.forEach(({ input, res }) => {
    context(`given ${input}`, () => {
      it(`should eql ${res}`, () => {
        expect(calcFuel(input)).to.eql(res);
      });
    });
  });
});
