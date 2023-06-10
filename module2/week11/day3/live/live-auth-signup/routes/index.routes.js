const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const authRoutes = require("./auth.routes");
const protectedRoutes = require("./protected.routes");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.use("/auth", authRoutes);
router.use("/protected", isLoggedIn, protectedRoutes);

// router.use("/", authRoutes);

// both do the same, the below is a little more concise.
// router.use("/auth", require("./auth.routes"));
// router.use("/", require("./auth.routes"));

router.get("/messages", isLoggedIn, (req, res) => {
  res.send("Here are your messages for " + req.session.user.email);
});

router.get("/profile", isLoggedIn, (req, res) => {
  console.log(req.session);
  console.log(req.session.user);

  res.render("profile", { userEmail: req.session.user.email });
});

module.exports = router;
