const prompt = require("prompt-sync")();

function spinRoulette() {
  return Math.floor(Math.random() * 37); //random 0-36
}

const roulette = () => {
  const fullDataset = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  ];
  const getRouletteResult = spinRoulette();
  console.log("The roulette result is: " + fullDataset[getRouletteResult]);

  const zero = [0];
  const redDataset = [
    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
  ];
  const blackDataset = [
    2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 36,
  ];
  const oneToEighteen = fullDataset.filter((el) => el > 0 && el < 19); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  const nineteenToThirtySix = fullDataset.filter((el) => el > 18 && el < 37); // 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  const oddNumbers = fullDataset.filter((el) => el > 0 && el % 2 != 0); // 1,  3,  5,  7,  9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35
  const evenNumbers = fullDataset.filter((el) => el > 0 && el % 2 == 0); // 2,  4,  6,  8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36
  const dozenOne = fullDataset.filter((el) => el > 0 && el < 13); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  const dozenTwo = fullDataset.filter((el) => el > 12 && el < 25); // 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
  const dozenThree = fullDataset.filter((el) => el > 24 && el < 37); // 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  //   function getColumnRows(datasetArr, rowNum, receivedArr) {
  //     rowNum = rowNum - 3;
  //     datasetArr.forEach((el) => {
  //       let newEl = 3 * el - rowNum;
  //       if (newEl > 0 && newEl < 37) {
  //         receivedArr.push(newEl);
  //       }
  //     });
  //   }
  const columnOneArr = [];
  const columnOneFn = fullDataset.forEach((el) => {
    let newEl = 3 * el - 2;
    if (newEl > 0 && newEl < 37) {
      columnOneArr.push(newEl);
    }
  });
  const columnTwoArr = [];
  const columnTwoFn = fullDataset.forEach((el) => {
    let newEl = 3 * el - 1;
    if (newEl > 0 && newEl < 37) {
      columnTwoArr.push(newEl);
    }
  });
  const columnThreeArr = [];
  const columnThreeFn = fullDataset.forEach((el) => {
    let newEl = 3 * el;
    if (newEl > 0 && newEl < 37) {
      columnThreeArr.push(newEl);
    }
  });

  console.log(`
  Zero : ${zero}
  Red : ${redDataset}
  Black : ${blackDataset}
  1 to 18 : ${oneToEighteen}
  19 to 36 : ${nineteenToThirtySix}
  Odd : ${oddNumbers}
  Even : ${evenNumbers}
  1st 12 : ${dozenOne}
  2nd 12 : ${dozenTwo}
  3rd 12 : ${dozenThree}
  2 to 1 column 1 : ${columnOneArr}
  2 to 1 column 2 : ${columnTwoArr}
  2 to 1 column 3 : ${columnThreeArr}
  `);
};

roulette();
