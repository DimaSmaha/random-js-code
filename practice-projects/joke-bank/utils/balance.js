// store balance in localStorage by default balance is 10
export class Balance {}

export function increaseBalance() {
  const balanceValue = document.querySelector("#balance-value");
  let balanceNumber = parseInt(balanceValue.innerHTML);
  balanceNumber++;

  balanceValue.innerHTML = balanceNumber;
}

export function getBalance() {
  const balanceValue = document.querySelector("#balance-value");
  console.log(parseInt(balanceValue.innerHTML));
  return parseInt(balanceValue.innerHTML);
}
