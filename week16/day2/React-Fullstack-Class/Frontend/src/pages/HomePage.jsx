import React, { useEffect, useState } from "react";
import TaskService from "../services/taskService";
import TaskComponent from "../components/TaskComponent";
import { Link } from "react-router-dom";
import { BarLoader } from "react-spinners";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await TaskService.getAllTasks();
        setTasks(response.data);
      } catch {
        import("../data/dummyTasks.json")
          .then((data) => {
            setTasks(data.tasks);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };

    fetchTasks();

    return () => {
      setTasks([]);
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center">
        <h2>Here's the Tasks left to do</h2>
        <button className=" btn-primary">
          <Link to={"/createTask"}>Create New Task</Link>
        </button>

        {loading && <BarLoader color="#123abc" loading={true} size={500} />}

        {!loading &&
          tasks.map((task) => {
            return <TaskComponent task={task} key={task.id}></TaskComponent>;
          })}
      </div>
    </div>
  );
};

export default HomePage;
