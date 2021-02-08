// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

const high = (x) => {
  //transform the input string into array
  let arrayOfStrings = x.split(" ");
  let sumOfIndexes = 0;
  //Declar an empty array that will contain the sum of indexes for each string word
  let arrayOfSum = [];
  //Iterate through the array with input words to find the one with the greatest sum and push it into the arrayOfSum
  for (let i = 0; i < arrayOfStrings.length; i++) {
    arrayOfStrings[i].split("").map((element) => {
      sumOfIndexes += element.charCodeAt() % 32;
    });
    arrayOfSum.push(sumOfIndexes);
    sumOfIndexes = 0;
  }
  //Return the word with the greatest sum of indexes
  return arrayOfStrings[arrayOfSum.indexOf(Math.max(...arrayOfSum))];
};
