const fs = require('fs');

module.exports.calcFuelWithFuel = (mass, acc = 0) => {
  const fuel = Math.floor(mass / 3) - 2;

  if (fuel <= 0) {
    return acc;
  }

  const res = this.calcFuelWithFuel(fuel, acc + fuel);

  return res;
};

module.exports.calcFromList = (list) => (
  list.map((x) => this.calcFuelWithFuel(x)).reduce((acc, curr) => (acc + curr))
);

module.exports.run = () => {
  const lines = fs.readFileSync('./input').toString().split(/\r?\n/);
  const res = this.calcFromList(lines);

  console.log(res);
};

// this.run();
