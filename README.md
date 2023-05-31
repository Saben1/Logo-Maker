# SVG Logo Maker

SVG Logo Maker is a simple Node.js application that allows users to generate custom logos in SVG format. The application prompts the user to enter text, text color, shape type, and shape color, and then generates an SVG file with the specified parameters.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies.

## Usage

1. Open a terminal and navigate to the project directory.
2. Run `node index.js` to start the application.
3. Follow the prompts to enter the logo details:
   - Enter the text for the logo (3 characters or less).
   - Enter the color keyword or a hexadecimal number for the text color.
   - Select the shape of the logo (Circle, Square, or Triangle).
   - Enter the color keyword or a hexadecimal number for the shape color.
4. After providing the required information, the application will generate the logo and save it as `logo.svg` in the project directory.
5. The success message will be displayed, indicating that the logo has been generated.

## Custom Shapes

The application supports three shapes: Circle, Square, and Triangle. Each shape has its own characteristics and generates a corresponding SVG code. The shapes are defined in separate classes under the `lib/shapes.js` file.

- The `Triangle` class generates an SVG triangle shape with the specified text and colors.
- The `Circle` class generates an SVG circle shape with the specified text and colors.
- The `Square` class generates an SVG square shape with the specified text and colors.

If you want to add more shapes or modify the existing ones, you can do so by extending the `shapes` class and implementing the `render` method to generate the desired SVG code.

## Demo video
https://github.com/Saben1/Logo-Maker/issues/1#issue-1734100352

## Testing

The application includes test cases to ensure the correctness of the shape classes and their rendering capabilities. The tests are defined using the Jest testing framework and can be executed by running the command `npm test` in the project directory.

## License

This project is licensed under the ISC (LICENSE).
