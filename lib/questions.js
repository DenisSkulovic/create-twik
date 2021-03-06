const inquirer = require('inquirer');
const fs = require('fs');

let CHOICES = fs.readdirSync(path.join(__dirname, 'templates'));
CHOICES = CHOICES.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));

const QUESTIONS = [
  {
    name: 'project-choice',
    type: 'list',
    message: 'What project template would you like to generate?',
    choices: CHOICES
  },
  {
    name: 'project-name',
    type: 'input',
    message: 'Project name:',
    validate: function (input) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      else return 'Project name may only include letters, numbers, underscores and hashes.';
    }
  }
];

module.exports = QUESTIONS;