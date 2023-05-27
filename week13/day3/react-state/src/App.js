import logoajlsfdkjsadlkfj from "./logo.svg";
import "./App.css";
// this is ESModule Syntax
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { ListComponent as SomeOtherWeirdName } from "./NamesComponent";

// import Lksadjflsadkjfkl from "./NamesComponent";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const [count, setCount] = React.useState(0);

  const toggleLogo = () => {
    setIsToggled(!isToggled);
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <SomeOtherWeirdName
          defaultNames={["Olga", "Wiebke", "Lena", "Mauricio", "Yo Jia"]}
          firstNameInTheList="Rico"
        />

        {isToggled ? (
          <img src={logoajlsfdkjsadlkfj} className="App-logo" alt="logo" />
        ) : (
          <h1>Hello there!</h1>
        )}
        <button onClick={toggleLogo}>Toggle</button>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{count}</p>
        <button onClick={increaseCount}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>

        <SomeOtherWeirdName />
        <SomeOtherWeirdName
          defaultElements={["Star Wars", "Harry Potter", "Lord of the Rings"]}
          firstElementInTheList="Avatar"
        />

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
