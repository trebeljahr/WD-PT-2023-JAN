import { useState } from "react";
import { nanoid } from "nanoid";

function ListComponent({
  defaultElements = ["Mattia", "Max", "Rampriya", "Rohan", "Yvo"],
  firstElementInTheList = "Shaun",
}) {
  const [possibleElements, setPossibleElements] = useState(defaultElements);
  const [elements, setElements] = useState([
    { name: firstElementInTheList, id: nanoid() },
  ]);

  const addName = () => {
    if (possibleElements.length === 0) {
      console.log("No more Elements to add");
      return;
    }
    const newNameIndex = Math.floor(Math.random() * possibleElements.length);
    const newName = possibleElements[newNameIndex];

    const possibleElementsCopy = [...possibleElements];
    possibleElementsCopy.splice(newNameIndex, 1);
    setPossibleElements(possibleElementsCopy);

    setElements([...elements, { name: newName, id: nanoid() }]);
  };

  const deleteHandler = (event, idToDelete) => {
    console.log(event, idToDelete);
    setElements(elements.filter(({ id }) => id !== idToDelete));
  };

  return (
    <>
      <ul>
        {elements.map(({ id, name }) => {
          return (
            <li key={id}>
              <p>
                {name}
                <button
                  style={{ display: "inline" }}
                  onClick={(event) => {
                    deleteHandler(event, id);
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

export { ListComponent };
export default ListComponent;

// export object => { ListComponent, default }
