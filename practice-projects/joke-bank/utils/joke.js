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

export class JokeApi {}

export function getJoke() {
  fetch(API_URL)
    .then((res) => res.json())
    .then((json) => {
      const getJokeText = document.querySelector("#joke-text");
      getJokeText.innerHTML = json[0].setup;
      getJokeText.innerHTML += "\n";
      getJokeText.innerHTML += json[0].punchline;
    });
}
