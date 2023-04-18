const User = require("../models/User.model");
const bcryptjs = require("bcryptjs");

const router = require("express").Router();

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.post("/signup", async (req, res) => {
  console.log(req.body);

  // DON'T EVER DO THIS.
  //   const user = new User({ email: req.body.email, password: req.body.password });

  // hash function => easy to compute one way.

  // plain text => hash is super easy
  // hash => plain text

  // hash functions are super hard to write, don't write your own... ever.

  const salt = await bcryptjs.genSalt(12);
  const hash = await bcryptjs.hash(req.body.password, salt);
  console.log(hash);

  const user = new User({ email: req.body.email, password: hash });
  await user.save();

  // const user = await User.create({ email: req.body.email, password: hash })

  res.send("signed up");
});

module.exports = router;
