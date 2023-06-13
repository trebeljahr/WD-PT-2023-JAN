// dom manipulation
// document object model
console.log(document);

const todoList = document.getElementById("todo-list");
console.log(todoList);

const longListContainer = document.getElementById("long-list-container");
for (let i = 1; i <= 10; i++) {
  const element = document.createElement("li");
  element.innerText = i;
  longListContainer.appendChild(element);
}

// we could get allListItems like this
const allListItems = document.getElementsByTagName("li");

// but we only want those in todo!
const todoListItems = todoList.getElementsByTagName("li");

// another way would be to use.children -> maybe a problem - we would get non <li> tags as well
const childrenOnTodoList = todoList.children;

// both of them however return an HTMLCollection
// this is not an array but can be treated as one
console.log(todoListItems[0]);

// however not quite - array methods like .map, etc. are not defined !gasp!
console.log("todoList.map?", todoListItems.map);
console.log("array.map", [].map);

// so we can/have to convert it, one neat way to do it is the ... spread operator
const spread = [...todoListItems];
// another way of achieving the same result is using Array.from()
const arrayFrom = Array.from(todoListItems);

console.log(
  "Observe that the prototype does not have array methods!",
  Object.getPrototypeOf(todoListItems)
);
console.log(
  "However after conversion it does!",
  Object.getPrototypeOf(spread),
  Object.getPrototypeOf(arrayFrom)
);

// and now we do have .map on them!
console.log("todoListAsArray.map", spread.map);
console.log("todoListArrayFrom.map", arrayFrom.map);

// read the information / text in between the tags
// innerText / textContent
// turn all todolist items to uppercase
for (let item of todoListItems) {
  //   console.log(item);
  item.innerText = item.innerText.toUpperCase();
}

// let's delete the elements with class ".wrong"
const wrongElements = document.getElementsByClassName("wrong");
console.log(wrongElements);
// first try the wrong approach
// wrongElements.forEach((element) => element.remove())

// what's wrong? how could we correct it?
[...wrongElements].forEach((element) => element.remove());

// this returns an HTML collection as well
const container = document.getElementsByClassName("todo-container");
console.log(container);
console.log(container[0]);

// use querySelector - querySelectorAll
const sameContainerButDifferent = document.querySelector(".todo-container");
console.log(sameContainerButDifferent);

// use CSS query
// querySelectorAll returns a 'NodeList'
const listItems = document.querySelectorAll("#todo-list li");
console.log(listItems);
// no .map, .filter etc. on this one either!
console.log("listItems.map", listItems.map);
// this is a NodeList... weirdly enough it also has a .forEach implemented
console.log("listItems prototype", Object.getPrototypeOf(listItems));
// we can use forEach on a node list
listItems.forEach(function (node) {
  console.log(node);
});
// but something like filter still doesn't work without conversion

// how could we convert it?

// let's select the first item for selector -> #todo-list li
const firstItem = document.querySelector("#todo-list li");
console.log(firstItem);

// we can change the css via .style
firstItem.style.backgroundColor = "red";

// let's change it back to green!
firstItem.style.backgroundColor = "green";

// if the property we want to change is a variable we use the bracket object notation
const prop = "backgroundColor";
firstItem.style[prop] = "red";
console.log(Object.getPrototypeOf(firstItem.style));

const classList = firstItem.classList;
console.log(classList);
firstItem.classList.add("checked");
// firstItem.classList.remove("checked");

// toggles the class checked
firstItem.classList.toggle("checked");
firstItem.classList.toggle("checked");
console.log(classList);

// we can set any attribute on an element
firstItem.setAttribute("id", "first-item");

// we need a function to add new items to not
// repeat our code if we want to make the button work on every click,
// over and over and over again

// how could we write this function to add a todo item?
function addTodoItem() {
  // let's start by selecting the todoInput element and getting the value for the todo
  const todoInput = document.getElementById("todo-item-input");

  // inspect the todoInput value - guesses?
  console.log(todoInput.value);

  // then find the container - does it have an id/class/something? how do we get it then?
  const todoContainer = document.getElementById("todo-list");

  // create new li element
  const newListItem = document.createElement("li");

  // change text to match the value from input
  newListItem.innerText = todoInput.value;
  // how could we make it upperCase to match the rest of our items?
  newListItem.innerText = todoInput.value.toUpperCase();
  // append node to the container
  todoContainer.appendChild(newListItem);
}

// don't forget to call function
addTodoItem();

// but we want that to happen when the button is clicked!
// so let's get the todo button and make it actually work!
const todoButton = document.getElementById("add-todo");

// now what to do with it? eventListeners!
todoButton.addEventListener("click", (event) => {
  console.log(event);
  // why?
  event.preventDefault();
  addTodoItem();
});

// let's fix the broken image
const brokenImage = document.querySelector("#broken-image");
brokenImage.setAttribute(
  "src",
  `https://source.unsplash.com/QrRSm-QbjW0/${window.innerWidth}x${
    window.innerHeight * 2
  }`
);

const randomImgContainer = document.createElement("div");
const randomImg = document.createElement("img");
randomImg.src = `https://source.unsplash.com/random/300x300/?mountain`;
randomImgContainer.appendChild(randomImg);
document.body.appendChild(randomImgContainer);

setInterval(() => {
  randomImg.src = "https://source.unsplash.com/random/300x300/?mountain";
}, 500);
// innerHTML - executes the string as html
const myDiv = document.createElement("div");
myDiv.innerHTML = "<h1>🙈</h1>";
document.body.appendChild(myDiv);

// we want to add a heading
// first we create that heading
const heading = document.createElement("h1");
heading.innerText = "My Todo List";
console.log(heading);

// to insert it we use 'insertBefore' on the parent element
// how could we get the parent element by it's class .todo-container?
const parentElement = document.querySelector(".todo-container");

// how could we get the list inside it by it's class #todo-list?
const list = document.querySelector("#todo-list");
console.log(list);
console.log(parentElement);
// inserting into parent element, before list
parentElement.insertBefore(heading, list);

const chuckNorrisHeading = document.createElement("h1");
chuckNorrisHeading.innerText = "Random Chuck Norris Joke:";
document.body.appendChild(chuckNorrisHeading);

const chuckNorrisJoke = document.createElement("div");
document.body.appendChild(chuckNorrisJoke);

const newJokeButton = document.createElement("button");
newJokeButton.innerText = "Get another one!";
document.body.appendChild(newJokeButton);
newJokeButton.addEventListener("click", fetchNewJoke);

fetchNewJoke();

function fetchNewJoke() {
  fetch("https://api.chucknorris.io/jokes/random", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);

      chuckNorrisJoke.innerText = result.value;
    })
    .catch((err) => {
      console.error(err);
    });
}
