// store balance in localStorage by default balance is 10
class Balance {
  constructor() {
    this.balanceValue = 10;
  }

  renderBalance() {
    if (!localStorage.getItem("currentBalance")) {
      localStorage.setItem("currentBalance", this.balanceValue);
    }
    this.balanceValue = localStorage.getItem("currentBalance");
    document.querySelector("#balance-value").textContent = this.balanceValue;
  }

  getBalanceValue() {
    return parseInt(document.querySelector("#balance-value").innerHTML);
  }

  increaseBalance() {
    this.balanceValue++;
    localStorage.setItem("currentBalance", this.balanceValue);
    this.renderBalance();
  }

  decreaseBalance() {
    this.balanceValue--;
    localStorage.setItem("currentBalance", this.balanceValue);
    this.renderBalance();
  }
}

export default new Balance();
