const Employee = require("./employee");

class engineer extends Employee {
  constructor(name, id, email, github, position) {
    super(name, id, email);
    this.github = github;
    this.position = position;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return this.position;
  }
}

module.exports = engineer;
