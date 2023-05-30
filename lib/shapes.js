class shapes {
  constructor(text, textColor, shapeColor) {
      this.text = text,
      this.textColor = textColor,
      this.shapeColor = shapeColor;
  }
}

// Triangle class extends the shapes class
class Triangle extends shapes {
  constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
  };
  
  // Render method to generate SVG code for a triangle shape with the provided text and colors
  render() {
      return `<svg width="300" height="200" version="1.1"  xmlns="http://www.w3.org/2000/svg">
      <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
      <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
  };
};

// Circle class extends the shapes class
class Circle extends shapes {
  constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
  };
  
  // Render method to generate SVG code for a circle shape with the provided text and colors
  render() {  
      return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
      <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
  };
};

// Square class extends the shapes class
class Square extends shapes {
  constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
  };
  
  // Render method to generate SVG code for a square shape with the provided text and colors
  render() {
      return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="${this.shapeColor}"/>
      <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
  };
};

// Exporting the Triangle, Circle, and Square classes
module.exports = { Triangle, Circle, Square };