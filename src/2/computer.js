module.exports.compute = (input, pc = 0) => {
  const intcodes = input.split(',').map(x => parseInt(x));
  const [opcode, inPosA, inPosB, outPos] = intcodes.slice(pc, 4 + pc);

  if (opcode === 99) {
    return input;
  }

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

  return this.compute(intcodes.join(','), pc + 4);
};
