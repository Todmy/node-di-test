class Greeter {
  constructor(person) {
    this.person = person
  }

  greet() {
    return `Hello ${this.person.getName()}`
  }
}

exports.default = Greeter