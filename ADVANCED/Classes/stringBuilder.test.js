import { expect } from 'chai'
import { StringBuilder } from './stringBuilder.js' 

describe("StringBuilder Class", function () {

    describe("Constructor", function () {
        it("should initialize with a given string", function () {
            const sb = new StringBuilder('abc');
            expect(sb.toString()).to.equal('abc');
        });

        it("should initialize as empty if no string is provided", function () {
            const sb = new StringBuilder();
            expect(sb.toString()).to.equal('');
        });

        it("should throw if argument is not a string", function () {
            expect(() => new StringBuilder(123)).to.throw(TypeError, 'Argument must be a string');
            expect(() => new StringBuilder({})).to.throw(TypeError);
            expect(() => new StringBuilder([])).to.throw(TypeError);
        });
    });

    describe("append()", function () {
        it("should append to the end", function () {
            const sb = new StringBuilder('abc');
            sb.append('def');
            expect(sb.toString()).to.equal('abcdef');
        });

        it("should throw if argument is not a string", function () {
            const sb = new StringBuilder();
            expect(() => sb.append(123)).to.throw(TypeError, 'Argument must be a string');
        });
    });

    describe("prepend()", function () {
        it("should prepend to the beginning", function () {
            const sb = new StringBuilder('world');
            sb.prepend('hello ');
            expect(sb.toString()).to.equal('hello world');
        });

        it("should throw if argument is not a string", function () {
            const sb = new StringBuilder();
            expect(() => sb.prepend(null)).to.throw(TypeError);
        });
    });

    describe("insertAt()", function () {
        it("should insert at the correct index", function () {
            const sb = new StringBuilder('Hello!');
            sb.insertAt(' world', 5);
            expect(sb.toString()).to.equal('Hello world!');
        });

        it("should throw if argument is not a string", function () {
            const sb = new StringBuilder('test');
            expect(() => sb.insertAt([], 2)).to.throw(TypeError);
        });
    });

    describe("remove()", function () {
        it("should remove given number of characters starting from index", function () {
            const sb = new StringBuilder('Hello, world!');
            sb.remove(5, 7); 
            expect(sb.toString()).to.equal('Hello!');
        });

        it("should do nothing if length is 0", function () {
            const sb = new StringBuilder('abc');
            sb.remove(1, 0);
            expect(sb.toString()).to.equal('abc');
        });
    });

    describe("toString()", function () {
        it("should return the correct string representation", function () {
            const sb = new StringBuilder('abc');
            expect(sb.toString()).to.equal('abc');
        });

        it("should return empty string if initialized empty", function () {
            const sb = new StringBuilder();
            expect(sb.toString()).to.equal('');
        });
    });

    describe("Full usage test", function () {
        it("should match sample usage", function () {
            let str = new StringBuilder('hello');
            str.append(', there');
            str.prepend('User, ');
            str.insertAt('woop', 5);
            expect(str.toString()).to.equal('User,woop hello, there');
            str.remove(6, 3);
            expect(str.toString()).to.equal('User,w hello, there');
        });
    });

    describe("Structure and existence", function () {
        it("should be a class function", function () {
            expect(typeof StringBuilder).to.equal('function');
        });

        it("should have all prototype methods", function () {
            expect(StringBuilder.prototype).to.have.property('append');
            expect(StringBuilder.prototype).to.have.property('prepend');
            expect(StringBuilder.prototype).to.have.property('insertAt');
            expect(StringBuilder.prototype).to.have.property('remove');
            expect(StringBuilder.prototype).to.have.property('toString');
        });
    });
});
