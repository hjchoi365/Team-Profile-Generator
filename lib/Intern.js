const Employee = require('./Employee');
//Intern class defintion
class Intern extends Employee{
    //Intern class constructor
    constructor(name,id,email,school)
    {
        super(name,id,email);
        this.school = school;
    }
    //returns school name of Intern
    getSchool()
    {
        return `${this.school}`;
    }
    //return's role Intern
    getRole(){
        return `Intern`;
    }
}

module.exports = Intern;