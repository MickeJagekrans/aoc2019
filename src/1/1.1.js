const fs = require('fs');

module.exports.calcFuel = (input) => (
  Math.floor(input / 3) - 2
);

module.exports.run = () => {
  const lines = fs.readFileSync('./input').toString().split(/\r?\n/);
  const res = lines.map(this.calcFuel).reduce((prev, curr) => prev + curr);

  console.log(res);
};
