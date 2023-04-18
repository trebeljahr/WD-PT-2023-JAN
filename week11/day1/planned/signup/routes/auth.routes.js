const User = require("../models/User.model");
const bcryptjs = require("bcryptjs");
const saltRounds = 12;

// const crypto = require("crypto");
// const { promisify } = require("util");
// const scrypt = promisify(crypto.scrypt);

const router = require("express").Router();

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", async (req, res) => {
  console.log("Hello!!!");
  //   ... do something
  const { email, password } = req.body;
  // never ever do this!

  //   const newUser = new User({ email, password });
  const salt = await bcryptjs.genSalt(saltRounds);
  console.log(salt);

  const hash = await bcryptjs.hash(password, salt);
  console.log(hash);

  await newUser.save({ email, password: hash });
  res.redirect("/profile");
});

router.get("/profile", (req, res) => {
  res.render("auth/profile");
});

module.exports = router;
