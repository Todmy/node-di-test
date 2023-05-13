import {ContainerBuilder, Reference, Definition} from 'node-dependency-injection'

class Wallet {
  constructor() {
    this.money = 0
  }

  addMoney(amount) {
    this.money += amount
  }

  getMoney() {
    return this.money
  }
}

class Person {
  #name
  #wallet

  constructor(name, wallet) {
    this.name = name
    this.wallet = wallet
  }

  getName() {
    if (this.wallet.getMoney() < 50) {
      this.wallet.addMoney(20)
      return `Sad ${this.name}`
    }
    this.wallet.addMoney(-5)
    return `Happy ${this.name}`
  }
}

class Greeter {
  constructor(person) {
    this.person = person
  }

  greet() {
    return `Hello ${this.person.getName()}`
  }
}

const container = new ContainerBuilder();

container.register('wallet', Wallet);
container.register('person', Person)
  .addArgument('John')
  .addArgument(new Reference('wallet'));
container.register('greeter', Greeter)
  .addArgument(new Reference('person'));

const greeter = container.get('greeter');

console.log(greeter.greet());
