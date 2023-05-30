// Parent class for all shapes
class Shape {
    constructor(color) {
      this.color = color;
    }
  
    // Method to be overridden by child classes
    render() {
      throw new Error("The render() method must be implemented by the child class.");
    }
  }
  
  // Child class representing a triangle shape
  class Triangle extends Shape {
    constructor(color, base, height) {
      super(color);
      this.base = base;
      this.height = height;
    }
  
    render() {
      // Return SVG code for the triangle shape
      return `<svg width="${this.base}" height="${this.height}">
                <polygon points="0,${this.height} ${this.base},${this.height} ${this.base / 2},0" fill="${this.color}" />
              </svg>`;
    }
  }
  
  // Child class representing a circle shape
  class Circle extends Shape {
    constructor(color, radius) {
      super(color);
      this.radius = radius;
    }
  
    render() {
      // Return SVG code for the circle shape
      return `<svg width="${this.radius * 2}" height="${this.radius * 2}">
                <circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}" />
              </svg>`;
    }
  }
  
  // Child class representing a square shape
  class Square extends Shape {
    constructor(color, sideLength) {
      super(color);
      this.sideLength = sideLength;
    }
  
    render() {
      // Return SVG code for the square shape
      return `<svg width="${this.sideLength}" height="${this.sideLength}">
                <rect width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />
              </svg>`;
    }
  }
  
  // Export the classes to be used in other files
  module.exports = {
    Shape,
    Triangle,
    Circle,
    Square,
  };
  