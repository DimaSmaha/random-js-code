function somePromise() {
  return new Promise((res, rej) => {
    const n = Math.random();

    if (n >= 0.49) {
      res("Horray n = " + n);
    }
    if (n < 0.49) {
      rej("OH noo its too small " + n);
    }
  });
}

somePromise()
  .then((res) => console.log(res))
  .catch((rej) => console.log(rej));

async function myAsyncFn() {
  console.log("Start async");
  await somePromise()
    .then((res) => console.log(res))
    .catch((rej) => console.log(rej));
  console.log("End async");
}

myAsyncFn();
