const { Schema, model } = require("mongoose");

const fanSchema = new Schema({
  name: String,
  moviesTheyLike: [{ type: Schema.Types.ObjectId, ref: "movie" }],
});

//model() takes two arguments, the first is the collection name and the second is the shape or Schema
//mongoDB automatically makes the collection name plural
const FanModel = model("fan", fanSchema);
module.exports = FanModel;
