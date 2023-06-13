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
