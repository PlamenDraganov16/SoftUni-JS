class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        this.radius = value / 2;
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

let circleOne = new Circle(3);

console.log(`Radius: ${circleOne.radius}`);

console.log(`Diameter: ${circleOne.diameter}`);

console.log(`Area: ${circleOne.area}`);

circleOne.diameter = 1.6;

console.log(`Radius: ${circleOne.radius}`);

console.log(`Diameter: ${circleOne.diameter}`);

console.log(`Area: ${circleOne.area}`);

