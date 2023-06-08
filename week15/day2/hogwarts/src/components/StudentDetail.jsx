import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function StudentDetail() {
  const [studentDetail, setStudentDetail] = useState(null);
  const paramsObj = useParams();
  const { studentId } = useParams();
  const [searchQuery, setSearchQuery] = useSearchParams();
  const studentNameQuery = searchQuery.get("name");
  const studentGender = searchQuery.get("gender");
  console.log("here is our query", studentNameQuery, "gender", studentGender);
  useEffect(() => {
    const fetchOneStudent = async () => {
      const { data } = await axios(
        `https://hp-api.onrender.com/api/character/${studentId}`
      );
      //this is without template literals
      // const res = await axios(
      //   "https://hp-api.onrender.com/api/character/" + studentId
      // );
      console.log("one student info", data);
      setStudentDetail(data[0]);
    };
    fetchOneStudent();
  }, [studentId]);
  // nice hack to make react wait for information
  if (!studentDetail) {
    return <p>Loading...</p>;
  }
  return (
    <div style={{ border: "2px solid black", width: "60%" }}>
      <h1>student detail</h1>
      <img
        src={studentDetail.image}
        alt={studentDetail.name}
        style={{ height: "500px" }}
      />
      <h3>{studentDetail.name}</h3>
    </div>
  );
}

export default StudentDetail;
