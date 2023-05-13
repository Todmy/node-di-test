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

exports.default = Person;
