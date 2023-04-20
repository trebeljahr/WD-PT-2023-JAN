const CelebrityModel = require("../models/Celebrity.model");
const MovieModel = require("../models/Movie.model");
const router = require("express").Router();

router.get("/movies", async (req, res, next) => {
  try {
    const movies = await MovieModel.find();
    res.render("movies/movies", {
      movies,
    });
  } catch (err) {
    next(err);
  }
});

router.get("/movies/create", async (req, res) => {
  const celebrities = await CelebrityModel.find();

  res.render("movies/new-movie", { options: celebrities });
});

router.post("/movies/create", async (req, res, next) => {
  try {
    const { title, plot, genre, cast } = req.body;
    await MovieModel.create({ title, plot, genre, cast });
    res.redirect("/movies");
  } catch (err) {
    next(err);
  }
});

router.get("/movies/:movieId", async (req, res, next) => {
  console.log(req.params);
  try {
    // const { movieId } = req.params;
    const movie = await MovieModel.findById(req.params.movieId); // .populate("author"); // would also work as a one liner because mongoose is awesome
    await movie.populate("cast");
    // { title: "", genre, plot, cast: [{}] }
    movie.pizza = "Margherita";
    // { title: "", genre, plot, cast: [{}], pizza: "Margherita" }

    // sorry for this _doc confusion in class. Mongoose is sneaky here because it
    // uses something called "setters" and "getters" for the object key/value properties
    // the result is something that behaves like an object but isn't really a {} object like we are used to.
    // this is why it has something like .populate() and other methods in the first place.
    // Because it's a CLASS INSTANCE!!!
    // you can verify that by using the instanceof keyword i.e. this should be true (movie instanceof Document) ofc. you have to require the Document class constructor from mongoose for this comparison to work ^^ Document Reference is here: https://mongoosejs.com/docs/api/document.html#Document
    // but if we spread over this "object" which is really an instance, it behaves weirdly.
    // all the "real" data for the document is still there, it's just stored under the _doc key...
    // so that's why we can spread over ...movie._doc.
    // this is a common confusion (I always forget it when I use mongoose)
    // you can see that I am not the only one forgetting it – this exact problem has a stackoverflow thread:
    // https://stackoverflow.com/questions/48014504/es6-spread-operator-mongoose-result-copy
    // furthermore, you could also use ...movie.toObject() instead of the ...movie._doc
    // but if all of this is just confusing to you, don't worry, it's some detail about how
    // mongoose works together with the ... spread operator because movie is not *really* an object but a class instance
    const options = { ...movie._doc, title: "Hello" };
    // now value of options is { title: "Hello", genre, plot, cast: [{}], pizza: "Margherita" }

    console.log(options);

    res.render("movies/movie-details", options);

    // res.render("movies/movie-details", { movie, pizza: "Margherita"}); // this way has the benefit that you cann add more data easily and are not limited to sending only what is in the movie object
    // res.render("movies/movie-details", movie); // what we send to hbs { title, plot, genre, cast }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
