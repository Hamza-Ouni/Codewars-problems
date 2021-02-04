// Find The Parity Outlier

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// ********** Methode 1 ************
const findOutlier = (integers) => {
  let evenArray = [];
  let oddArray = [];
  for (let i = 0; i < integers.length; i++) {
    integers[i] % 2 === 0
      ? evenArray.push(integers[i])
      : oddArray.push(integers[i]);
  }
  return evenArray.length === 1 ? evenArray[0] : oddArray[0];
};

// ********** Methode 2 ************
const findOutlier = (integers) => {
  let evenArray = integers.filter((val) => val % 2 == 0);
  let oddArray = integers.filter((val) => val % 2 !== 0);
  return even.length == 1 ? evenArray[0] : oddArray[0];
};

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
