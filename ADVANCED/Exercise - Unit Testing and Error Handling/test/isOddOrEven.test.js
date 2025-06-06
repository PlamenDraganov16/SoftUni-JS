import { expect } from 'chai';
import isOddOrEven from '../isOddOrEven.js'; 

describe('isOddOrEven', () => {
  it('should return undefined for number input', () => {
    expect(isOddOrEven(123)).to.be.undefined;
  });

  it('should return undefined for object input', () => {
    expect(isOddOrEven({})).to.be.undefined;
  });

  it('should return undefined for array input', () => {
    expect(isOddOrEven(['test'])).to.be.undefined;
  });

  it('should return undefined for boolean input', () => {
    expect(isOddOrEven(true)).to.be.undefined;
  });

  it('should return undefined for null input', () => {
    expect(isOddOrEven(null)).to.be.undefined;
  });

  it('should return undefined for undefined input', () => {
    expect(isOddOrEven(undefined)).to.be.undefined;
  });

  it('should return "even" for string with even length', () => {
    expect(isOddOrEven('even')).to.equal('even');
    expect(isOddOrEven('test')).to.equal('even');
    expect(isOddOrEven('')).to.equal('even');
  });

  it('should return "odd" for string with odd length', () => {
    expect(isOddOrEven('odd')).to.equal('odd');
    expect(isOddOrEven('abc')).to.equal('odd');
  });

  it('should correctly handle multiple strings', () => {
    expect(isOddOrEven('abc')).to.equal('odd');
    expect(isOddOrEven('abcd')).to.equal('even');
    expect(isOddOrEven('a')).to.equal('odd');
    expect(isOddOrEven('')).to.equal('even');
    expect(isOddOrEven('testing')).to.equal('odd');
    expect(isOddOrEven('testtest')).to.equal('even');
  });
});