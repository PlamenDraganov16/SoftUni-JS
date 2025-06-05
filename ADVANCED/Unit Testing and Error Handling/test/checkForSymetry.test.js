import { expect } from 'chai';
import { isSymmetric } from '../checkForSymmetry.js';

describe('isSymmetric()', () => {
  it('should return false if input is not an array', () => {
    expect(isSymmetric('string')).to.be.false;
    expect(isSymmetric(123)).to.be.false;
    expect(isSymmetric({})).to.be.false;
    expect(isSymmetric(null)).to.be.false;
    expect(isSymmetric(undefined)).to.be.false;
  });

  it('should return true for symmetric arrays', () => {
    expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
    expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    expect(isSymmetric([1])).to.be.true;
    expect(isSymmetric([])).to.be.true;
  });

  it('should return false for non-symmetric arrays', () => {
    expect(isSymmetric([1, 2, 3, 4, 5])).to.be.false;
    expect(isSymmetric(['a', 'b', 'c'])).to.be.false;
    expect(isSymmetric([1, 2])).to.be.false;
  });

  it('should correctly handle arrays with mixed types', () => {
    expect(isSymmetric([1, '2', 1])).to.be.true;
    expect(isSymmetric([1, 2, '1'])).to.be.false;
  });
});
