const { expect } = require('chai');

const { compute } = require('./computer');

describe.only('computer', () => {
  [{
    input: '99',
    output: '99',
  }, {
    input: '1,0,0,0,99',
    output: '2,0,0,0,99',
  }].forEach(({ input, output }) => {
    context(`given ${input}`, () => {
      it(`should return ${output}`, () => {
        expect(compute(input)).to.eql(output);
      });
    });
  });
});
