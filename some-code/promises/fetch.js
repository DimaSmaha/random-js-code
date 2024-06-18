function syncGetConsole(url) {
  fetch(url)
    .then((res) => res.json())
    .then((body) => body.forEach((el) => console.log(el)))
    .catch((error) => console.log(error));
}
syncGetConsole("https://jsonplaceholder.typicode.com/users");

function syncGetExactUser(url) {
  fetch(url)
    .then((res) => res.json())
    .then((body) => body[0].username) //impossible to do with the sync code, since its async function. We need to create a promise
    .catch((error) => console.log(error));
}
syncGetExactUser("https://jsonplaceholder.typicode.com/users");

function syncGetToVariable(url) {
  return new Promise((res, rej) => {
    fetch(url)
      .then((res) => res.json())
      .then((body) => res(body[0].username))
      .catch((error) => rej(console.log(error)));
  });
}
let user = await syncGetToVariable(
  "https://jsonplaceholder.typicode.com/users"
).then((user) => user);
console.log(user);

function syncGetArray(url) {
  return new Promise((res, rej) => {
    fetch(url)
      .then((res) => res.json())
      .then((body) => res(body.map((el) => el.username)))
      .catch((error) => rej(console.log(error)));
  });
}
syncGetArray("https://jsonplaceholder.typicode.com/users").then((arr) =>
  console.log(arr)
);

async function asyncGet() {}
