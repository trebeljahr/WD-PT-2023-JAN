import { useEffect, useState } from "react";
import "./App.css";
import studentsJSON from "./data.json";
import AllStudents from "./components/AllStudents";
import SearchStudent from "./components/SearchStudent";
import NewStudent from "./components/NewStudent";
import StudentDetail from "./components/StudentDetail";
import axios from "axios";
function App() {
  const [students, setStudents] = useState([]);
  const [studentDetail, setStudentDetail] = useState(null);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [counter, setCounter] = useState(0);

  //This will console.log every time
  console.log("every time!");

  //mounting phase useEffect
  useEffect(() => {
    console.log("this is the mounting phase");
    fetchCharacters();

    let intervalId = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    //clean up function to put in sync
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    console.log("Details changed");
  }, [showDetails]);

  const fetchCharacters = async () => {
    //this is with fetch
    // const response = await fetch("https://hp-api.onrender.com/api/characters");
    // const parsed = await response.json();
    //<======================   =====================>

    //this is with axios
    const { data } = await axios("https://hp-api.onrender.com/api/characters");
    console.log("here are the new characters", data);
    setStudents(data);
  };
  const handleShowForm = () => {
    console.log("show form", showForm);
    setShowForm(!showForm);
  };
  const handelExpelled = (studentId) => {
    console.log("hello you were expelled");
    const filteredStudents = students.filter((student) => {
      if (student.id !== studentId) {
        return true;
      }
    });
    setStudents(filteredStudents);
  };
  const handleSort = () => {
    //deep copy, super deep
    const copyArray = JSON.parse(JSON.stringify(students));
    //deep shallow copy, not a real deep
    //const copyArray2 = [...students]
    const sorted = copyArray.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
    // const sorted2 = copyArray.sort((a, b) => a.name - b.name);
    console.log("sorted", sorted);
    setStudents(sorted);
  };
  //This function is passed to the details button on the Student Card component to filter all the students and set a new state with the detailed info
  const studentDetailFunc = (studentId) => {
    let copyStudents = JSON.parse(JSON.stringify(students));
    const filteredChar = copyStudents.find((oneChar) => {
      if (oneChar.id === studentId) {
        return true;
      }
    });
    console.log("here is the detailed char", filteredChar);
    setStudentDetail(filteredChar);
    setShowDetails(true);
  };
  return (
    <div className="App">
      <h1>Hogwarts</h1>
      <i class="bi bi-bluetooth"></i>
      <h3>Counter:{counter}</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-bluetooth"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="m8.543 3.948 1.316 1.316L8.543 6.58V3.948Zm0 8.104 1.316-1.316L8.543 9.42v2.632Zm-1.41-4.043L4.275 5.133l.827-.827L7.377 6.58V1.128l4.137 4.136L8.787 8.01l2.745 2.745-4.136 4.137V9.42l-2.294 2.274-.827-.827L7.133 8.01ZM7.903 16c3.498 0 5.904-1.655 5.904-8.01 0-6.335-2.406-7.99-5.903-7.99C4.407 0 2 1.655 2 8.01 2 14.344 4.407 16 7.904 16Z"
        />
      </svg>
      <button onClick={handleSort}>Sort</button>
      <button onClick={handleShowForm}>Show Form</button>
      <SearchStudent search={search} setSearch={setSearch} />
      {showForm ? (
        <NewStudent allStudents={students} setStudents={setStudents} />
      ) : null}
      {showDetails ? <StudentDetail studentDetail={studentDetail} /> : null}
      <h2>Students:</h2>
      <AllStudents
        students={students}
        search={search}
        handelExpelled={handelExpelled}
        setShowDetails={setShowDetails}
        showDetails={showDetails}
        studentDetail={studentDetailFunc}
      />
    </div>
  );
}

export default App;
