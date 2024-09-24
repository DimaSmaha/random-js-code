import "./style.css";
import balance from "./utils/balance";
import joke from "./utils/joke";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Joke Bank!</h1>
    <p id="balance">
     Balance: <span id="balance-value">0</span>
    </p>
    <button id="top-up-button" type="button">Top up</button>
    <div class="card">
      <button id="get-joke" type="button">Get Joke</button>
    </div>
    <p id="joke-text">
      Click "Get Joke" to Get Joke
    </p>
  </div>
`;

const getJokeButton = document.querySelector("#get-joke");
const topUpButton = document.querySelector("#top-up-button");

window.onload = function () {
  balance.renderBalance();
};

topUpButton.addEventListener("click", () => {
  //increase balance
  balance.increaseBalance();
});

getJokeButton.addEventListener("click", async () => {
  // if balance is equal or smaller than 0 alert and do nothing
  // disable get joke button
  // get and render joke
  // un disable get joke button
  // decrease balance
  if (balance.getBalanceValue() <= 0) {
    alert("Your balance is 0");
    return;
  }
  joke.disableGetJokeButton();
  await joke.getJoke();
  joke.enableGetJokeButton();
  balance.decreaseBalance();
});
