#!/usr/bin/env/ node


// https://medium.com/northcoders/creating-a-project-generator-with-node-29e13b3cd309
// Step 1: Use the inquirer module for command line interactivity
const inquirer = require('inquirer');
const fs = require('fs');

let CHOICES = fs.readdirSync(`${__dirname}/templates`);
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




// Step 2: Make a new directory and copy the template files
const CURR_DIR = process.cwd();

inquirer.prompt(QUESTIONS)
  .then(answers => {
    const projectChoice = answers['project-choice'];
    const projectName = answers['project-name'];
    const templatePath = `${__dirname}/templates/${projectChoice}`;
  
    fs.mkdirSync(`${CURR_DIR}/${projectName}`);

    createDirectoryContents(templatePath, projectName);
  });

// Step 3: Recursively call createDirectoryContents for any nested directories

function createDirectoryContents (templatePath, newProjectPath) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach(file => {
    const origFilePath = `${templatePath}/${file}`;
    
    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
        const contents = fs.readFileSync(origFilePath, 'utf8');
  
        // Rename
        if (file === '.npmignore') file = '.gitignore';
      
        const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
        fs.writeFileSync(writePath, contents, 'utf8');
    }
  });
}



 