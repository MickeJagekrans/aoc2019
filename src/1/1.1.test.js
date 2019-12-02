const { expect } = require('chai');

const fn = require('./1.1');

describe('1.1', () => {
  [{
    input: 12,
    res: 2,
  }, {
    input: 14,
    res: 2,
  }].forEach(({ input, res }) => {
    context(`given ${input}`, () => {
      it(`should eql ${res}`, () => {
        expect(input).to.eql(res);
      });
    });
  });
});
