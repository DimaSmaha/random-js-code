/**
 * Write a JavaScript function that creates a multiplication table from 1 to 10 and prints it out in a grid format.
 * You need to use two nested loops: one for the rows and one for the columns.
 */

// function generateMultiplicationTable() {
//   let maxNumber = 10;
//   let row = "";
//   for (let i = 1; i <= maxNumber; i++) {
//     for (let ii = 1; ii <= maxNumber; ii++) {
//       row += `${i * ii}, `;
//     }
//     console.log(row);
//     row = "";
//   }
// }

function generateMultiplicationTable() {
  let row = "";
  for (i = 1; i <= 10; i++) {
    for (ii = 1; ii <= 10; ii++) {
      row += `${i * ii}, `;
    }
    console.log(row);
    row = "";
  }
}

generateMultiplicationTable();
