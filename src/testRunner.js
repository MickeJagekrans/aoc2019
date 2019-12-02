const { expect } = require('chai');

module.exports = (name, tests, fn) => {
  describe(name, () => {
    tests.forEach(({ input, res }) => {
      context(`given ${input}`, () => {
        it(`should eql ${res}`, () => {
          expect(fn(input)).to.eql(res);
        });
      });
    });
  });
};
