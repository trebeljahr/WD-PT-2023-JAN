// destructuring can be done on objects and arrays [] and {}

// some variables to work with
const first = 1;
const person = {
  nameKey: {
    first: "Rico",
    last: "Trebeljahr",
  },
  address: {
    city: "Berlin",
  },
};

// left side => variables we want to create from destructuring
// right side => the thing we want to take the key/values from to destructure
// this will create nameKey === person.nameKey and address === person.address
const { nameKey, address } = person;
// it's equivalent to these two lines, but shorter/more powerful with what else you can do
// const nameKey = person.name;
// const address = person.address;
// console.log(nameKey);
// console.log(address);

const {
  nameKey: { first: firstName, last: lastName },
  nameKey: fullName,
} = person;
// console.log(firstName, lastName);

// destructuring also works with arrays
const arrayOfNumbers = [1, 2, 3, 4, 5];

// const firstElement = arrayOfNumbers[0];

// get the rest of the elements by using ... => the spread operator
const [firstElement, second, ...rest] = arrayOfNumbers;

// console.log(firstElement, second, rest);

// skip elements, by putting , :)
const [, , thirdElement] = arrayOfNumbers;

// big example response object how one would get it from an API usually.
const response = {
  results: [
    {
      gender: "male",
      name: {
        title: "mr",
        first: "brad",
        last: "gibson",
      },
      age: 27,
      location: {
        street: "9278 new road",
        city: "kilcoole",
        state: "waterford",
        postcode: "93027",
        coordinates: {
          latitude: "20.9267",
          longitude: "-7.9310",
        },
        timezone: {
          offset: "-3:30",
          description: "Newfoundland",
        },
      },
      email: "brad.gibson@example.com",
      login: {
        uuid: "155e77ee-ba6d-486f-95ce-0e0c0fb4b919",
        username: "silverswan131",
        password: "firewall",
        salt: "TQA1Gz7x",
        md5: "dc523cb313b63dfe5be2140b0c05b3bc",
        sha1: "7a4aa07d1bedcc6bcf4b7f8856643492c191540d",
        sha256:
          "74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480",
      },
      dob: {
        date: "1993-07-20T09:44:18.674Z",
        age: 26,
      },
      registered: {
        date: "2002-05-21T10:59:49.966Z",
        age: 17,
      },
      phone: "011-962-7516",
      cell: "081-454-0666",
      id: {
        name: "PPS",
        value: "0390511T",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/75.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
      },
      nat: "IE",
    },
  ],
  info: {
    seed: "fea8be3e64777240",
    results: 1,
    page: 1,
    version: "1.3",
  },
};

// let's get funky by accessing more deeply nested values from the response
const {
  results: [
    {
      name: { last, first: nameFromResponse },
      location: { street, city },
      age,
    },
  ],
  results,
} = response;

// accessing values the old way can also be done the destructuring above and the code below are equivalent
// const nameFromResponse = response.results[0].name.first;
// const last = response.results[0].name.last;
// const age = response.results[0].age;
// const street = response.results[0].location.street;
// const city = response.results[0].location.city;
// const results = response.results

// console.log(last, nameFromResponse, street, city);

// be aware, in destructuring objects and values are still passed by reference!
// this can lead to hard to find / easy to miss bugs.

nameKey.first = "Some other name";
console.log(person.nameKey.first);

// changing the results array we got from the destructuring earlier, will also change the
// results[0] = null;
// console.log(response.results); // logs null... we changed the original reference as well!
// to avoid, do deep copy JSON.parse(JSON.stringify(obj)) // or use a library that does it

// const { name, lastname } = { name: "Max", lastname: "Strandberg" };
// const name = "Max";
// const lastname = "Strandberg";

let { info } = response;
info = "";

console.log(info.page);

let emailAddress;

// we can assign to emailAddress, an already existing variable...
// however {} if used on their own, denote code blocks, like in if(){} or function(){}
// therefore we need to put () around the destructuring assigment if we don't prefix it with
// let or const => which we have to do, because we want to overwrite the existing variable, not
// create a new one.
({
  results: [{ email: emailAddress }],
} = response);

console.log(emailAddress);

// a small algorithm to find the person with the minimum age from our response.results array
// initialize name to empty and minAge to Infinity
// (Infinity is the largest number possible in JS, a good default because the first age we encounter is guaranteed to be lower than it!)
let nameWithminAge = "";
let minAge = Infinity;

// let { name, age } => we can combine destructuring into a for of loop.
// in general, whenever we have a let/const declaration, we could also
// use destructuring there if the right hand side is an object or an array!
for (let { name, age } of response.results) {
  // compare current age to minAge
  if (age < minAge) {
    // if smaller, we found a new minAge, overwrite the value and continue the loop.
    nameWithminAge = name;
    minAge = age;
  }
}

// at the end, nameWithminAge should contain the person with the smallest age from the results
// and minAge should contain their ag

// destructure user object from response into a "brad" variable to use for the next example.
const {
  results: [brad],
} = response;

// using destructuring for function arguments
// a simple normal function: it takes in 3 args and logs a nice little description... simple, right?
function logAge(firstName, lastName, age) {
  console.log(`${firstName} ${lastName} is ${age} years old`);
}

// this code, while looking harmless, would break, because the order of arguments is wrong.
logAge(brad.age, brad.name.first, brad.name.last);

// this can be fixed by only using 1 argument, which is an object
// options => { firstName, lastName, age }
function logAge2(options) {
  // the commented out lines below show how one could handle default values, without using object
  // destructuring, const { firstName = "John", lastName = "Doe" } = options

  // if (options.firstName === undefined) {
  //   options.firstName = "John";
  // }
  // this does the same as the undefined check, but also checks for null because !null === true
  // if (!options.lastName) {
  //   options.lastName = "Doe";
  // }

  console.log(
    `${options.firstName} ${options.lastName} is ${options.age} years old`
  );
}

// now, when calling this function we need to provide the correct arguments with the names
// of the arguments
//
logAge2({ lastName: last, firstName, age });

// { firstName = "John" } => recap => this assigns a default value to firstName, in case the firstName key
// does not exist on the argument object put into logAge3 function when it is invoked

// with { lastName: internalLastName = "Doe" } you can also see renaming + default assignment in action.
// you can mix and match :)
function logAge3({
  firstName = "John",
  lastName: internalLastName = "Doe",
  age,
}) {
  // options => { firstName, lastName, age }
  console.log(`${firstName} ${internalLastName} is ${age} years old`);
}

// now what happens here?
// we create an object, anonymously in the lines below
// this object has 3 key/value pairs. firstName, lastName and age
// we take the values for those key value pairs from the "brad" variable
// the function logAge3 gets called with this object we just created
// now we jump up to the logAge3 function.
// the first argument to that function is the object we created.
// it get's destructured. firstName is there (assuming brad.name.first was defined), so we skip the default value
// firstName === brad.name.first
// then lastName gets read from the object, a variable named internalLastName get's created.
// again assuming that brad.name.last was defined, we skip the default
// internalLastName === brad.name.last
// the same happens with age, age === brad.age
// firstName, internalLastName and age exist in the functions scope, with the values from brad
// note that no "lastName" variable exists in the function logAge3's scope! we renamed :)
// lastly we call the console.log()

logAge3({
  firstName: brad.name.first,
  lastName: brad.name.last,
  age: brad.age,
});

const anotherPerson = {
  name: {
    first: "Rico",
    // last: "Trebeljahr",
  },
  address: {
    city: "Berlin",
  },
};

const {
  name: { last: lastName2 = "Hello" },
} = anotherPerson;
