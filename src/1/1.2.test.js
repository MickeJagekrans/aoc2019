const { expect } = require('chai');

const {
  calcFuelWithFuel,
  calcFromList,
} = require('./1.2');

describe('1.2', () => {
  describe('calcFuelWithFuel', () => {
    [{
      input: 2,
      res: 0,
    }, {
      input: 14,
      res: 2,
    }, {
      input: 1969,
      res: 966,
    }, {
      input: 100756,
      res: 50346,
    }].forEach(({ input, res }) => {
      context(`given ${input}`, () => {
        it(`should eql ${res}`, () => {
          expect(calcFuelWithFuel(input)).to.eql(res);
        });
      });
    });
  });

  describe('calcFromList', () => {
    [{
      input: [2, 14, 1969, 100756],
      res: 51314,
    }].forEach(({ input, res }) => {
      context(`given ${input}`, () => {
        it(`should eql ${res}`, () => {
          expect(calcFromList(input)).to.eql(res);
        });
      });
    });
  });
});
