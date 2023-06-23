import axios from "axios";

const API_BASE_URL = "http://localhost:4000";

const TaskService = {
  getAllTasks: () => {
    return axios.get(`${API_BASE_URL}/tasks`);
  },
  getTask: (taskId) => {
    return axios.get(`${API_BASE_URL}/tasks/${taskId}`);
  },
  createTask: (taskData) => {
    console.log("here is the task to create", taskData);
    return axios.post(`${API_BASE_URL}/tasks`, taskData);
  },
  updateTask: (taskId, taskData) => {
    return axios.put(`${API_BASE_URL}/tasks/${taskId}`, taskData);
  },
  deleteTask: (taskId) => {
    return axios.delete(`${API_BASE_URL}/tasks/${taskId}`);
  },
};

export default TaskService;
