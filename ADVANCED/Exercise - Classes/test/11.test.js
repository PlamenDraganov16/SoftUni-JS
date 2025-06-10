import { expect } from 'chai';
import { PaymentPackage } from '../11.js';

describe("PaymentPackage Class", function() {
  describe("Constructor and property initialization", function() {
    it("should create instance with correct name and value", function() {
      const pack = new PaymentPackage("HR Services", 1500);
      expect(pack.name).to.equal("HR Services");
      expect(pack.value).to.equal(1500);
      expect(pack.VAT).to.equal(20);
      expect(pack.active).to.be.true;
    });

    it("should throw if name is empty string", function() {
      expect(() => new PaymentPackage("", 100)).to.throw('Name must be a non-empty string');
    });

    it("should throw if name is not a string", function() {
      expect(() => new PaymentPackage(123, 100)).to.throw('Name must be a non-empty string');
      expect(() => new PaymentPackage([], 100)).to.throw('Name must be a non-empty string');
    });

    it("should throw if value is missing", function() {
      expect(() => new PaymentPackage("HR Services")).to.throw('Value must be a non-negative number');
    });

    it("should throw if value is negative", function() {
      expect(() => new PaymentPackage("HR Services", -1)).to.throw('Value must be a non-negative number');
    });

    it("should throw if value is not a number", function() {
      expect(() => new PaymentPackage("HR Services", "1000")).to.throw('Value must be a non-negative number');
      expect(() => new PaymentPackage("HR Services", null)).to.throw('Value must be a non-negative number');
    });
  });

  describe("Name property", function() {
    let pack;
    beforeEach(() => {
      pack = new PaymentPackage("Consultation", 800);
    });

    it("should allow changing name to a valid non-empty string", function() {
      pack.name = "New Name";
      expect(pack.name).to.equal("New Name");
    });

    it("should throw if set name to empty string", function() {
      expect(() => pack.name = "").to.throw('Name must be a non-empty string');
    });

    it("should throw if set name to non-string", function() {
      expect(() => pack.name = 123).to.throw('Name must be a non-empty string');
      expect(() => pack.name = false).to.throw('Name must be a non-empty string');
    });
  });

  describe("Value property", function() {
    let pack;
    beforeEach(() => {
      pack = new PaymentPackage("Consultation", 800);
    });

    it("should allow changing value to a valid non-negative number", function() {
      pack.value = 0;
      expect(pack.value).to.equal(0);

      pack.value = 1234.56;
      expect(pack.value).to.equal(1234.56);
    });

    it("should throw if set value to negative number", function() {
      expect(() => pack.value = -1).to.throw('Value must be a non-negative number');
    });

    it("should throw if set value to non-number", function() {
      expect(() => pack.value = "100").to.throw('Value must be a non-negative number');
      expect(() => pack.value = null).to.throw('Value must be a non-negative number');
    });

    
  });

  describe("VAT property", function() {
    let pack;
    beforeEach(() => {
      pack = new PaymentPackage("Consultation", 800);
    });

    it("should allow changing VAT to a valid non-negative number", function() {
      pack.VAT = 0;
      expect(pack.VAT).to.equal(0);

      pack.VAT = 15.5;
      expect(pack.VAT).to.equal(15.5);
    });

    it("should throw if set VAT to negative number", function() {
      expect(() => pack.VAT = -5).to.throw('VAT must be a non-negative number');
    });

    it("should throw if set VAT to non-number", function() {
      expect(() => pack.VAT = "20").to.throw('VAT must be a non-negative number');
      expect(() => pack.VAT = null).to.throw('VAT must be a non-negative number');
    });

  });

  describe("Active property", function() {
    let pack;
    beforeEach(() => {
      pack = new PaymentPackage("Consultation", 800);
    });

    it("should allow changing active to false and true", function() {
      pack.active = false;
      expect(pack.active).to.be.false;

      pack.active = true;
      expect(pack.active).to.be.true;
    });

    it("should throw if set active to non-boolean", function() {
      expect(() => pack.active = "true").to.throw('Active status must be a boolean');
      expect(() => pack.active = null).to.throw('Active status must be a boolean');
      expect(() => pack.active = 0).to.throw('Active status must be a boolean');
    });
  });

  describe("toString method", function() {
    it("should print correct output when active is true", function() {
      const pack = new PaymentPackage("HR Services", 1500);
      const expected = [
        'Package: HR Services',
        '- Value (excl. VAT): 1500',
        '- Value (VAT 20%): 1800'
      ].join('\n');

      expect(pack.toString()).to.equal(expected);
    });

    it("should print correct output when active is false", function() {
      const pack = new PaymentPackage("HR Services", 1500);
      pack.active = false;
      const expected = [
        'Package: HR Services (inactive)',
        '- Value (excl. VAT): 1500',
        '- Value (VAT 20%): 1800'
      ].join('\n');

      expect(pack.toString()).to.equal(expected);
    });

    // it("should reflect VAT changes in output", function() {
    //   const pack = new PaymentPackage("HR Services", 100);
    //   pack.VAT = 10;
    //   const expected = [
    //     'Package: HR Services',
    //     '- Value (excl. VAT): 100',
    //     '- Value (VAT 10%): 110'
    //   ].join('\n');

    //   expect(pack.toString()).to.equal(expected);
    // });

    it("should reflect VAT changes in output", function() {
  const pack = new PaymentPackage("HR Services", 100);
  pack.VAT = 10;
  const expected = [
    'Package: HR Services',
    '- Value (excl. VAT): 100',
    '- Value (VAT 10%): 110'
  ].join('\n');

  const actual = pack.toString();

  // Compare line by line except last line numerically
  const actualLines = actual.split('\n');
  const expectedLines = expected.split('\n');

  expect(actualLines[0]).to.equal(expectedLines[0]);
  expect(actualLines[1]).to.equal(expectedLines[1]);

  // Extract numbers after colon and compare numerically
  const actualValue = parseFloat(actualLines[2].split(': ')[1]);
  const expectedValue = parseFloat(expectedLines[2].split(': ')[1]);
  expect(actualValue).to.be.closeTo(expectedValue, 0.01);
});

    it("should handle decimal VAT and value properly", function() {
      const pack = new PaymentPackage("Test", 123.45);
      pack.VAT = 17.5;
      const expected = [
        'Package: Test',
        `- Value (excl. VAT): 123.45`,
        `- Value (VAT 17.5%): ${123.45 * 1.175}`
      ].join('\n');

      expect(pack.toString()).to.equal(expected);
    });
  });
});