const express = require("express");
const router = express.Router();
const MovieModel = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

//get route to show all of the movies from the DB
router.get("/movies", async (req, res) => {
  //first get all of the movies from the DB
  const allMovies = await MovieModel.find();
  console.log("Here are the movies in the DB", allMovies);
  res.render("movies", { movies: allMovies, testTitle: "Wiebke title" });
});

//get route for a single movie
router.get("/movie/:movieID", async (req, res) => {
  const { movieID } = req.params;
  //req.params is an object that you need get value out of to use
  // console.log("here is my params", movieID, req.params);
  let foundMovie = await MovieModel.findById(movieID);
  console.log("Here is our found movie", foundMovie);
  res.render("single-movie", foundMovie);
});

//update a movie get route
router.get("/movie/:movieID/update", async (req, res) => {
  const oneMovie = await MovieModel.findById(req.params.movieID);
  console.log(oneMovie);
  res.render("update-movie-form", oneMovie);
});

//post route to update the movie
router.post("/movie/:id/update", async (req, res) => {
  const { id } = req.params;
  let newUpdatedMovie = await MovieModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  console.log(
    "here is our new updated movie, where Olga is the director",
    newUpdatedMovie
  );
  res.redirect(`/movie/${newUpdatedMovie._id}`);
});

//delete route for one movie
router.get("/delete/:movieID", async (req, res) => {
  const { movieID } = req.params;
  // await MovieModel.findByIdAndDelete(movieID);
  // res.redirect("/movies");
});

// //object deconstruction example
// const obj = {
//   student: "Zuzana",
//   TA: "Shaun",
// };
// const { student, TA } = obj;
// console.log(student, TA, obj.student, obj.TA)
// //zuzana's example
// router.get("/movies/:moviesId", async (req, res, next) => {
//   const id = await Movie.findById(req.params.moviesId);
//   res.render("moviedetails", { id });
// });
module.exports = router;
