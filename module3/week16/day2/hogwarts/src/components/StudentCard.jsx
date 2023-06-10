function StudentCard({ oneStudent, handelExpelled }) {
  return (
    <div className="student-card">
      <img
        src={oneStudent.img}
        alt={oneStudent.name}
        style={{ height: "100px" }}
      />
      <h3>{oneStudent.name}</h3>
      <h5>Half-blood:{oneStudent.muggle ? "🧍" : "🪄"}</h5>
      <button
        onClick={() => {
          handelExpelled(oneStudent.name);
        }}
      >
        Expell
      </button>
    </div>
  );
}

export default StudentCard;
