import Student from "./Student";

function House({ studentsArr }) {
  //first way
  // House(props){}
  // <h1>{props.students}</h1>
  //second way
  // House(props){}
  // const student = props.students[0]
  // <h1>{props.students}</h1>
  console.log(studentsArr);
  return (
    <>
      <h1>House {studentsArr[0].house}</h1>
      {studentsArr.map((eachStudent) => {
        return (
          <div key={eachStudent.name}>
            <Student oneStudent={eachStudent} />
          </div>
        );
      })}
    </>
  );
}

export default House;
