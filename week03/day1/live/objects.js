// key - value store
const emptyObj = {};

const obj = {};

// person
const person = {
  name: "Shaun",
  lastName: "Reilly",
  age: 30,
  middleName: undefined,
  greet: () => {},
  //   greet: function () {},
  "last name": "Reilly",
  keyName: "hello we get this",

  companny: {
    name: "Ironhack",
    location: "Berlin",
  },
};

// dot notation
console.log(person.name);

console.log(person.lastName);

console.log(person["last name"]);

const weWantTheAge = false;
const keyName = weWantTheAge ? "age" : "lastName";

console.log(person["keyName"]);
console.log(person.keyName);

console.log(person[keyName]);

// console.log(person.company.name);

console.log(person);
// (undefined).name

console.log(person.company?.name);

// if (person && person.company && person.company.name) {
// }

const ironhackClasses = {
  web: {
    ta: "Shaun",
  },
  data: {
    ta: "",
  },
  ux: {
    ta: "",
  },
};

console.log(Object.keys(ironhackClasses));

// keep in mind that key in the next line is arbitrary. It might be pizza or pikachu as well!
Object.keys(ironhackClasses).forEach((key) => {
  console.log(ironhackClasses["data"]);
  if (ironhackClasses[key].ta === "Shaun") {
    console.log("Found the class he is in ", key);
  }
});

// const classesWithAnArray = [{type: "web", ta: "Shaun"}, {}, {}];

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

// const duration = "1 hour 44 mins";
const duration = googleApiResponse.rows[0].elements[0].duration.text;
const distance = googleApiResponse.rows[0].elements[0].distance.text;

console.log("It will take you " + duration + " for a trip of " + distance);

// CRUD

ironhackClasses.data.ta = "Rico";
ironhackClasses.web2 = { ta: "Joshua" };

// even though this works we shouldn't do it.
ironhackClasses.web3 = "blockchain technology";
console.log(ironhackClasses);

delete ironhackClasses.web3;
delete ironhackClasses.data.ta;

console.log(ironhackClasses);

// classes.web3 = null;
console.log(ironhackClasses.web3);

// 2 more ways of iterating over objects
Object.values(ironhackClasses).forEach((ironhackClass, pizza, array) => {
  console.log(ironhackClass);
});

Object.entries(ironhackClasses).forEach((entry) => {
  console.log(entry);
  const key = entry[0];
  const value = entry[1];
});

for (let key in ironhackClasses) {
  console.log(key);
}

// Object.values(classes).forEach((classObject) => {
//   console.log(classObject);
// });

const arrayOfValues = Object.values(ironhackClasses);

function ourForEach(array, fn) {
  for (let i = 0; i < array.length - 1; i++) {
    let elem = array[i];
    // console.log(classObj);
    fn(elem, i, array);
  }
}

ourForEach(arrayOfValues, (pizza) => {
  console.log(pizza);
});

// for (let i = 0; )

console.log(Object.values(ironhackClasses));
