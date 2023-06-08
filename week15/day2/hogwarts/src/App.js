import { useEffect, useState } from "react";
import "./App.css";
import AllStudents from "./components/AllStudents";
import StudentDetail from "./components/StudentDetail";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";

function App() {
  const [students, setStudents] = useState([]);
  const [studentDetail, setStudentDetail] = useState(null);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  //This will console.log every time
  console.log("every time!");

  //mounting phase useEffect
  useEffect(() => {
    console.log("this is the mounting phase");
    fetchCharacters();
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
      {/* <button onClick={handleSort}>Sort</button>
      <button onClick={handleShowForm}>Show Form</button>
      <SearchStudent search={search} setSearch={setSearch} />
      {showForm ? (
        <NewStudent allStudents={students} setStudents={setStudents} />
      ) : null}
      {showDetails ? <StudentDetail studentDetail={studentDetail} /> : null} */}
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <AllStudents
              students={students}
              search={search}
              handelExpelled={handelExpelled}
              setShowDetails={setShowDetails}
              showDetails={showDetails}
              studentDetail={studentDetailFunc}
            />
          }
        />
        {/* dynamic route */}
        <Route path="/details/:studentId" element={<StudentDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
