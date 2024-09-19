//Write a JavaScript program to construct the following pattern, using a nested for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

// function drawingHalfOfChristmasTree() {
//   let maxRow = 6;
//   let str = "";
//   for (let i = 0; i < maxRow; i++) {
//     str += "*";
//     console.log(str);
//   }
// }
// drawingHalfOfChristmasTree();

// function drawingHalfOfChristmasTree() {
//   let maxRow = 6;
//   let str = "";

//   for (let i = 0; i <= maxRow; i++) {
//     for (let j = 0; j < i; j++) {
//       str += "*";
//     }
//     console.log(str);
//     str = "";
//   }
// }

function drawingHalfOfChristmasTree() {
  let starNum = 6;
  let row = "";
  for (let i = 0; i < starNum; i++) {
    for (let ii = 0; ii <= i; ii++) {
      row += "*";
    }
    console.log(row);
    row = "";
  }
}

drawingHalfOfChristmasTree();
