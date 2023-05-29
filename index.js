const inquirer = require('inquirer');
const Input = require('./input');
const File = require('./file');
const { Triangle, Circle, Square } = require('./shapes');

async function promptUser() {
  const input = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text for the logo:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      name: 'color',
      message: 'Enter the text color:',
    },
  ]);
  
  return new Input(input.text, input.shape, input.color);
}

async function generateLogo() {
  const input = await promptUser();
  let shape;
  
  switch (input.shape) {
    case 'Triangle':
      shape = new Triangle(input.color);
      break;
    case 'Circle':
      shape = new Circle(input.color);
      break;
    case 'Square':
      shape = new Square(input.color);
      break;
    default:
      console.log('Invalid shape');
      return;
  }
  
  const svg = shape.render(input.text);
  File.save('logo.svg', svg);
  console.log('Generated logo.svg');
}

generateLogo();
