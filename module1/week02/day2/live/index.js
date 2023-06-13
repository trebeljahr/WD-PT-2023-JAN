// //if/ else if / else example
// let wizard = "Ron";

// if (wizard.length > 5) {
//   console.log("the wizard has a long name");
// } else if (wizard.length === 3) {
//   console.log("The wizards length is 3");
// } else {
//   console.log("the wizard has a short name");
// }

// //switch statement ex
// let studentWizard = "Harry";
// switch (studentWizard) {
//   case "Harry":
//     console.log("He is a Gryffindor");
//     break;
//   case "Malfoy":
//     console.log("He is a Slytherin");
//     break;
//   default:
//     console.log("They are a muggle");
// }

// //for loops
// const teacherWizard = "Snape";
// //first initialize 'i' variable (usually at 0); until when does the loop stop; increment the variable 'i'
// for (let i = 0; i < teacherWizard.length; i += 1) {
//   let currentIteration = teacherWizard[i];
//   console.log(currentIteration, "i equals:", i);
// }

//for loop in reverse
// for (let i = teacherWizard.length - 1; i >= 0; i--) {
//   let currentIteration = teacherWizard[i];
//   console.log(currentIteration, "i equals:", i);
// }

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

//Mauricio's example 'the variables are outside the for loop, so we can access them :)

// let reversedString = "";
// const hacker1 = "mauir";

// for (let i = hacker1.length - 1; i >= 0; i--) {
//   reversedString += hacker1[i].toUpperCase();
// }
// console.log(reversedString);

// //Fizz Buzz challenge
// for (let i = 0; i <= 100; i++) {
//   if (i % 15 === 0 && i !== 0) {
//     console.log("Fizz Buzz");
//   } else if (i % 3 === 0 && i !== 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0 && i !== 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// //Mauricio solution
// for (let i = 0; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log(" Buzz");
//   } else {
//     console.log(i);
//   }
// }

//while loop example
let i = 20;
while (i <= 10) {
  console.log("Here is i", i);
  i++;
}

//do while loop example
//is the same as a while loop, except it runs always once

do {
  console.log("Inside the do while", i);
  i++;
} while (i <= 15);

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log("this is from the j loop", j);
  }
  console.log("this is from the first loop", i);
}
