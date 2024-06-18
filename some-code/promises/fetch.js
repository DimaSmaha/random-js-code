/**1. ************************************************************************************************************/
function syncGetConsole(url) {
  fetch(url)
    .then((res) => res.json())
    .then((body) => body.forEach((el) => console.log(el)))
    .catch((error) => console.log(error));
}
syncGetConsole("https://jsonplaceholder.typicode.com/users");

/**2. ************************************************************************************************************/
function syncGetExactUser(url) {
  fetch(url)
    .then((res) => res.json())
    .then((body) => body[0].username) //impossible to do with the sync code, since its async function. We need to create a promise
    .catch((error) => console.log(error));
}
syncGetExactUser("https://jsonplaceholder.typicode.com/users");

/**3. ************************************************************************************************************/
function syncGetToVariable(url) {
  return new Promise((res, rej) => {
    fetch(url)
      .then((res) => res.json())
      .then((body) => res(body[0].username))
      .catch((error) => rej(console.log(error)));
  });
}
let user = await syncGetToVariable("https://jsonplaceholder.typicode.com/users")
  .then((user) => user)
  .catch((err) => console.log(err));
console.log(user);

/**4. ************************************************************************************************************/
function syncGetArray(url) {
  return new Promise((res, rej) => {
    fetch(url)
      .then((res) => res.json())
      .then((body) => res(body.map((el) => el.username)))
      .catch((error) => rej(console.log(error)));
  });
}
syncGetArray("https://jsonplaceholder.typicode.com/users")
  .then((arr) => console.log(arr))
  .catch((err) => console.log(err));

/**5. ************************************************************************************************************/
async function asyncGet(url) {
  let req = await fetch(url);
  let body = await req.json();
  return body;
}
let firstUser = await asyncGet("https://jsonplaceholder.typicode.com/users")
  .then((body) => body[0].username)
  .catch((err) => console.log(err));
console.log(firstUser);
