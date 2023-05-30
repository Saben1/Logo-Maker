const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  test('render method should return the correct SVG code', () => {
    // Create an instance of the Triangle class with specified parameters
    const triangle = new Triangle('red', 100, 200);
    
    // Define the expected SVG code
    const expected = `<svg width="100" height="200">
                        <polygon points="0,200 100,200 50,0" fill="red" />
                      </svg>`;
    
    // Compare the rendered SVG code with the expected value
    expect(triangle.render()).toBe(expected);
  });
});

describe('Circle', () => {
  test('render method should return the correct SVG code', () => {
    // Create an instance of the Circle class with specified parameters
    const circle = new Circle('blue', 50);
    
    // Define the expected SVG code
    const expected = `<svg width="100" height="100">
                        <circle cx="50" cy="50" r="50" fill="blue" />
                      </svg>`;
    
    // Compare the rendered SVG code with the expected value
    expect(circle.render()).toBe(expected);
  });
});

describe('Square', () => {
  test('render method should return the correct SVG code', () => {
    // Create an instance of the Square class with specified parameters
    const square = new Square('green', 150);
    
    // Define the expected SVG code
    const expected = `<svg width="150" height="150">
                        <rect width="150" height="150" fill="green" />
                      </svg>`;
    
    // Compare the rendered SVG code with the expected value
    expect(square.render()).toBe(expected);
  });
});
