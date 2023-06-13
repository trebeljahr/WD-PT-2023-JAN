//split is a string method, thats how you want to split the string as argument
// let str = "Happy Saturday, yall";
// let strArr = str.split(" ");
// console.log(strArr.length);

//adding and removing students from the array
let studentsArray = ["Olga", "Mattia", "Zuzana"];
let studentsArrayCopy = studentsArray;
studentsArray.push("Rohan");
console.log(studentsArray);

//removing a student with pop
studentsArray.pop();
console.log(studentsArray);

//adding to the front of an array
studentsArray.unshift("Rohan");
console.log(studentsArray);

//remove element from front of the array
studentsArray.shift();
console.log(studentsArray);

//using splice to remove one element and add one in its place
studentsArray.splice(1, 2, "Rohan");
console.log(studentsArray);

function capitalNames(student) {
  console.log(student.toUpperCase());
}
//forEach over the array to uppercase everything
studentsArray.forEach(capitalNames);

//string example for the .forEach
let testString = "this is a fun Saturday";

//more common is this syntax
//studentsArray.forEach((currentElement, indexOfTheElement, wholeArray)=>{})
testString.split(" ").forEach((word) => {
  console.log(word.toUpperCase());
});

//.includes works for stings and arrays
let includesFun = testString.includes("fun");
console.log("Does it include the word fun:", includesFun);

let funIndex = testString.indexOf("fun");
console.log("The index of the letter f:", funIndex);
let funIndexSplit = testString.split(" ").indexOf("fun");
console.log("The index of the word fun is:", funIndexSplit);
