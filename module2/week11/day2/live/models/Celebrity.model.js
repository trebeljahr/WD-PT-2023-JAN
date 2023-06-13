//  Add your code here
const { model, Schema } = require("mongoose");

const celebrityModel = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

module.exports = model("Celebrity", celebrityModel);
