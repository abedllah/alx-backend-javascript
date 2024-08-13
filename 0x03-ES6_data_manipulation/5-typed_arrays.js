function createInt8TypedArray(length, position, value) {
  const Buffur = new ArrayBuffer(length);
  const int8 = new Int8Array(Buffur);
  if (position > int8.length) throw new Error('Position outside range');
  int8[position] = value;
  return new DataView(Buffur);
}

export default createInt8TypedArray;
