module.exports.compute = (input) => {
  if (input === '99') {
    return input;
  }

  const intcodes = input.split(',').map(x => parseInt(x));
  const [opcode, inPosA, inPosB, outPos] = intcodes;

  const inA = intcodes[inPosA];
  const inB = intcodes[inPosB];

  let opRes;

  switch (opcode) {
    case 1:
      opRes = inA + inB;
      break;
    case 2:
      opRes = inA * inB;
      break;
    default:
      throw new Error('Invalid opcode');
  }

  intcodes[outPos] = opRes;

  return intcodes.join(',');
};
