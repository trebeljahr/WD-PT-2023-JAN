const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  owner: String,
  duration: String,
  name: String,
  description: String,
  status: String,
});

const TaskModel = model("task", taskSchema);
module.exports = TaskModel;
