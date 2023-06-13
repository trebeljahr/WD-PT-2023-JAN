import StudentCard from "./StudentCard";

function AllStudents({ students, search }) {
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
          return <StudentCard key={student.name} oneStudent={student} />;
        })}
    </>
  );
}

export default AllStudents;
