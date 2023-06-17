const TaskModel = require("../models/Task.model");

const router = require("express").Router();

//get route for all tasks
router.get("/tasks", async (req, res) => {
  const allTasks = await TaskModel.find();
  res.json(allTasks);
});

//post route to create a task
router.post("/tasks", async (req, res) => {
  try {
    const newTask = await TaskModel.create(req.body);
    console.log("Successful task creation", newTask);
    res.json(newTask);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
