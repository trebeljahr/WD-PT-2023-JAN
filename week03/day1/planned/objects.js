// unordered collection of any (keyed) values
const emptyObj = {};

// property: value, key: value

const garfield = {
  name: "Garfield",
  height: 22,
  width: "30 kg",
  hobbies: ["eating", "eating", "eating", "sleeping"],
  address: {
    street: "Maple Street",
    houseNumber: 711,
  },
};

const tom = {
  name: "Tom",
  height: 20,
  weight: "2 kg",
  hobbies: ["running", "eating", "sleeping", "catching Jerry"],
  friends: [garfield],
};
// accessing the values
// <name of the object>.<key> -> dot notation
console.log(tom.name);
// accessing a nested property
// here an array
console.log(tom.hobbies[0]);
// or an object
console.log(garfield.address.houseNumber);
// you can even have more nesting than that!
console.log(tom.friends[0].address.street);

// practice

const googleApiResponse = {
  destination_addresses: ["Philadelphia, PA, USA"],
  origin_addresses: ["New York, NY, USA"],
  rows: [
    {
      elements: [
        {
          distance: {
            text: "94.6 mi",
            value: 152193,
          },
          duration: {
            text: "1 hour 44 mins",
            value: 6227,
          },
          status: "OK",
        },
      ],
    },
  ],
  status: "OK",
};

// exercise - get the duration text and concatenate it with the distance text!
const duration = googleApiResponse.rows[0].elements[0].duration.text;
const distance = googleApiResponse.rows[0].elements[0].distance.text;
console.log("It will take you " + duration + " for a trip of " + distance);

// we want to use 'someKey' - a variable to access that value -> bracket notation
const someKey = "height";
console.log(tom[someKey]);

// deleting a property in an object
delete tom.height;
console.log(tom);

// checking if a property exists

console.log("This shouldn't exist", tom.someKey);
// check if name property exists in the cat object
if ("name" in tom) {
  console.log("it exists");
} else {
  console.log("it does not exist");
}

// changing the value of a property
tom.height = 30;

// add a property
tom.weight = 8;
console.log(tom);

// iterating over an object
const person = {
  name: "Alice",
  age: 33,
};

// for in loop gives us the keys
for (let key in person) {
  console.log(key);
  console.log(person[key]);
}

// get all the values of an object -> Object.values(<name of the object>)

console.log(Object.values(person));
// get all the keys of an object -> Object.keys(<name of the object>)
console.log(Object.keys(person));

// chaining to a forEach
Object.keys(person).forEach(function (key) {
  console.log(key);
});

console.log(Object.entries(person)); // ->  [ [ 'name', 'Alice' ], [ 'age', 33 ] ]

const persons = [
  {
    name: "Harry",
    "last name": "Potter",
  },
  {
    name: "Draco",
    // if the key should contain a space or a -
    // it has to be a string
    "middle-name": "Lucius",
    "last name": "Malfoy",
  },
];

// iterate over persons and log every name
for (let person of persons) {
  // console.log(person)
  console.log(person.name);
  // if the key contains a space we have to use
  // the brackets as well
  if (person["middle-name"]) console.log(person["middle-name"]);
  console.log(person["last name"]);
}
