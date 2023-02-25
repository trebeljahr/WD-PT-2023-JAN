// //Shauns help on copying
// let arr1 = [1, 2, { name: "shaun" }];
// arr2 = [...arr1];
// let arr3 = JSON.parse(JSON.stringify(arr1));
// arr3[2].age = 2;
// arr2.push(10);
// console.log(arr1, arr3);

// //caught and uncaught errors
// try{
//     let username = prompt('Enter your name please')
//     if(username.length <=0){
//         throw new Error('You need to enter a username')
//     }else{
//         alert('Good job, nice name')
//     }
// }
// catch(err){
//     console.log('There was an uncaught error', err)
// }

//hoisting
// console.log(aVarTest);
// var aVarTest = "var variable";

// //this will throw and error Cannot access 'letTest' before initializationCannot access 'letTest' before initialization
// // console.log(letTest);
// let aLetTest;
// console.log(aLetTest);
// aLetTest = "This is after the log";

// // console.log(constTest);
// const constTest = "this is the const variable";

// setInterval = function () {
//   console.log("gotcha!");
// };

//functions are hoisted and usable
// console.log(addTwoNums(2, 3));
// function addTwoNums(a, b) {
//   return a + b;
// }

//scoping
//global, block & functional

//global example
// const student = "Olga";
// if (2 + 2 === 4) {
//   console.log("Inside an if statement, is the student", student);
// }

//block example
// if (true) {
//   let student2 = "Mattia";
// }
// console.log(student2, "is a great student");

//function example
// const testfunction = (a, b) => {
//   let sum = a + b;
//   return sum;
// };
// console.log(sum);

//mutable data types
// let letter = "a";
// let letter2 = letter;
// letter2 = "b";
// console.log(letter, letter2);

// const obj = { name: "Shaun" };
// const obj2 = obj;
// obj2.name = "Michel";
// console.log(obj, obj2);
// console.log(obj === obj2);
// console.log({ num: 2 } === { num: 2 });
// console.log([1, 2, 3] === [1, 2, 3]);
// console.log(typeof []);

// let counter = 0;
// let intervalId = setInterval(() => {
//   counter = counter + 1;
//   //counter += 1
//   //counter = counter + 1
//   console.log(counter);
//   if (counter >= 5) {
//     clearInterval(intervalId);
//     console.log(add(22, 100));
//   }
// }, 10000);

// function add(a, b) {
//   return a + b;
// }

//great example of ++ not returning the new value. (thanks Shaun)
// let counter = 0;
// let counterResult = counter++;
// console.log(counterResult);

//callbacks
const castSpell = () => {
  console.log("Someone has cast a spell");
};

const blockSpell = (func) => {
  func();
  console.log("But we blocked it!");
};
blockSpell(castSpell);

let arr = [1, 2, 3];
function multByTwo(elem, index, array) {
  return elem * 2;
}
//ex with our own function passed as a callback
let mapped = arr.map(multByTwo);
//ex with just and arrow function passed as the callback
let mapped2 = arr.map((num, i, arr) => {
  return num * 2;
});
//ex with function keyword as the callback
let mapped3 = arr.map(function (num, i, arr) {
  return num * 3;
});
console.log(arr, mapped, mapped3);
