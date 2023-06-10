import { useState } from "react";

function NewStudent({ allStudents, setStudents }) {
  const [name, setName] = useState("");
  const [half, setHalf] = useState(false);
  const [img, setImg] = useState("");
  const handleImage = (e) => {
    setImg(e.target.value);
  };

  function handleNewStudent(event) {
    //stops page from refreshing when we submit
    event.preventDefault();
    const newStudent = {
      house: "Hufflepuff",
      name,
      muggle: half,
      img,
    };
    console.log("submitted", newStudent);
    setStudents([newStudent, ...allStudents]);
    setName("");
    setHalf(false);
    setImg("");
  }

  return (
    <div>
      <h4>Enroll a new student</h4>
      <form onSubmit={handleNewStudent}>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="checkbox"
          onChange={() => {
            setHalf(!half);
          }}
        />
        <input type="text" value={img} onChange={handleImage} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewStudent;
