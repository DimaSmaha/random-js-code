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
  function getColumnRows(datasetArr, rowNum, receiverArr) {
    if (rowNum == 1) {
      rowNum = 2;
    } else if (rowNum == 2) {
      rowNum = 1;
    } else if (rowNum == 3) {
      rowNum = 0;
    }

    datasetArr.forEach((el) => {
      let newEl = 3 * el - rowNum;
      if (newEl > 0 && newEl < 37) {
        receiverArr.push(newEl);
      }
    });
  }
  const columnOneArr = []; // 1,4,7,10,13,16,19,22,25,28,31,34
  const columnOneFn = getColumnRows(fullDataset, 1, columnOneArr);
  const columnTwoArr = []; //2,5,8,11,14,17,20,23,26,29,32,35
  const columnTwoFn = getColumnRows(fullDataset, 2, columnTwoArr);
  const columnThreeArr = []; // 3,6,9,12,15,18,21,24,27,30,33,36
  const columnThreeFn = getColumnRows(fullDataset, 3, columnThreeArr);

  function getSixLine(datasetArr, rowNum, receiverArr) {
    datasetArr.forEach((el) => {
      if (el > rowNum * 6 - 6 && el < rowNum * 6 + 1) {
        receiverArr.push(el);
      }
    });
  }
  const sixLine_1_Arr = []; // 1,2,3,4,5,6
  const sixLine_2_Arr = []; // 7,8,9,10,11,12
  const sixLine_3_Arr = []; // 13,14,15,16,17,18
  const sixLine_4_Arr = []; // 19,20,21,22,23,24
  const sixLine_5_Arr = []; // 25,26,27,28,29,30
  const sixLine_6_Arr = []; // 31,32,33,34,35,36
  for (i = 1; i <= 6; i++) {
    getSixLine(fullDataset, i, eval(`sixLine_${i}_Arr`));
  }

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
  Six line 1 : ${sixLine_1_Arr}
  Six line 2 : ${sixLine_2_Arr}
  Six line 3 : ${sixLine_3_Arr}
  Six line 4 : ${sixLine_4_Arr}
  Six line 5 : ${sixLine_5_Arr}
  Six line 6 : ${sixLine_6_Arr}
  `);
};

roulette();
