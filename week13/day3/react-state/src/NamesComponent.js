import { useState } from "react";
import { nanoid } from "nanoid";

export function NamesComponent({
  defaultNames = ["Mattia", "Max", "Rampriya", "Rohan", "Yvo"],
  firstNameInTheList = "Shaun",
}) {
  const [possibleNames, setPossibleNames] = useState(defaultNames);
  const [names, setNames] = useState([
    { name: firstNameInTheList, id: nanoid() },
  ]);
  // export function NamesComponent(props) {
  //   const [possibleNames, setPossibleNames] = useState(props.defaultNames);
  //   const [names, setNames] = useState([
  //     { name: props.firstNameInTheList, id: nanoid() },
  //   ]);

  const addName = () => {
    if (possibleNames.length === 0) {
      console.log("No more names to add");
      return;
    }
    const newNameIndex = Math.floor(Math.random() * possibleNames.length);
    const newName = possibleNames[newNameIndex];

    const possibleNamesCopy = [...possibleNames];
    possibleNamesCopy.splice(newNameIndex, 1);
    setPossibleNames(possibleNamesCopy);

    setNames([...names, { name: newName, id: nanoid() }]);
  };

  const deleteHandler = (idToDelete) => {
    setNames(names.filter(({ id }) => id !== idToDelete));
  };

  return (
    <>
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
      <button onClick={addName}>Add a new name to the names!</button>
    </>
  );
}
