//Initialise required packages/modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const dir = './dist';
const filepath = './dist/index.html';

//Array to store employee data
const empArr = [];

//Prompt user for Manager's information
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'TeamSoloMid',
        message: 'What is the team Manager\'s name? (Required) : ',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter team Manager\'s name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'TeamDuoMid',
        message: 'What is the team Manager\'s id? (Required) : ',
        validate: tid => {
          if (tid) {
            return true;
          } else {
            console.log('Please enter team Manager\'s id!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'TeamTrioMid',
        message: 'What is the team Manager\'s email id (Required) : ',
        validate: temailid => {
          if (temailid) 
          {
            var emlid = /\S+@\S+/;
            if(emlid.test(temailid))
            {
            return true;
            }
            else
            {
              console.log('\nPlease enter valid email id!(e.g. abc@test.com)');
              return false;
            }
          } else {
            console.log('Please enter team Manager\'s email id!');
            return false;
          }
        }
      },

      {
        type: 'input',
        name: 'TeamQuadraMid',
        message: 'What is the team Manager\'s number (Required/10 digit) : ',
        validate: tno => 
        {
          if (tno) 
          {
            var phno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
            if(phno.test(tno))
            {
              return true;
            }
            else 
            {
              console.log('\nPlease enter valid number(10 digit)!');
              return false;
            }
          } else {
            console.log('Please enter team Manager\'s number!');
            return false;
          }
        }
      }
    ])
    .then(({TeamSoloMid,TeamDuoMid,TeamTrioMid,TeamQuadraMid}) => {
        const manager = new Manager(TeamSoloMid,TeamDuoMid,TeamTrioMid,TeamQuadraMid);
        let role = manager.getRole();
        let empname = manager.getName();
        let empid = manager.getId();
        let empemail = manager.getEmail();
        let empno = manager.officeNumber;
        empArr.push({role,empname,empid,empemail,empno});
        teamMembers();
     });
  };
