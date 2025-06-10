class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }

    plus(numberOrHex) {
        let addition;
        if (numberOrHex instanceof Hex) {
            addition = numberOrHex.valueOf();
        } else {
            addition = numberOrHex;
        }
        return new Hex(this.value + addition);
    }

    minus(numberOrHex) {
        let subtraction;
        if (numberOrHex instanceof Hex) {
            subtraction = numberOrHex.valueOf();
        } else {
            subtraction = numberOrHex;
        }
        return new Hex(this.value - subtraction);
    }

    static parse(hexString) {
        return parseInt(hexString, 16);
    }
}
