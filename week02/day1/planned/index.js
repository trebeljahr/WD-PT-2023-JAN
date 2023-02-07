// this is a comment
/*
this is a multiple line comment

*/
//var, let and const
// var is hoisted to the top of the page, but not the value so if you use the variable before... it will undefined
// let and const are not hoisted
// In JS always try to use camelCase, other names PascalCase and kebab-case
const goodGuy = "snape";
console.log(goodGuy);
// primative data types
//example of a string
let strEx = "hello world";

//raise to a power in JS
let cubed = 3 ** 3;
//or the long way
let squared = Math.pow(4, 2);
console.log("squared", squared);
console.log("cubed", cubed);
//off by one error ===> computer starts counting from 0 and humans count from 1
//string examples
let wizard = "Ron";
const wizard2 = "Hermione";
const uppercaseWizard =
  wizard[0].toUpperCase() + wizard.slice(1, wizard.length);
console.log(uppercaseWizard);
//example of a number
let numEx = 6;
let numEx2 = "9";
//convert to a number before adding
console.log(Number(numEx) + Number(numEx2));
//another way to convert to a number
console.log(parseInt(numEx) + parseInt(numEx2));
//another way to convert to a number
console.log(+numEx + +numEx2);

const nullExample = null;
const undefinedExample = undefined;

//boolean example
if (2 == "2") {
  console.log("😀");
} else if (3 + 3 === 6.1) {
  console.log("this is also true");
} else {
  console.log("it was false");
}

//template literals `` double quotes "", single quotes ''
const templateLiteralExample = `${wizard} is my favorite wizard!`;
console.log(templateLiteralExample);
const singleQuoteExample = wizard2 + " my second favorite wizard!";
console.log(singleQuoteExample);
//why we need single and double quotes?
const classExample = "Y'all are amazing students!";
console.log(classExample);

//example of finding a random number between two numbers Math.floor(Math.random() * (max - min + 1) + min)
//Math.floor() always rounds down
//Math.ceil() always round up
//Math.round() rounds as normal 5.51 goes up and 4.99 goes down
const randomNumber = Math.random() * (10 - 2 + 1) + 2;
console.log(randomNumber);
