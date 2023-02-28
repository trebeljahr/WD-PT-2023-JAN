// oop - object oriented programming
const spiderMan = {
  firstName: "Peter",
  lastName: "Parker",
  identity: "Spider Man",
  // method
  revealSecretIdentity() {
    console.log("I am " + this.identity);
  },
  //   revealSecretIdentity: () => {},
  //   revealSecretIdentity: function() {}

  sayHello: function () {
    console.log(`Hello there I am ${this.firstName} ${this.lastName}`);
    // methods can even call other methods!
    this.sayBye();
  },
  sayBye: function () {
    console.log("Gotta go, I need to save New York!");
  },
};

const superMan = {
  firstName: "Clark",
  lastName: "Kent",
  identity: "super man",
  revealSecretIdentity() {
    console.log("I am " + this.identity);
  },
  //   revealSecretIdentity: () => {},
  //   revealSecretIdentity: function() {}

  sayHello: function () {
    console.log(`Hello there I am ${this.firstName} ${this.lastName}`);
    // methods can even call other methods!
    this.sayBye();
  },
  sayBye: function () {
    console.log("Gotta go, I need to save New York!");
  },
};

// console.log(Object.values(spiderMan));

spiderMan.revealSecretIdentity;
spiderMan.sayHello();
// console.log()

firstName = "Rico";
// var lastName = "Trebeljahr";

const sayHello = function () {
  console.log(`Hello there I am ${this.firstName} ${this.lastName}`);
  // methods can even call other methods!
  // this.sayBye();
  //   console.log(this.console);
};

// apply, call, bind
sayHello();

// prototype chains

class Superhero {
  constructor(options) {
    this.firstName = options.firstName;
    this.lastName = options.lastName;
    this.identity = options.identity;

    // this.revealSecretIdentity = function() {}
  }

  revealSecretIdentity() {
    console.log("I am " + this.identity);
  }

  sayHello() {
    console.log(`Hello there I am ${this.firstName} ${this.lastName}`);
    // methods can even call other methods!
    this.sayBye();
  }

  sayBye() {
    console.log("Gotta go, I need to save New York!");
  }
}

// class Geometry {
//   static add(a, b) {
//     return a + b;
//   }
// }
// Geometry.add(4, 5);

// Object.values();
// Object.entries();
// new Object();

const batman = new Superhero({
  firstName: "Bruce",
  lastName: "Wayne",
  identity: "Batman",
});

console.log(batman);

batman.revealSecretIdentity();

const supermanAgain = new Superhero({
  firstName: "Clark",
  lastName: "Kent",
  identity: "Superman",
});

supermanAgain.sayHello();

const spidermanAgain = new Superhero({
  firstName: "Peter",
  lastName: "Parker",
  identity: "Spiderman",
});

class SuperheroWithoutOptions {
  constructor(firstName, lastName, identity) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.identity = identity;

    // this.revealSecretIdentity = function() {}
  }

  revealSecretIdentity() {
    console.log("I am " + this.identity);
  }

  sayHello() {
    console.log(`Hello there I am ${this.firstName} ${this.lastName}`);
    // methods can even call other methods!
    this.sayBye();
  }

  sayBye() {
    console.log("Gotta go, I need to save New York!");
  }
}

const spiderMan2 = new SuperheroWithoutOptions("Peter", "Parker", "Spiderman");

// new SuperheroWithoutOptions(0, 1, 2)

// function createSuperhero(firstName, lastName, identity) {
//   return {
//     firstName,
//     lastName,
//     identity,
//   };
// }

// inheritance

class Rectangle {
  constructor(a, b) {
    if (!a && !b) {
      throw TypeError("Please provide some numbers!");
    }

    this.a = a;

    this.b = b || a;
  }

  perimeter() {
    return this.a * 2 + this.b * 2;
  }

  info() {
    console.log(
      "This is a rectangle with sidelengths a:",
      this.a,
      " and b:",
      this.b
    );
  }
}

const rect1 = new Rectangle(10, 20);
rect1.info();

class Square extends Rectangle {
  constructor(a) {
    super(a, a);
  }

  info() {
    super.info();
    console.log("This is also a square btw.");
  }

  info2() {
    const perim = super.perimeter();
    console.log(
      "This is something only squares can do! This is my perimeter: ",
      perim
    );
  }
}

const square1 = new Square(10);
square1.info();

square1.info2();

class A extends Rectangle {
  info() {
    console.log("This a", this.a, this.b);
  }
}

const a = new A(10, 20);
a.info();
// rect1.info2();

// const newObject = Object.create(square1);
