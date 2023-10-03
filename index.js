const colorsArray = require('./lib/colors.js').colorsArray;
const colors = require('./lib/colors.js');
const shapes = require('./lib/shapes.js');
const { Triangle, Circle, Square } = require('./lib/shapes.js');
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

const photoWidth = 300;
const photoHeight = 200;

const textPosition = {
    x: photoWidth / 2,
    y: photoHeight / 1.35,
    'text-anchor': 'middle',
};


inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Please enter up to three characters.',
            validate: (input)=> input.length <=3,
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Please enter the text color (hexadecimal #) or keyword (refer to colors.js).',
            validate: (input) => {
                const colorName = colorsArray.includes(input.toLowerCase());
                const hexCode = /^#[0-9A-F]{6}$/i.test(input);
                return colorName || hexCode;
            },
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please choose a shape.',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter the color of the shape (hexadecimal or keyword)',
            validate: (input) => {
                const colorName = colorsArray.includes(input.toLowerCase());
                const hexCode = /^#[0-9A-F]{6}$/i.test(input);
                return colorName || hexCode;
            },
        },

    ])

    .then ((answers) => {
        let shape;
        const text = answers.text.toUpperCase();
        
        let fontSize;
        switch (answers.shape) {
            case 'Circle':
                const circleRadius = Math.min(photoWidth, photoHeight) * 0.45;
                shape = new shapes.Circle(photoWidth / 2, photoHeight / 2, circleRadius);
                fontSize = 30;
                break;
            case 'Triangle':
                const triangleHeight = Math.min(photoWidth, photoHeight) * 1.1;
                shape = new shapes.Triangle(photoWidth / 2, photoHeight / 2, triangleHeight);
                fontSize = 25;
                break;
            case 'Square':
                const squareSize = Math.min(photoWidth, photoHeight) * 0.8;
                shape = new shapes.Square(photoWidth / 2, photoHeight / 2, squareSize);
                fontSize = 30;
                break;
            default:
                console.error("Invalid shape choice.");
                process.exit(1);
        }

        const svgData = `
            <svg xmlns='http://www.w3.org/2000/svg' width='${photoWidth}' height='${photoHeight}'>
                ${shape.render(answers.shapeColor)}
                <text x="${textPosition.x}" y="${textPosition.y}" 
                    text-anchor="${textPosition['text-anchor']}"
                    fill="${answers.textColor}" font-size="${fontSize}">
                    ${text}
                </text>
            </svg>`;

        fs.writeFileSync(`${__dirname}/logo.svg`, svgData.toString());
        console.log('Generated logo.svg!');
    })
    .catch((error) => {
        console.error(error);
    });






