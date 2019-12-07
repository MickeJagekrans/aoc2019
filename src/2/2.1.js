const fs = require('fs');
const computer = require('./computer');

const lines = fs.readFileSync('./input').toString().split(',').map(x => parseInt(x));

lines[1] = 12;
lines[2] = 2;

const res = computer.compute(lines);

console.log(res.join(','));
console.log(res[0]);
