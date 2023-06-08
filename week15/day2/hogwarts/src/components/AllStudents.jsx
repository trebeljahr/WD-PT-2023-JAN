import StudentCard from "./StudentCard";

function AllStudents({
  students,
  search,
  handelExpelled,
  setShowDetails,
  showDetails,
  studentDetail,
}) {
  // console.log("all students page", students);
  return (
    <>
      <h1>Hogwarts</h1>
      <h2>Students:</h2>
      {students
        .filter((oneFilterStudent) => {
          if (
            oneFilterStudent.name.toLowerCase().includes(search.toLowerCase())
          ) {
            return true;
          }
        })
        .map((student) => {
          return (
            <StudentCard
              key={student.id}
              oneStudent={student}
              handelExpelled={handelExpelled}
              setShowDetails={setShowDetails}
              showDetails={showDetails}
              studentDetail={studentDetail}
            />
          );
        })}
    </>
  );
}

export default AllStudents;
