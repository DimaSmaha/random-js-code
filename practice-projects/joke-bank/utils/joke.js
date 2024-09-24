const API_URL =
  "https://official-joke-api.appspot.com/jokes/programming/random";

// Example response
// [
//   {
//     type: "programming",
//     setup: "Why was the JavaScript developer sad?",
//     punchline: "He didn't know how to null his feelings.",
//     id: 420,
//   },
// ];

class JokeApi {
  constructor() {}

  disableGetJokeButton() {
    document.querySelector("#get-joke").setAttribute("disabled", true);
  }

  enableGetJokeButton() {
    document.querySelector("#get-joke").removeAttribute("disabled");
  }

  async getJoke() {
    const res = await fetch(API_URL);
    const json = await res.json();

    const getJokeText = document.querySelector("#joke-text");
    getJokeText.innerHTML = json[0].setup;
    getJokeText.innerHTML += "\n";
    getJokeText.innerHTML += json[0].punchline;
  }
}

export default new JokeApi();
