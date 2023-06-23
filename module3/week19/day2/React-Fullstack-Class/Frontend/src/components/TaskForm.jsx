import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TaskForm = ({ onSubmit }) => {
  const [taskDuration, setTaskDuration] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let newTask;
      newTask = {
        owner: "me",
        status: "not done",
        taskDuration: taskDuration,
        taskName: taskName,
        taskDescription: taskDescription,
      };
      onSubmit();
    } catch (err) {
      console.log(err);
    } finally {
      navigate("/");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="taskName"></label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="taskDuration"></label>
          <input
            type="text"
            id="taskDuration"
            value={taskDuration}
            onChange={(e) => setTaskDuration(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="taskDescription"></label>
          <input
            type="text"
            id="taskDescription"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
