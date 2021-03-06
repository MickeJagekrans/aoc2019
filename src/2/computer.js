module.exports.compute = (input, ip = 0) => {
  const [opcode, paramA, paramB, outPos] = input.slice(ip, ip + 4);

  if (opcode === 99) {
    return input;
  }

  const inA = input[paramA];
  const inB = input[paramB];

  let opRes;

  switch (opcode) {
    case 1:
      opRes = inA + inB;
      break;
    case 2:
      opRes = inA * inB;
      break;
    default:
      throw new Error('invalid opcode');
  }

  input[outPos] = opRes;

  return this.compute(input, ip + 4);
};
