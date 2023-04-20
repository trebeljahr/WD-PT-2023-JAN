const CelebrityModel = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

router.get("/celebrities", async (req, res, next) => {
  try {
    const celebrities = await CelebrityModel.find();
    res.render("celebrities/celebrities", {
      celebrities,
    });
  } catch (err) {
    next(err);
  }
});

// all your routes here
router.get("/celebrities/create", (req, res) => {
  res.render("celebrities/new-celebrity");
});

router.post("/celebrities/create", async (req, res, next) => {
  console.log(req.body);
  try {
    const { name, occupation, catchPhrase } = req.body;
    // const newCelebrity = new CelebrityModel({
    //   name,
    //   occupation: occupation,
    //   catchPhrase,
    // });
    // await newCelebrity.save();

    await CelebrityModel.create({
      name,
      occupation: occupation,
      catchPhrase,
    });
    res.send("received the form!");
  } catch (err) {
    next(err);
  }
});

const router2 = require("express").Router();
router2.get("/hello", (req, res) => {
  res.send("hello");
});

router.use("/celebrities/router2", router2);

module.exports = router;

// POST /celebrities/create
// GET /celebrities/create

// GET /celebritites/router2/hello

// GET /
// GET /images/favicon.ico
// GET /javascripts/scripts.js
// GET /stylesheets/style.css
