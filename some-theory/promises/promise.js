// 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
// Task 1: Basic Promise
// Objective: Create a basic Promise and handle its resolution and rejection.
// Instructions:
// Create a function getNumber that returns a Promise.
// The Promise should resolve with a random number between 1 and 10 after 1 second.
// If the random number is less than 5, the Promise should reject with an error message "Number is too low".

function getNumber() {
  return new Promise((resolve, reject) => {
    let randomNumber;
    setTimeout(() => {
      randomNumber = Math.random() * 11;

      if (randomNumber < 5) {
        reject("too low " + randomNumber);
      }

      resolve("gut " + randomNumber);
    }, 1000);
  });
}

getNumber()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
// Task 2: Converting a Promise to async/await
// Objective: Convert the Promise-based getNumber function to use async/await.
// Instructions:
// Create an async function fetchNumber that uses the getNumber function.
// Use try/catch to handle the Promise resolution and rejection.
async function getNumberAsync() {
  return await getNumber();
}

getNumberAsync()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//   Task 3: Chaining Promises
//   Objective: Chain multiple Promises together.
//   Instructions:
//   Create a function fetchData that returns a Promise resolving with "Data fetched" after 1 second.
//   Create a function processData that takes a string and returns a Promise resolving with "Data processed: <string>" after 1 second.
//   Chain these Promises together.

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Data fetched`), 1500);
  });
}

function processData(string) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Data processed ` + string), 1000);
  });
}

fetchData()
  .then((el) => {
    console.log(el);
    return processData("AAA");
  })
  .then((el) => console.log(el));

// Task 4: Combining async/await with multiple Promises
// Objective: Use async/await to handle multiple Promises.
// Instructions:
// Create an async function fetchAndProcessData.
// Use await to fetch data using fetchData and then process it using processData.
// Log the results.

async function execute() {
  console.log(await fetchData());
  console.log(await processData("EEEE"));
}

execute();

// Task 5: Handling Multiple Promises Concurrently
// Objective: Use Promise.all to handle multiple Promises concurrently.
// Instructions:
// Create two functions, fetchUser and fetchPosts, each returning a Promise that resolves after 1 second with "User data" and "Posts data", respectively.
// Use Promise.all to run these functions concurrently and log their results.

const fetchDataVar = new Promise((resolve) => {
  setTimeout(() => resolve(`Data fetched`), 1500);
});

function processDataVar(string) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Data processed ` + string), 1000);
  });
}

Promise.all([fetchDataVar, processDataVar()]).then((el) => console.log(el));

Promise.race([fetchDataVar, processDataVar()]).then((el) => console.log(el));

// Task 6: Advanced Task - Fetching Data with Retry Logic
// Objective: Implement a function that fetches data with retry logic using async/await.
// Instructions:
// Create a function fetchWithRetry that accepts a fetchFunction and a retries count.
// The fetchWithRetry function should try to fetch data using the fetchFunction.
// If it fails, it should retry the fetch up to the specified retries count.
// These tasks should provide a comprehensive practice on async/await and Promises in JavaScript.

const somePromise = new Promise((resolve, reject) => {
  if (1) {
    reject("Rejected");
  }
});

async function fetchWithRetry(promise, retries) {
  for (i = 0; i < retries; i++) {
    console.log("retry: " + i);

    await promise.catch((err) => console.error(err));
  }
}

async function fetchWithRetry2(promise, retries) {
  for (i = 0; i < retries; i++) {
    console.log("retry: " + i);
    try {
      console.log(await promise);
    } catch (err) {
      console.log(console.error());
    }
  }
}

fetchWithRetry(somePromise, 5);
fetchWithRetry2(somePromise, 10);
