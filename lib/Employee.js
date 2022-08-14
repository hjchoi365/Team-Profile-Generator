class Employee
{
//Employee class definition
constructor(name,id,email)
{   //constructor funtcion
    this.name = name;
    this.id = id;
    this.email = email;
}
    //return name
getName()
{
        return `${this.name}`;
}
    //return employee id
getId()
{
        return this.id;
}
    //return employee email
getEmail()
{
        return `${this.email}`;
}
    //return role as Employee
getRole()
{
        return `Employee`;
}
}

module.exports = Employee;
