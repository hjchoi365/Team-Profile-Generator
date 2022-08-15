class Employee {
    //Employee class definition
    constructor(name, id, email) {   //constructor funtcion
        this.email = email;
        this.id = id;
        this.name = name;


    }
    //return name
    getEmail() {
        return `${this.email}`;
    }
    //return employee id
    getId() {
        return this.id;
    }
    //return employee email
    getNamel() {
        return `${this.name}`;
    }
    //return role as Employee
    getRole() {
        return `Employee`;
    }
}

module.exports = Employee;
