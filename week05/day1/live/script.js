// DOM => Document Object Model
console.log(document);
console.log(document.getElementById("my-heading"));

const heading1 = document.getElementById("my-heading");

// heading1.innerText = "Hello World";

const wrongList = document.getElementById("wrong-list");

// CRUD => Create, Read, Update, Delete
function appendAnother10Elements() {
  for (let i = 0; i < 10; i++) {
    // first create the element => Create
    const listElement = document.createElement("li");
    // we need to give it some content
    listElement.innerText = `Hello`;
    // console.log(i);
    // attach it to the DOM
    wrongList.appendChild(listElement);
  }
}

appendAnother10Elements();

const allTheListElements = document.getElementsByTagName("li");
console.log(allTheListElements);

const todoListElement = document.getElementById("todo-list");

// things like getElementsByTagName don't return actual arrays but HTMLCollections.
const onlyTodoListItems = todoListElement.getElementsByTagName("li");
console.log(onlyTodoListItems);

console.log(Object.getPrototypeOf(onlyTodoListItems));
console.log(Object.getPrototypeOf([...onlyTodoListItems]));

// onlyTodoListItems.map((item) => {
//   console.log(item);
// });

const listOfOnlyTheText = [...onlyTodoListItems].map((item) => {
  // Read attributes of HTML elements
  return item.innerText;
});

console.log(listOfOnlyTheText);

// for (let i = 0; i < onlyTodoListItems.length; i ++) {
// }

// How to Delete
// wrongList.remove();

const wrongElements = document.getElementsByClassName("wrong");
// HTMLCollection [li, li, li, li]

// spread operator => Sets, Maps, Objects, Arrays
[...wrongElements].forEach((elem) => {
  elem.remove();
});

console.log([..."abc"]);

// be aware that spreading only shallowly copies!
const obj1 = { key1: "A", key2: "B" };
console.log({ ...obj1 });

// todoListElement.style.backgroundColor = "yellow";
// todoListElement.style.color = "green";

// not valid variable name in JS
// background - color;

//z-index => zIndex

console.log(todoListElement.innerHTML);
console.log(todoListElement.innerText);

[...todoListElement.children].forEach((item) => {
  item.className = "checked";
});
