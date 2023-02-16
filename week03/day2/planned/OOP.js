// oop - object oriented programming
const spiderMan = {
  firstName: "Peter",
  lastName: "Parker",
  revealSecretIdentity() {
    console.log("🕸️  I am spider man 🕸️");
  },
  sayHello: function () {
    console.log(`Hello there I am ${this.firstName} ${this.lastName}`);
    // methods can even call other methods!
    this.sayBye();
  },
  sayBye: function () {
    console.log("Gotta go, I need to save New York!");
  },
};

console.log(spiderMan);
spiderMan.revealSecretIdentity();
spiderMan.sayHello();

console.log("typeof console:", typeof console);
console.log("What is console?", console);
console.log("what is console.log?", console.log);

const myConsole = {
  log() {
    // only that this code would handle displaying something in the console for the real thing!
    console.log(...arguments);
  },
  // and it has many many more methods as well as we have seen from log above
};

myConsole.log("hello from my own console!");

function summonPatronus() {
  const vowels = ["a", "o", "i", "e", "u"];
  const firstLetter = this.patronusForm[0].toLowerCase();
  console.log(
    `${this.name} summons their patronus and a blue white ghost in the form of 
    ${vowels.includes(firstLetter) ? "an" : "a"} ${this.patronusForm} appears 
    to scare away the dementors`
  );
}

const harry = {
  name: "Harry Potter",
  patronusForm: "Stag",
  summonPatronus,
};

const hermione = {
  name: "Hermione Granger",
  patronusForm: "Otter",
  summonPatronus,
};

harry.summonPatronus();
hermione.summonPatronus();

// what if we want yet another person - say Ron?
// hint: his patronus is a Jack Russell Terrier
const ron = {
  name: "Ron Weasley",
  patronusForm: "Jack Russell Terrier",
  summonPatronus,
};

ron.summonPatronus();

// this kinda works... but is quite tedious to do -
// we rewrite the name, the patronusForm etc. each and every time
// especially if we were to add more data to each object this would quickly become unmanageable

// enter -> classes!

class Wizard {
  constructor(name, patronusForm) {
    this.name = name;
    this.patronusForm = patronusForm;
  }
  summonPatronus() {
    console.log(
      `${
        this.name
      } summons their patronus and a blue white ghost in the form of ${
        ["a", "o", "i", "e", "u"].includes(this.patronusForm[0].toLowerCase())
          ? "an"
          : "a"
      } ${this.patronusForm} appears to scare away the dementors`
    );
  }
}

const dumbledore = new Wizard("Albus Dumbledore", "Phoenix");
dumbledore.summonPatronus;

// now if we would like to add more things to the class that would be
// super easy since we don't have to update all the separate instances.
// change name to store firstName and lastName separately?
// what about storing the house they belong to at Hogwarts?

// ok enough of the Harry Potter example.
// let's have fun with some shapes!
class Shape {
  constructor(shapeName, corners, edges) {
    this.shapeName = shapeName;
    this.corners = corners;
    this.edges = edges;
  }
  info() {
    console.log(
      `This is a ${this.shapeName}. It has ${this.corners} corners and ${this.edges} edges.`
    );
  }
}

class Rectangle extends Shape {
  constructor(a, b) {
    super("Rectangle", 4, 4);
    this.a = a;
    this.b = b;
  }
  // let's add an area method
  // what do we need for it? - side lengths!
  area() {
    return this.a * this.b;
  }

  // let's add a perimeter method as well
  // perimeter() {
  //   return this.a * 2 + this.b * 2
  // }

  // use getter
  get perimeter() {
    return this.a * 2 + this.b * 2;
  }

  logThePerimeter() {
    // see - now we don't have to call it anymore
    console.log("The perimeter is: ", this.perimeter);
  }
  info() {
    super.info();
    console.log("It has an area of ", this.area());
  }
}

const smallRectangle = new Rectangle(10, 5);
smallRectangle.info();
smallRectangle.logThePerimeter();
console.log(smallRectangle.area());

// let's write a square!
class Square extends Rectangle {
  constructor(a) {
    super(a, a);
    // overwriting "Rectangle"!
    this.shapeName = "Square";
  }
  info() {
    super.info();
    console.log("And all sides are equally long");
  }
}

const square = new Square(10);
square.info();
square.logThePerimeter();
console.log("Square area is:", square.area());

class CreditCard {
  #number;
  #pin;
  constructor(number, pin) {
    this.#number = number;
    this.#pin = pin;
  }

  get number() {
    return this.#number
      .split(" ")
      .map((realNumbers, index) => {
        if (index === 1 || index === 2) {
          return "****";
        }
        return realNumbers;
      })
      .join(" ");
  }

  authenticate(pin) {
    if (this.#pin === pin) {
      return `Your number is ${this.#number}`;
    } else {
      return "Wrong PIN! Is this even your card? - " + this.number;
    }
  }
}

const myCard = new CreditCard("1234 5678 9876 5432", "1234");
console.log(myCard.authenticate("4321"));
console.log(myCard.authenticate("1234"));

// ofc. this is not secure at all.
function randomDigit() {
  return "" + Math.floor(Math.random() * 10);
}

function randomDigitSequence(length) {
  let out = "";
  for (let i = 0; i < length; i++) {
    out += randomDigit();
  }
  return out;
}

console.log("Random Digit:", randomDigit());
console.log("Random Sequence:", randomDigitSequence(4));

function randomCardNumber() {
  const r4 = () => randomDigitSequence(4);
  let number = r4() + " " + r4() + " " + r4() + " " + r4();
  return number;
}
function randomPin() {
  return randomDigitSequence(4);
}

console.log(randomCardNumber());

const somebodysCard = new CreditCard(randomCardNumber(), randomPin());
somebodysCard.authenticate("1234");
// brute force it?

function createDigitPermutations() {
  const out = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        for (let h = 0; h < 10; h++) {
          out.push("" + i + j + k + h);
        }
      }
    }
  }
  return out;
}

const time = new Date();
const allCombinations = createDigitPermutations();
console.log("How many combinations are there exactly?", allCombinations.length);

const correctPin = allCombinations.find((combination) => {
  const authResult = somebodysCard.authenticate(combination);
  return !authResult.includes("Wrong PIN!");
});

console.log(
  "This pin works",
  correctPin,
  somebodysCard.authenticate(correctPin)
);
console.log("It took us: ", new Date() - time, "ms to find it :gasp:");
