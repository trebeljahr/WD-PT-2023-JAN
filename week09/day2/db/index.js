const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("Connected to the db!!!");
  })
  .catch((err) => console.log("there was a problem "));
