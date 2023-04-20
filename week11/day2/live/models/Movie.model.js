//  Add your code here
const { model, Schema } = require("mongoose");

const movieModel = new Schema({
  title: String,
  plot: String,
  genre: String,
  // should work the same as the below.
  // cast: [{ type: Schema.Types.ObjectId, ref: "celebrities" }],
  cast: [{ type: Schema.Types.ObjectId, ref: "Celebrity" }],
});

module.exports = model("Movie", movieModel);
