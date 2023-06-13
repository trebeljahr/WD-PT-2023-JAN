function Student({ oneStudent }) {
  console.log("one student", oneStudent);
  return (
    <div className="student-card">
      <img src={oneStudent.img} alt="student" style={{ height: "100px" }} />
      <h3>Student: {oneStudent.name}</h3>
    </div>
  );
}

export default Student;
