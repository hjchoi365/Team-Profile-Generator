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
                if (temailid) {
                    var emlid = /\S+@\S+/;
                    if (emlid.test(temailid)) {
                        return true;
                    }
                    else {
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
            validate: tno => {
                if (tno) {
                    var phno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
                    if (phno.test(tno)) {
                        return true;
                    }
                    else {
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
        .then(({ TeamSoloMid, TeamDuoMid, TeamTrioMid, TeamQuadraMid }) => {
            const manager = new Manager(TeamSoloMid, TeamDuoMid, TeamTrioMid, TeamQuadraMid);
            let role = manager.getRole();
            let empname = manager.getName();
            let empid = manager.getId();
            let empemail = manager.getEmail();
            let empno = manager.officeNumber;
            empArr.push({ role, empname, empid, empemail, empno });
            teamMembers();
        });
};
const teamMembers = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Which team member would you like to add?',
            name: 'action',
            choices: ['Engineer', 'Intern', 'Finish building team']
        }
    ])
        .then(({ action }) => {
            switch (action) {
                case "Engineer":
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'Engname',
                            message: 'What is Engineer\'s name? (Required) : ',
                            validate: Ename => {
                                if (Ename) {
                                    return true;
                                } else {
                                    console.log('Please enter Engineer\'s name!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'Eid',
                            message: 'What is the Engineer\'s id? (Required) : ',
                            validate: enid => {
                                if (enid) {
                                    return true;
                                } else {
                                    console.log('Please enter Engineer\'s id!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'Eemail',
                            message: 'What is the Engineer\'s email id (Required) : ',
                            validate: eemailid => {
                                if (eemailid) {
                                    var emlid = /\S+@\S+/;
                                    if (emlid.test(eemailid)) {
                                        return true;
                                    }
                                    else {
                                        console.log('\nPlease enter valid email id!(e.g. abc@test.com)');
                                        return false;
                                    }
                                } else {
                                    console.log('Please enter Engineer\'s email id!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'egithubname',
                            message: "Enter Engineer's Github username : "
                        }
                    ])
                        .then(({ Engname, Eid, Eemail, egithubname }) => {
                            const engineer = new Engineer(Engname, Eid, Eemail, egithubname);
                            let role = engineer.getRole();
                            let empname = engineer.getName();
                            let empid = engineer.getId();
                            let empemail = engineer.getEmail();
                            let empgitname = engineer.githubname;
                            empArr.push({ role, empname, empid, empemail, empgitname });
                        }).then(function () {
                            teamMembers();
                        });
                    break;

                case "Intern":
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'Iname',
                            message: 'What is Interns\'s name? (Required) : ',
                            validate: Iname => {
                                if (Iname) {
                                    return true;
                                } else {
                                    console.log('Please enter Intern\'s name!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'Iid',
                            message: 'What is the Intern\'s id? (Required) : ',
                            validate: Iid => {
                                if (Iid) {
                                    return true;
                                } else {
                                    console.log('Please enter Intern\'s id!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'Iemail',
                            message: 'What is the Intern\'s email id (Required) : ',
                            validate: Iemailid => {
                                if (Iemailid) {
                                    var emlid = /\S+@\S+/;
                                    if (emlid.test(Iemailid)) {
                                        return true;
                                    }
                                    else {
                                        console.log('\nPlease enter valid email id!(e.g. abc@test.com)');
                                        return false;
                                    }
                                } else {
                                    console.log('Please enter Intern\'s email id!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: "input",
                            name: "Ischool",
                            message: "What is Intern's school name? : "
                        }
                    ])
                        .then(({ Iname, Iid, Iemail, Ischool }) => {
                            const intern = new Intern(Iname, Iid, Iemail, Ischool);
                            let role = intern.getRole();
                            let empname = intern.getName();
                            let empid = intern.getId();
                            let empemail = intern.getEmail();
                            let empschool = intern.school;
                            empArr.push({ role, empname, empid, empemail, empschool });
                        }).then(function () {
                            teamMembers();
                        });
                    break;
                case "Finish building team":
                    generateTemplate(empArr);
                    break;

            }
        });

};

//  Create a function to write HTML file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};