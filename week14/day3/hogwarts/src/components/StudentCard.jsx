function StudentCard({
  oneStudent,
  handelExpelled,
  setShowDetails,
  showDetails,
  studentDetail,
}) {
  return (
    <div className="student-card">
      <img
        src={oneStudent.image}
        alt={oneStudent.name}
        style={{ height: "100px" }}
      />
      <h3>{oneStudent.name}</h3>
      <h4>House: {oneStudent.house}</h4>
      <h5>Half-blood:{!oneStudent.wizard ? "🧍" : "🪄"}</h5>
      <h5>Actor: {oneStudent.actor}</h5>
      <button
        onClick={() => {
          handelExpelled(oneStudent.id);
        }}
      >
        Expell
      </button>
      <button
        onClick={() => {
          studentDetail(oneStudent.id);
        }}
      >
        Details
      </button>
    </div>
  );
}

export default StudentCard;
