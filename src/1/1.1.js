const fs = require('fs');
const { calcFuel } = require('./lib');

const lines = fs.readFileSync('./input').toString().split(/\r?\n/);

const res = lines.map(calcFuel).reduce((prev, curr) => prev + curr);

console.log(res);
