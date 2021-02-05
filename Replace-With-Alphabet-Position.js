//Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

//********* Method 1  ************//
//Using RegExp
const alphabetPosition = (text) =>
  (
    text
      //Convert the string to lowercase letters
      .toLowerCase()
      //if the text elements are between a and z or if it will not match with any alphabet letter and it will give an empty array
      //THe g modifier to keep serching matches rather than stopping after the first match
      .match(/[a-z]/g) || []
  )
    //Iterate through the text string and determine the index of each element using the charCodeAt methode (ASCII code) and the rest of the division by 32 will give the right position of every letter
    .map((letter) => letter.charCodeAt() % 32)
    .join(" ");

//******** Method 2 **********/
const alphabetPosition = (text) => {
  let arrayOfNumber = [];
  //Create an object containing alphabet letter with their position
  let alphabetObject = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  //Iterate throug the string elements
  [...text].forEach((element) => {
    //Iterate through the object containing the alphabet leeters and their positions
    for (var key in alphabetObject) {
      //If the string (parameter) elements are  identical to the key of alphabetObject, we have to push the position of each letter in the new empty array
      if (element.toLowerCase() === key) {
        //Push the position of each letter in the new empty array
        arrayOfNumber.push(alphabetObject[key]);
      }
    }
  });
  //Use the join method to return the position of each letter in a string
  return arrayOfNumber.join(" ");
};
