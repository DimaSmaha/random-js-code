const url = "https://catfact.ninja/fact";

function getFact() {
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => err);
}

getFact()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

async function asyncGetFact() {
  let resp = await fetch(url);
  let body = await resp.json();

  return body;
}

asyncGetFact()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
