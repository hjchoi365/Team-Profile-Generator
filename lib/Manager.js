const Employee = require('./Employee');

//Manager class definition
class Manager extends Employee{
    //Manager class constructor
    constructor(name,id,email,officeNumber){

        super(name,id,email);
        this.officeNumber = officeNumber;
    }
    //returns role Manager
    getRole()
    {
        return `Manager`;
    }
}

module.exports = Manager;