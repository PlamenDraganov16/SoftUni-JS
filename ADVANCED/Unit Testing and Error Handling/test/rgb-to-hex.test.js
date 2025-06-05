import { expect } from 'chai';
import { rgbToHexColor } from '../rgb-to-hex.js';

describe('rgbToHexColor()', () => {
  // Valid inputs
  it('should convert black (0,0,0) to #000000', () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
  });

  it('should convert white (255,255,255) to #FFFFFF', () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
  });

  it('should convert (255,158,170) to #FF9EAA', () => {
    expect(rgbToHexColor(255, 158, 170)).to.equal('#FF9EAA');
  });

  it('should convert (12,13,14) to #0C0D0E', () => {
    expect(rgbToHexColor(12, 13, 14)).to.equal('#0C0D0E');
  });

  // Invalid inputs: out of range values
  it('should return undefined for red < 0', () => {
    expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
  });

  it('should return undefined for green < 0', () => {
    expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
  });

  it('should return undefined for blue < 0', () => {
    expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
  });

  it('should return undefined for red > 255', () => {
    expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
  });

  it('should return undefined for green > 255', () => {
    expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
  });

  it('should return undefined for blue > 255', () => {
    expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
  });

  // Invalid inputs: non-integer values
  it('should return undefined for non-integer red', () => {
    expect(rgbToHexColor(1.5, 0, 0)).to.be.undefined;
  });

  it('should return undefined for non-integer green', () => {
    expect(rgbToHexColor(0, 1.5, 0)).to.be.undefined;
  });

  it('should return undefined for non-integer blue', () => {
    expect(rgbToHexColor(0, 0, 1.5)).to.be.undefined;
  });

  it('should return undefined for non-number red', () => {
    expect(rgbToHexColor('255', 0, 0)).to.be.undefined;
  });

  it('should return undefined for non-number green', () => {
    expect(rgbToHexColor(0, '255', 0)).to.be.undefined;
  });

  it('should return undefined for non-number blue', () => {
    expect(rgbToHexColor(0, 0, '255')).to.be.undefined;
  });
});
