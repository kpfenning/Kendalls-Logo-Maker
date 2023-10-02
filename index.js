const colors = require('./lib/colors');
const shapes = require('./lib/shapes');
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

const photoWidth = 300;
const photoHeight = 200;

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
            choices: ['Circle', 'Sqaure', 'Triange'],
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

    
