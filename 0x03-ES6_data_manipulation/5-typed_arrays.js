#!/usr/bin/env node
//returns a new ArrayBuffer with an Int8 value at a specific position.
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const int8Array = new DataView(buffer);
  int8Array.setInt8(position, value);
  return int8Array;
}
