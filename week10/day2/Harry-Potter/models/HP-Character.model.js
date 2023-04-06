const { Schema, model } = require("mongoose");

const charSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  house: String,
  image: String,
  wand: { wood: String, core: String, length: Number },
});

const CharModel = model("HP-character", charSchema);
module.exports = CharModel;
