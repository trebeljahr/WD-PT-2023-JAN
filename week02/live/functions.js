//simple function to greet someone ES-5
let Name = "something";
function greeting(name) {
  if (2 + 2 === 4) {
    return `Hello ${name}`;
  }
  console.log("return stops the function");
}
console.log(greeting("Silvia"));

//Greeting with arrow function syntax
let greetingArrow = (name) => {
  return `Hello from the arrow function ${name}`;
};
console.log(greetingArrow("Yvo"));
console.log(greetingArrow("Lena"));
console.log(greetingArrow("Yo-Jia"));

greetingArrow = () => {
  return "testing reassigning a function";
};
console.log("this is the test", greetingArrow());
