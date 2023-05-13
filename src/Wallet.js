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

exports.default = Wallet;
