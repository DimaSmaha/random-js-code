// The main thing you have to understand about the nested loops is that,
// When the outer loop runs 1 iteration, the inner loop should run through all iterations
// And this will continue until outer loop runs all iterations.
// So the number of nested loop outputs is a multiplication of inner loop and outer loop borders

// for (i = 0; i < 5; i++) {
//   console.log(`Current val of i ${i}`);
//   for (j = 0; j < 5; j++) {
//     console.log(`Current val of j ${j}`);
//   }
//   console.log(`---------------`);
// }

// for (i = 0; i <= 10; i++) {
//   for (j = 0; j <= 10; j++) {
//     console.log(`${i} X ${j} = ${i * j}`);
//   }
//   console.log(`---------------`);
// }

let arr = [
  ["Item: Laptop", "Price: $400 ", "Inventory: 5"],
  ["Item: PC", "Price: $700 ", "Inventory: 26"],
  ["Item: Mouse", "Price: $25 ", "Inventory: 36"],
  ["Item: Keyboard", "Price: $60 ", "Inventory: 27"],
  ["Item: Table", "Price: $150 ", "Inventory: 13"],
  ["Item: Microphone", "Price: $200 ", "Inventory: 7"],
];

for (let i = 0; i < arr.length; i++) {
  for (let ii = 0; ii < arr[i].length; ii++) {
    console.log(`${arr[i][ii]}`);
  }
  console.log(`---------------`);
}
