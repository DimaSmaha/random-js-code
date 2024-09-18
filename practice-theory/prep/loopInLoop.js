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

function drawingHalfOfChristmasTree() {
  let maxRow = 6;
  let str = "";

  for (let i = 0; i <= maxRow; i++) {
    for (let j = 0; j < i; j++) {
      str += "*";
    }
    console.log(str);
    str = "";
  }
}

drawingHalfOfChristmasTree();
