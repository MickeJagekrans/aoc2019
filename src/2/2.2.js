const fs = require('fs');
const computer = require('./computer');

const lines = fs.readFileSync('./input').toString().split(',').map(x => parseInt(x));

const bruteForce = (initial) => {
  for (let noun = 0; noun <= 99; noun += 1) {
    for (let verb = 0; verb <= 99; verb += 1) {
      const mem = [...initial];

      mem[1] = noun;
      mem[2] = verb;

      const res = computer.compute(mem)[0];

      if (res === 19690720) {
        return [noun, verb];
      }
    }
  }
};

const [noun, verb] = bruteForce(lines);

console.log(noun, verb);
console.log(100 * noun + verb);
