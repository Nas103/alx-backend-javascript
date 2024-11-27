#!/usr/bin/node
/**
 * Function to perform operations based on the type argument.
 * @param {string} type - The operation type: 'SUM', 'SUBTRACT', 'DIVIDE'.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} - Result of the operation, or 'Error' if division by zero occurs.
 */
function calculateNumber(type, a, b) {
  const round = (num) => Math.round(num); // Retain consistent rounding behavior
  const roundedA = round(a);
  const roundedB = round(b);

  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIVIDE':
      if (roundedB === 0) {
        return 'Error';
      }
      return roundedA / roundedB;
    default:
      throw new Error('Invalid operation type');
  }
}

module.exports = calculateNumber;
