const FanModel = require("../models/Fan.model");
const MovieModel = require("../models/Movie.model");

const router = require("express").Router();

//create a fan route
router.get("/fan-create", async (req, res) => {
  const allMovies = await MovieModel.find();
  res.render("create-a-fan", { allMovies });
});

//post route to creat a fan
router.post("/fan-create", async (req, res) => {
  //first make sure, you recieve the req.body
  //req.body destructored
  //req.body looks like this {name: 'Lena', moviesTheyLike: ['black panther]}
  //const { name, moviesTheyLike } = req.body;
  //   console.log("here is the body", req.body, name, moviesTheyLike);
  const newFanCreated = await FanModel.create(req.body);
  console.log("New fan Created ", newFanCreated);
  res.redirect(`/fan/fan-page/${newFanCreated._id}`);
});
router.get("/fan-page/:fanId", async (req, res) => {
  const currentFan = await FanModel.findById(req.params.fanId).populate(
    "moviesTheyLike"
  );
  console.log("current fan route,", currentFan);
  res.render("fan-page", currentFan);
});
module.exports = router;
