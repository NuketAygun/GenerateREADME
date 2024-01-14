const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    'Enter Title: ',
    'Enter Description: ',
    'Enter Installation: ',
    'Enter Usage: ',
    'Enter License(Can choose an open source licence from "https://choosealicense.com/"): ',
    'Enter Contributing: ',
    'Enter Tests: ',
    'Enter Github Username: ',
    'Enter Email: '

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,(err) =>{
        if(err)
        console.log(err);
        else{
            console.log("The file was written successfully")
            console.log("The file contains the following content")
            console.log("The file was written successfully")
        }
    })
}

// function to initialize program
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name:'title',
        },
        {
            type: 'input',
            message: questions[1],
            name:'description',
        },
        {
            type: 'input',
            message: questions[2],
            name:'installation',
        },
        {
            type: 'input',
            message: questions[3],
            name:'usage',
        },
        {
            type: 'input',
            message: questions[4],
            name:'license',
        },
        {
            type: 'input',
            message: questions[5],
            name:'contributing',
        },
        {
            type: 'input',
            message: questions[6],
            name:'tests',
        },
        {
            type: 'input',
            message: questions[7],
            name:'github',
        },
        {
            type: 'input',
            message: questions[8],
            name:'email',
        },
    ])
    .then((data) =>{
        const readMeFile =generateMarkdown(data);
        writeToFile('README.md',readMeFile);
    });
}

// function call to initialize program
init();
