import React from "react";
import TaskForm from "../components/TaskForm";
import TaskService from "../services/taskService";

const AddTask = () => {
  return (
    <div className="">
      <h3>Create New Task</h3>
      <TaskForm onSubmit={TaskService.createTask} />
    </div>
  );
};

export default AddTask;
