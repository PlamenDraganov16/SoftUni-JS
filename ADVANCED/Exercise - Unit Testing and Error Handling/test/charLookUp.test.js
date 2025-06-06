import { expect } from 'chai';
import lookupChar from '../charLookUp.js';

describe('lookupChar', () => {

  it('should return undefined if first parameter is not a string', () => {
    expect(lookupChar(123, 0)).to.be.undefined;
    expect(lookupChar({}, 0)).to.be.undefined;
    expect(lookupChar([], 0)).to.be.undefined;
    expect(lookupChar(null, 0)).to.be.undefined;
  });

  it('should return undefined if second parameter is not an integer', () => {
    expect(lookupChar('hello', '0')).to.be.undefined;
    expect(lookupChar('hello', 1.5)).to.be.undefined; 
    expect(lookupChar('hello', [])).to.be.undefined;
    expect(lookupChar('hello', {})).to.be.undefined;
    expect(lookupChar('hello', null)).to.be.undefined;
  });

  it('should return "Incorrect index" if index is negative', () => {
    expect(lookupChar('hello', -1)).to.equal('Incorrect index');
  });

  it('should return "Incorrect index" if index is >= string length', () => {
    expect(lookupChar('hello', 5)).to.equal('Incorrect index');
    expect(lookupChar('hello', 10)).to.equal('Incorrect index');
  });

  it('should return the correct character at the given index', () => {
    expect(lookupChar('hello', 0)).to.equal('h');
    expect(lookupChar('hello', 4)).to.equal('o');
    expect(lookupChar('test', 2)).to.equal('s');
  });
});
