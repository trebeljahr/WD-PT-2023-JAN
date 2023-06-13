// destructuring of arrays
const array = [1, [1, 2, 3, [1, 2, 3]], 2, 3, [1, 2, 3], 5];
// array[0];
// array[1][1];

const [one, [...two], three, , pizza] = array;

// keep in mind that this will mutate!
two.push(4);
// whereas this won't
// const twoCopy = JSON.parse(JSON.stringify(two));
// twoCopy.push(4);

console.log(two);
console.log(array);
console.log(one, two, three, pizza);

function returnsTuple() {
  const a = "Hello";
  const b = "Harry Potter";
  return [a, b];
  //   return a + b;
}

const [a, b] = returnsTuple();
console.log("a: " + a, "b: " + b);

const [, secondElement, ...rest] = array;
console.log(rest);

// python has this JS doesn't :(
// array[-1];

// recap for object access
const object = {
  c: "Hello",
  d: "World",
  pokemon: { name: "PIKACHU", hp: 100 },
};

// const pokemon2 = object.pokemon;
// const nameOfPokemon = object.pokemon.name;
// object["pokemon"]["name"];
// const keyA = "a";
// object[keyA];
// object.keyA;

// object destructuring
const { c, pokemon } = object;
console.log(c, pokemon);

const {
  pokemon: { name: harryPotter, hp },
} = object;

// const harryPotter = object.pokemon.name;
// const hp = object.pokemon.hp;

console.log(harryPotter);
console.log(hp);

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

const latitude = response.results[0].location.coordinates.latitude;
const longitude = response.results[0].location.coordinates.longitude;

const {
  info: { seed },
  results: [
    {
      location: {
        coordinates: { latitude: lat, longitude: long },
      },
      location,
    },
  ],
} = response;

console.log(location);
// const {
//   results: [mrGibson],
// } = response;

console.log(latitude, longitude);
console.log(lat, long, seed);

const mrGibson = response.results[0];
const {
  name,
  location: { coordinates },
} = mrGibson;

function destructuringObjectArgument({ name = "John Doe", age = 30 } = {}) {
  console.log(name, age);
}

function withoutDestructuring(obj = {}) {
  let name = obj.name;
  if (name === undefined) {
    name = "John Doe";
  }
  let age = obj.age;
  if (age === undefined) {
    age = 30;
  }
  console.log(name, age);
}

destructuringObjectArgument(mrGibson);
destructuringObjectArgument({ name: "Albus Dumbledore", age: 120 });
destructuringObjectArgument({ age: 36 });
destructuringObjectArgument({});
destructuringObjectArgument();

// in here throws error at runtime, but in TS would throw error at compile time
// destructuringObjectArgument([]);

function operatingOnArrays(inputArray = []) {
  inputArray.forEach((elem) => console.log(elem));
}

operatingOnArrays();
