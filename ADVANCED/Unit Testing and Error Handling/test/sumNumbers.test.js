import { expect } from 'chai';
import { sum }  from '../sumNumbers.js';

describe('sum()', () => {
    it('should return the sum of an array of positive numbers', () => {
        expect(sum([1, 2, 3])).to.equal(6);
    });

    it('should return the correct sum with negative numbers', () => {
        expect(sum([-1, -2, 3])).to.equal(0);
    });

    it('should convert string numbers to actual numbers and sum them', () => {
        expect(sum(['1', 2, '3'])).to.equal(6);
    });

    it('should return 0 for an empty array', () => {
        expect(sum([])).to.equal(0);
    });

    it('should return NaN if any element is not convertible to a number', () => {
        expect(sum([1, 'abc', 3])).to.be.NaN;
    });

    it('should handle floating point numbers', () => {
        expect(sum([1.5, 2.5, 3])).to.equal(7);
    });
});