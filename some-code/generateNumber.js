function randomBySomeRange(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomBySomeRange(40, 20));
