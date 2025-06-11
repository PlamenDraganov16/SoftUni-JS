function classHierarchy() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get area() {
            return 0; // Default; subclasses will override
        }

        changeUnits(newUnit) {
            this.units = newUnit;
        }

        convertUnit(value) {
            switch (this.units) {
                case 'm': return value / 100;
                case 'mm': return value * 10;
                case 'cm': return value;
            }
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius; // Always store in cm
        }

        get area() {
            const radius = this.convertUnit(this._radius);
            return Math.PI * radius * radius;
        }

        toString() {
            const radius = this.convertUnit(this._radius);
            return `${super.toString()} Area: ${this.area} - radius: ${radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;   // Stored in cm
            this._height = height; // Stored in cm
        }

        get area() {
            const width = this.convertUnit(this._width);
            const height = this.convertUnit(this._height);
            return width * height;
        }

        toString() {
            const width = this.convertUnit(this._width);
            const height = this.convertUnit(this._height);
            return `${super.toString()} Area: ${this.area} - width: ${width}, height: ${height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    };
}
