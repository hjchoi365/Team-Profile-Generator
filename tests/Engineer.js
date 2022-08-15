const Employee = require("./Employee");

//Engineer class definition

class Engineer extends Employee{
    //Engineer class constructor
    constructor(name,id,email,githubname)
    {
        super(name,id,email);
        this.githubname = githubname;
    }
    //returns engineer's github user name
    getGithub()
    {
        return `${this.githubname}`;
    }
    //returns role Engineer
    getRole()
    {
        return `Engineer`;
    }
}

module.exports = Engineer;