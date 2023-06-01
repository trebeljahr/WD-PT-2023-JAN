import StudentCard from "./StudentCard";

function AllStudents({ students, search, handelExpelled }) {
  console.log("all students page", students);

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
              key={student.name}
              oneStudent={student}
              handelExpelled={handelExpelled}
            />
          );
        })}
    </>
  );
}

export default AllStudents;
