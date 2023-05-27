import logo from "./logo.svg";
import "./App.css";
// this is ESModule Syntax
import { useState } from "react";
import { NamesComponent } from "./NamesComponent";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLogo = () => {
    setIsToggled(!isToggled);
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <NamesComponent
          defaultNames={["Olga", "Wiebke", "Lena", "Mauricio", "Yo Jia"]}
          firstNameInTheList="Rico"
        />

        {isToggled ? (
          <img src={logo} className="App-logo" alt="logo" />
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

        <NamesComponent />
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
