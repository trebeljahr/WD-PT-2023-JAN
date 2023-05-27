import logo from "./logo.svg";
import "./App.css";
// this is ESModule Syntax
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const [count, setCount] = useState(0);

  const [possibleNames, setPossibleNames] = useState([
    "Olga",
    "Wiebke",
    "Lena",
    "Mauricio",
    "Yo Jia",
  ]);

  // const arraysInObj = { a: [], b: [] };
  // const objInArr = [
  //   { name: "Shaun", hobbies: [{ name: "Chess", yearsSpentOnIt: 10 }] },
  //   { name: "Rico" },
  // ];

  const [names, setNames] = useState([{ name: "Shaun", id: nanoid() }]);

  // this is the bad way to do it
  // let isTurnedOn = false;

  const toggleLogo = () => {
    // isTurnedOn = !isTurnedOn;
    setIsToggled(!isToggled);
  };

  const increaseCount = () => {
    setCount(count + 1);

    // count++
    // count += 1
    // count = count + 1
  };

  const addName = () => {
    if (possibleNames.length === 0) {
      console.log("No more names to add");
      return;
    }
    const newNameIndex = Math.floor(Math.random() * possibleNames.length);
    const newName = possibleNames[newNameIndex];

    const possibleNamesCopy = [...possibleNames];
    possibleNamesCopy.splice(newNameIndex, 1);
    console.log(possibleNamesCopy);
    setPossibleNames(possibleNamesCopy);

    setNames([...names, { name: newName, id: nanoid() }]);
  };

  const deleteHandler = (idToDelete) => {
    console.log("We want to delete: ", idToDelete);
    // setNames(
    //   names.filter((e) => {
    //     return e.id !== idToDelete;
    //   })
    // );

    setNames(names.filter(({ id }) => id !== idToDelete));
    // setNames(names.filter((e) => e.id !== idToDelete));
    // setNames(names.filter((name) => name.id !== idToDelete));
    // setNames(names.filter((pizza) => pizza.id !== idToDelete));

    // const byIdToDelete = (pizza) => pizza.id !== idToDelete;
    // setNames(names.filter(byIdToDelete));
  };

  if (isToggled) {
    console.log("hello");
    // return (
    //   <>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <button onClick={toggleLogo}>Toggle</button>
    //   </>
    // );
  }

  // const someCondition = true;
  // let var1;
  // if (someCondition) {
  //   var1 = 1;
  // } else {
  //   var1 = 2;
  // }

  // let var2 = someCondition ? 1 : 2;

  // && ||

  const [override, setOverride] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {(isToggled && possibleNames.length === 0) || override ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : null}
        <button onClick={toggleLogo}>Toggle</button>

        <button onClick={() => setOverride(!override)}>Toggle Override</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{count}</p>
        <button onClick={increaseCount}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>

        <ul>
          {names.map(({ id, name }) => {
            return (
              <li key={id}>
                <p>
                  {name}
                  <button
                    style={{ display: "inline" }}
                    onClick={() => {
                      deleteHandler(id);
                    }}
                  >
                    -
                  </button>
                </p>
              </li>
            );
          })}
        </ul>

        {/* <ul>
          {names.map((nameObject) => {
            return <li key={nameObject.id}>{nameObject.name}</li>;
          })}
        </ul> */}
        <button onClick={addName}>Add a new name to the names!</button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
