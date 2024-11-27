#!/usr/bin/node
import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 6 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    it('should return -4 when inputs are -1.4 and -2.5', function () {
      expect(calculateNumber('SUM', -1.4, -2.5)).to.equal(-4);
    });
  });

  describe('SUBTRACT', function () {
    it('should return -4 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    it('should return 0 when inputs are 1.4 and 1.4', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 1.4)).to.equal(0);
    });
  });

  describe('DIVIDE', function () {
    it('should return 0.2 when inputs are 1.4 and 4.5', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it('should return "Error" when dividing by 0', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
    it('should return -0.25 when inputs are -1 and 4', function () {
      expect(calculateNumber('DIVIDE', -1, 4)).to.equal(-0.25);
    });
  });

  describe('Invalid type', function () {
    it('should throw an error when type is invalid', function () {
      expect(() => calculateNumber('INVALID', 1, 3)).to.throw('Invalid operation type');
    });
  });
});
