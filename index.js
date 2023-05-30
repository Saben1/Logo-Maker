// Importing necessary modules
const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter text for logo (please enter 3 characters)',

        validate: (response) => {
            if (response.length > 3) {
                console.log("\n Text must be three characters or less! Please try again ");
                return;
            }
            return true;
        }

    },

    {
        type: 'input',
        name: 'textColor',
        message: 'Enter color keyword or a hexadecimal number of the text',
    },
    {
        type: 'list',
        name: 'shapeType',
        message: 'Select shape of the logo',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter color keyword or a hexadecimal number of the text',
    },
];

// Prompting the user with questions
inquirer.prompt(questions)
    .then((response) => {
        const text = response.text;
        const textColor = response.textColor;
        const shapeType = response.shapeType;
        const shapeColor = response.shapeColor;

        // Calling the generateShapes function with user input
        generateShapes(text, textColor, shapeType, shapeColor);
    })
    .catch((err) => console.log(err));

// Function to generate shapes based on user input
function generateShapes(text, textColor, shapeType, shapeColor) {
    if (shapeType === 'Triangle') {
        const triangle = new Triangle(text, textColor, shapeColor);
        return fs.writeFile('logo.svg', triangle.render(), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Generated logo.svg!");
            }
        });

    }

    if (shapeType === 'Circle') {
        const circle = new Circle(text, textColor, shapeColor);
        return fs.writeFile('logo.svg', circle.render(), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Generated logo.svg!");
            }
        });
    }

    if (shapeType === 'Square') {
        const square = new Square(text, textColor, shapeColor);
        return fs.writeFile('logo.svg', square.render(), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Generated logo.svg!");
            }
        });
    }
}