const TaskModel = require("../models/Task.model");

const tasksData = [
  {
    id: 2,
    owner: "Alice",
    duration: "Short",
    name: "Grocery Shopping",
    description: "Buy groceries for the week",
    status: "Not Done",
  },
  {
    id: 3,
    owner: "John",
    duration: "Long",
    name: "Painting",
    description: "Paint the living room walls",
    status: "Not Done",
  },
  {
    id: 4,
    owner: "Sarah",
    duration: "Medium",
    name: "Gardening",
    description: "Plant flowers in the backyard",
    status: "Not Done",
  },
  {
    id: 5,
    owner: "David",
    duration: "Short",
    name: "Call Mom",
    description: "Give Mom a call and catch up",
    status: "Not Done",
  },
  {
    id: 6,
    owner: "Emily",
    duration: "Medium",
    name: "Coding Project",
    description: "Work on the coding project for client X",
    status: "Done",
  },
];

require("../db");

const seedingData = async () => {
  try {
    await TaskModel.deleteMany();
    await TaskModel.insertMany(tasksData);
    console.log("data seeded successfully");
  } catch (err) {
    console.log("there was an error", err);
  }
};
seedingData();
