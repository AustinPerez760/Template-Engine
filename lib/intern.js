const Employee = require("/Users/austinperez/Desktop/Homework-10-OOP/Template-Engine/lib/employee.js");

class intern extends Employee {
  constructor(name, id, email, school, position) {
    super(name, id, email);
    this.school = school;
    this.position = position;
  }
  displaySchool() {
    return this.school;
  }
  displayRole() {
    return this.role;
  }
}

module.exports = intern;
