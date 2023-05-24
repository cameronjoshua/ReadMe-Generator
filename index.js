const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require("./utils/generateMarkdown");
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
     {
      type: 'input',
      name: 'description',
      message: 'Description of your project',
    },
     {
      type: 'input',
      name: 'installation',
      message: 'How do users install and launch the application?',
    },
     {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
     {
      type: 'input',
      name: 'userName',
      message: 'What is your Github username?',
    },
     {
      type: 'list',
      name: 'license',
      message: 'Choose your license',
      choices: ["MIT", "APACHE 2.0", "Ms-PL"],
    },
    ];

function init() {
  inquirer
  .createPromptModule(questions)
  .then((answers) => {
    console.log(answers)
    const fileName = 'README.md'
    const information = generateMarkdown(answers)
    console.log(information)

    fs.writeFile(fileName, information, (err) =>
   err ? console.log(err) : console.log('Success!')
   );
  })
}


init();
