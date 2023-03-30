const mongoose = require("mongoose");
//getting the model from our file
//EVERYTHING COMES OFF OF THE MODEL!!!
const VikingModel = require("../models/VikingModel");

//creating some vikings
const Ragnar = {
  firstName: "Ragnar",
  familyName: "Lothbrok",
  weapon: "Smarts",
  placesConquered: 0,
};
const Odin = {
  firstName: "Odin",
  weapon: "Power",
  placesConquered: 50,
};
const Floki = {
  firstName: "Floki",
  weapon: "Boat Making",
  placesConquered: 0,
};
//making an array of vikings to insert many at once to the DB
const vikingArray = [Ragnar, Odin, Floki];

//connect to the db first
mongoose
  //If you have problems connecting, try instead of localhost:27017 ===> mongodb://127.0.0.1/Valhala
  .connect("mongodb://localhost:27017/Valhala")
  .then(() => {
    console.log("Connected all good");
    //drops or cleans the database bc nodemon
    //return VikingModel.deleteMany();
    return;
  })
  .then(() => {
    console.log("Database cleaned, ready to insert");
    //return VikingModel.create(Ragnar);
    //return VikingModel.insertMany(vikingArray);
    return;
  })
  .then(() => {
    //console.log("Vikings created");
    //finding one viking with the findOne method from mongoose
    //return VikingModel.findOne({ firstName: 'Ragnar' });
    //<========
    //finding one viking with findById
    return VikingModel.findById("6425cc6fc8f5a40077dab635");
    //<========
    //find all of the vikings in the DB
    //return VikingModel.find();
  })
  .then((oneVikingFound) => {
    console.log("The viking that you are looking for", oneVikingFound);
    return VikingModel.findByIdAndUpdate(
      "6425cc6fc8f5a40077dab635",
      {
        familyName: "",
      },
      { new: true }
    );
  })
  .then((updatedViking) => {
    console.log("Here is the response for the updated viking", updatedViking);
    //find by id and delete example
    // return VikingModel.findByIdAndDelete("6425cc6fc8f5a40077dab636");
    //find one and delete example
    return VikingModel.findOneAndDelete({ firstName: "Floki" });
  })
  .then((deletedRes) => {
    console.log("You deleted a viking", deletedRes);
  })
  .catch((err) => console.log("There was an error", err));
