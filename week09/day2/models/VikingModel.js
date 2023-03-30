//Taking the Schema and the model from the library mongoose
const { Schema, model } = require("mongoose");

//<============ another way to get Schema and model  ============>
// const mongoose = require('mongoose')
// mongoose.Schema
// mongoose.model

//Schema defines the shape of my viking
const vikingSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  familyName: String,
  weapon: String,
  placesConquered: Number,
});

//making the model for our viking, this is what connects the code to the DB
//always uppercase the model name
const VikingModel = model("viking", vikingSchema);
module.exports = VikingModel;
