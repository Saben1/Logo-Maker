// Importing the classes to test
const { Triangle, Circle, Square } = require("./shapes");

// Testing the Triangle class
describe("Triangle", () => {
    test('should return a logo with the user choice of text, text color, and shape color', () => {
        const triangle = new Triangle('TRI', 'red', 'white');
        console.log(triangle.render());
        expect(triangle.render()).toEqual(`<svg width="300" height="200" version="1.1"  xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="white"/>
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="red">TRI</text>
        </svg>`
        );
    });
});

// Testing the Circle class
describe("Circle", () => {
    test('should return a logo with the user choice of text, text color, and shape color', () => {
        const circle = new Circle('CRC', 'blue', 'white');
        console.log(circle.render());
        expect(circle.render()).toEqual(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="white" />
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="blue">CRC</text>
        </svg>`
        );
    });
});

// Testing the Square class
describe("Square", () => {
    test('should return a logo with the user choice of text, text color, and shape color', () => {
        const square = new Square('SQR', 'green', 'white');
        console.log(square.render());
        expect(square.render()).toEqual(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="white"/>
        <text x="100" y="125" font-size="70" text-anchor="middle" fill="green">SQR</text>
        </svg>`
        );
    });
});