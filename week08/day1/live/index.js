//callback hell
// setTimeout(() => {
//   console.log("This is our first response");
//   setTimeout(() => {
//     console.log("This is our second response");
//     setTimeout(() => {
//       console.log("This is our third response");
//     }, 1000);
//   }, 1000);
// }, 1000);

//creating a promise
// new is a keyword for a class
const ourPromise = new Promise((resolve, reject) => {
  if (2 + 3 === 4) {
    resolve({ message: "Our promise was good" });
  } else {
    reject({ errorMessage: "Something went wrong with our promise" });
  }
});
//consuming a promise we created .then & .catch
// ourPromise
//   .then((responseFromOurPromise) => {
//     console.log("This is our then block", responseFromOurPromise.message);
//   })
//   .catch((err) => {
//     console.log("This is in our Catch block", err.errorMessage);
//   });

//consuming a promise with async and await
//make sure to always use try and catch blocks inside your async function§
//ES5  ====>
//async function ourFunc(){}
const ourFunc = async () => {
  try {
    let data = await ourPromise;
    console.log("here is our data", data);
  } catch (err) {
    console.log("there was an error", err);
  }
};
ourFunc();

//Promise.all can take an array of promises but all must resolve to go to the then block

//fetch api

//Dummy api site https://dummy.restapiexample.com/
// Game of thrones Api https://www.anapioficeandfire.com/api/characters/583
// Rick and Morty free api https://rickandmortyapi.com/
