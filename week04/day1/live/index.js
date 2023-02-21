//set timeout example of a prompt box that is stored in a variable after 3 seconds or 3000 millseconds
//setTimeout(() => {
//   let response = prompt("whats your favorite house in Hogwarts?");
//   console.log("here is the response", response);
// }, 3000);

//setInterval example
let counter = 10;
// let intervalId = setInterval(() => {
//   console.log("counter", counter);
//   counter++;
//   if (counter > 10) {
//     clearInterval(intervalId);
//   }
// }, 1000);

//create an interval that counts down from 10 and when it 0, console.log 'Blast off!!!'
// let intervalId = setInterval(() => {
//   counter--;
//   console.log(counter);
//   if (counter === 0) {
//     console.log("Blast off!!!");
//     clearInterval(intervalId);
//   }
// }, 1000);

//function to count down by Rohan
// function countdown(startingPoint) {
//   startingPoint;
//   let intervalId = setInterval(function () {
//     startingPoint--;
//     if (startingPoint === 0) {
//       console.log("Blast Off");
//       clearInterval(intervalId);
//     } else {
//       console.log(startingPoint);
//     }
//   }, 1000);
// }

// countdown(8);

// .map .filter and .reduce
const wizards = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    marks: 7,
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    marks: 7,
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Gryffindor",
    marks: 5,
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    marks: 9,
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "Hufflepuff",
    marks: 7,
  },
  {
    firstName: "Rowen",
    lastName: "Ravenclaw",
    house: "Ravenclaw",
    marks: 8,
  },
  {
    firstName: "unknown",
    lastName: "Crab",
    house: "Slytherin",
    marks: 3,
  },
  {
    firstName: "Tom",
    lastName: "Riddle",
    house: "Slytherin",
    marks: 8,
  },
];

//.map find the firstNames of all the wizards
// const mappedArr = wizards.map((wizard) => {
//   return {
//     name: wizard.firstName + " " + wizard.lastName,
//     grade: wizard.marks,
//   };
// });
// // console.log(mappedArr);
// let numsArr = [1, 2, 3, 6, 20];
// let newNums = numsArr.map((number, index) => {
//   if (index % 2 === 0) {
//     return number * 3;
//   } else {
//     return number;
//   }
// });

// console.log(numsArr, newNums);

//filter examples with basic numbers
const numbersArray = [2, 7, 20, 5, 100];
// const lessThenFive = numbersArray.filter((currentNumber, index, wholeArray) => {
//   if (currentNumber <= 5) {
//     return currentNumber;
//   }
// });
// console.log(numbersArray, lessThenFive);

// const mappedAndFiltered = numbersArray
//   .map((number) => number * 3)
//   .filter((filteredNumber) => {
//     if (filteredNumber >= 60) {
//       return filteredNumber;
//     }
//   });
// console.log(mappedAndFiltered);

const objNumbers = [{ score: 100 }, { score: 80 }, { score: 40 }];
//reduce examples
// syntax callback function and intial value, then in the callback there are three arguments accumlator, currentElement, array
// reduce((accumlator, currentElement)=>{}, 0)
// const reducedNumbers = numbersArray.reduce(
//   (accumlator, currentNumber, array) => {
//     return accumlator + currentNumber;
//   }
// );

const reducedNumbersWithObjects =
  objNumbers.reduce((accumlator, currentNumber, array) => {
    return accumlator + currentNumber.score;
  }, 0) / objNumbers.length;
console.log(reducedNumbersWithObjects);
