const students = [
  { name: "Daniel", age: 24 },
  { name: "Alexia", age: 28 },
  { name: "Ed", age: 36 },
  { name: "Matan", age: 30 },
];

// function mapStudents(arr) {
//   const mapped = arr.map((student) => {
//     return student.name;
//   });
//   return mapped;
// }
// mapStudents(students);

// //ES-6 Syntax
// //const arraySorter = () => {}

// //acsending order
// function arraySorter(arr) {
//   const sortedArray = arr.sort((student1, student2) => {
//     if (student1.age > student2.age) {
//       return 1;
//     } else if (student1.age < student2.age) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
//   console.log("sorted array", sortedArray);
// }

// //decending order
// function arraySorter(arr) {
//   //spread operator (shallow copy ) with the ...
//   //const copyArr = [...arr, { name: "Yvo", age: 21 }];
//   const copyArr = JSON.parse(JSON.stringify(arr));
//   const sortedArray = copyArr.sort((student1, student2) => {
//     if (student1.age > student2.age) {
//       return -1;
//     } else if (student1.age < student2.age) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
//   return sortedArray;
// }
// function reverseSorter(arr) {
//   const copyArr = JSON.parse(JSON.stringify(arr));
//   const reverseArr = arraySorter(copyArr).reverse();
//   return reverseArr;
// }
// // arraySorter(students);
// console.log(reverseSorter(students));
// console.log("original", students);

// //short and clean version online for sort ascending
// const sortedShortAsc = students.sort((a, b) => a.age - b.age);
// // console.log("short version", sortedShort);

// //short and clean version online for sort descending
// const sortedShortDes = students.sort((a, b) => b.age - a.age);
// console.log("short version", sortedShortDes);

// //return an array of just the students names (map)
// //return only the students who are older than 30 (filter)
// //return the average of all of the students ages (reduce)
// //sort the students in ascending order and then reverse them
// console.log("josh" - "ed");

const students2 = [
  { name: "Daniel", age: 24 },
  { name: "Alexia", age: 28 },
  { name: "Ed", age: 36 },
  { name: "Matan", age: 30 },
];

//number 1
const mapped = students2.map((student) => student.name);
//number 2
const filtered = students2.filter((student) => student.age > 30);
//number 3
const reduced =
  students2.reduce((acc, curr) => {
    return acc + curr.age;
  }, 0) / students2.length;
//number 4
const ascending = students2.sort((a, b) => {
  if (a.age > b.age) {
    return -1;
  } else if (b.age > a.age) {
    return 1;
  } else {
    return 0;
  }
});
console.log(mapped, filtered, reduced, ascending);

//reversed
let reversed = ascending.reverse();
console.log(reversed);
