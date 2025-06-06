import { expect } from 'chai';
import { mathEnforcer } from '../mathEnforcer.js';  

describe('mathEnforcer', () => {
  describe('addFive', () => {
    it('should return undefined for non-number input', () => {
      expect(mathEnforcer.addFive('5')).to.be.undefined;
      expect(mathEnforcer.addFive([])).to.be.undefined;
      expect(mathEnforcer.addFive({})).to.be.undefined;
      expect(mathEnforcer.addFive(undefined)).to.be.undefined;
      expect(mathEnforcer.addFive(null)).to.be.undefined;
    });

    it('should add 5 to positive numbers', () => {
      expect(mathEnforcer.addFive(5)).to.equal(10);
      expect(mathEnforcer.addFive(0)).to.equal(5);
    });

    it('should add 5 to negative numbers', () => {
      expect(mathEnforcer.addFive(-5)).to.equal(0);
      expect(mathEnforcer.addFive(-10)).to.equal(-5);
    });

    it('should add 5 to floating point numbers (close to 0.01)', () => {
      expect(mathEnforcer.addFive(5.5)).to.be.closeTo(10.5, 0.01);
      expect(mathEnforcer.addFive(-5.5)).to.be.closeTo(-0.5, 0.01);
    });
  });

  describe('subtractTen', () => {
    it('should return undefined for non-number input', () => {
      expect(mathEnforcer.subtractTen('10')).to.be.undefined;
      expect(mathEnforcer.subtractTen([])).to.be.undefined;
      expect(mathEnforcer.subtractTen({})).to.be.undefined;
      expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
      expect(mathEnforcer.subtractTen(null)).to.be.undefined;
    });

    it('should subtract 10 from positive numbers', () => {
      expect(mathEnforcer.subtractTen(20)).to.equal(10);
      expect(mathEnforcer.subtractTen(10)).to.equal(0);
    });

    it('should subtract 10 from negative numbers', () => {
      expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
      expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
    });

    it('should subtract 10 from floating point numbers (close to 0.01)', () => {
      expect(mathEnforcer.subtractTen(15.5)).to.be.closeTo(5.5, 0.01);
      expect(mathEnforcer.subtractTen(-5.5)).to.be.closeTo(-15.5, 0.01);
    });
  });

  describe('sum', () => {
    it('should return undefined if first parameter is not a number', () => {
      expect(mathEnforcer.sum('5', 5)).to.be.undefined;
      expect(mathEnforcer.sum([], 5)).to.be.undefined;
      expect(mathEnforcer.sum(null, 5)).to.be.undefined;
    });

    it('should return undefined if second parameter is not a number', () => {
      expect(mathEnforcer.sum(5, '5')).to.be.undefined;
      expect(mathEnforcer.sum(5, [])).to.be.undefined;
      expect(mathEnforcer.sum(5, null)).to.be.undefined;
    });

    it('should return sum of two positive numbers', () => {
      expect(mathEnforcer.sum(5, 10)).to.equal(15);
      expect(mathEnforcer.sum(0, 0)).to.equal(0);
    });

    it('should return sum of two negative numbers', () => {
      expect(mathEnforcer.sum(-5, -10)).to.equal(-15);
    });

    it('should return sum of positive and negative numbers', () => {
      expect(mathEnforcer.sum(5, -10)).to.equal(-5);
      expect(mathEnforcer.sum(-5, 10)).to.equal(5);
    });

    it('should return sum of floating point numbers (close to 0.01)', () => {
      expect(mathEnforcer.sum(5.5, 4.4)).to.be.closeTo(9.9, 0.01);
      expect(mathEnforcer.sum(-5.5, -4.4)).to.be.closeTo(-9.9, 0.01);
      expect(mathEnforcer.sum(5.5, -4.4)).to.be.closeTo(1.1, 0.01);
    });
  });
});
