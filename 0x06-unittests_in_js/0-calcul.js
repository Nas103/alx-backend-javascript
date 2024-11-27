#!/usr/bin/node
/**
 * Module that provides the calculateNumber function.
 */

/**
 * Custom rounding function to mimic "round away from zero" behavior.
 * @param {number} num - The number to round
 * @returns {number} - Rounded number
 */
function customRound(num) {
  return num < 0 ? Math.ceil(num - 0.5) : Math.floor(num + 0.5);
}

/**
 * Rounds two numbers and returns their sum.
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - Sum of the rounded numbers
 */
function calculateNumber(a, b) {
  return customRound(a) + customRound(b);
}

module.exports = calculateNumber;
