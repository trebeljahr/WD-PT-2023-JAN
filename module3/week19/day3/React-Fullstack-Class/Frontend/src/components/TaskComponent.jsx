import React from "react";

const TaskComponent = ({ task }) => {
  return (
    <div className=" mb-4 bg-slate-500 rounded-lg w-1/2 ">
      <div>
        <h3 className=" text-red-600">{task.name}</h3>
        <p>Task Owner: {task.owner}</p>
        <p>Task Duration: {task.duration}</p>
        <p>Description: {task.description}</p>
        <p>Status: {task.status}</p>
      </div>
    </div>
  );
};

export default TaskComponent;
