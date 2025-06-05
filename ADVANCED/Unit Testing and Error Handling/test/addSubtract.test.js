import { expect } from 'chai';
import { createCalculator } from '../addSubtract.js';

describe('createCalculator()', () => {
  let calculator;

  beforeEach(() => {
    calculator = createCalculator();
  });

  it('should return an object with add, subtract, and get functions', () => {
    expect(calculator).to.be.an('object');
    expect(calculator.add).to.be.a('function');
    expect(calculator.subtract).to.be.a('function');
    expect(calculator.get).to.be.a('function');
  });

  it('should start with internal value of 0', () => {
    expect(calculator.get()).to.equal(0);
  });

  it('should add numbers correctly', () => {
    calculator.add(5);
    expect(calculator.get()).to.equal(5);
  });

  it('should subtract numbers correctly', () => {
    calculator.subtract(3);
    expect(calculator.get()).to.equal(-3);
  });

  it('should add and subtract multiple times correctly', () => {
    calculator.add(10);
    calculator.subtract(4);
    calculator.add(2);
    expect(calculator.get()).to.equal(8);
  });

  it('should parse number strings correctly for add()', () => {
    calculator.add('10');
    expect(calculator.get()).to.equal(10);
  });

  it('should parse number strings correctly for subtract()', () => {
    calculator.subtract('5');
    expect(calculator.get()).to.equal(-5);
  });

  it('should handle floating point numbers as strings', () => {
    calculator.add('2.5');
    calculator.subtract('1.2');
    expect(calculator.get()).to.be.closeTo(1.3, 0.0001);
  });

  it('should not allow direct modification of internal value', () => {
    expect(calculator.value).to.be.undefined;
    calculator.value = 1000;
    expect(calculator.get()).to.equal(0);
  });

  it('should treat non-numeric input as NaN and affect value accordingly', () => {
    calculator.add('abc');
    expect(calculator.get()).to.be.NaN;
  });
});