const { expect } = require('chai');

const { compute } = require('./computer');

describe.only('computer', () => {
  [{
    input: '99',
    output: '99',
  }, {
    input: '1,0,0,0,99',
    output: '2,0,0,0,99',
  }, {
    input: '2,3,0,3,99',
    output: '2,3,0,6,99',
  }, {
    input: '2,4,4,5,99,0',
    output: '2,4,4,5,99,9801',
  }, {
    input: '1,1,1,4,99,5,6,0,99',
    output: '30,1,1,4,2,5,6,0,99',
  }].forEach(({ input, output }) => {
    context(`given ${input}`, () => {
      it(`should return ${output}`, () => {
        expect(compute(input)).to.eql(output);
      });
    });
  });
});
